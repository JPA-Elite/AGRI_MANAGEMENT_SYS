import React, { useState, useEffect, useRef } from 'react';
import { BARANGAYS, LIVELIHOODS, BARANGAY_COORDINATES, MAP_CENTER } from '@/app/constants/general';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default icon path issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function BeneficiaryMap({ beneficiaries, filters }) {
    const [selectedLivelihood, setSelectedLivelihood] = useState('all');
    const [selectedBarangay, setSelectedBarangay] = useState('all');
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markersLayerRef = useRef(null);

    const filteredBeneficiaries = beneficiaries.filter(b => {
        const livelihoodMatch = selectedLivelihood === 'all' || 
            b.farm_profile?.main_livelihood?.toLowerCase() === selectedLivelihood.toLowerCase();
        
        const barangayMatch = selectedBarangay === 'all' || 
            b.barangay?.toLowerCase() === selectedBarangay.toLowerCase();

        return livelihoodMatch && barangayMatch;
    });

    console.log('Filtered Beneficiaries:', filteredBeneficiaries);

    const uniqueBarangays = [...new Set(beneficiaries.map(b => b.barangay))];
    const uniqueLivelihoods = [...new Set(beneficiaries.map(b => b.farm_profile?.main_livelihood).filter(Boolean))];

    const getMapParameters = () => {
        const selectedCoords = selectedBarangay !== 'all' ? 
            BARANGAY_COORDINATES[selectedBarangay] : 
            MAP_CENTER;

        const zoom = selectedBarangay !== 'all' ? 15 : 13;
        
        let markers = [];
        if (selectedBarangay === 'all') {
            // Add markers for all filtered beneficiaries
            markers = filteredBeneficiaries
                .filter(b => BARANGAY_COORDINATES[b.barangay])
                .map(b => ({
                    lat: BARANGAY_COORDINATES[b.barangay].lat,
                    lng: BARANGAY_COORDINATES[b.barangay].lng,
                    title: `${b.firstname} ${b.lastname} - ${b.barangay}`
                }));
        } else {
            // Add marker for selected barangay
            markers = [{
                lat: BARANGAY_COORDINATES[selectedBarangay]?.lat,
                lng: BARANGAY_COORDINATES[selectedBarangay]?.lng,
                title: selectedBarangay
            }];
        }

        return {
            center: selectedCoords,
            zoom,
            markers
        };
    };

    useEffect(() => {
        if (!mapRef.current) return;

        // Initialize map if not already initialized
        if (!mapInstanceRef.current) {
            mapInstanceRef.current = L.map(mapRef.current).setView([MAP_CENTER.lat, MAP_CENTER.lng], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(mapInstanceRef.current);
            markersLayerRef.current = L.layerGroup().addTo(mapInstanceRef.current);
        }

        // Update markers
        const mapParams = getMapParameters();
        markersLayerRef.current.clearLayers();

        mapParams.markers.forEach(marker => {
            if (marker.lat && marker.lng) {
                L.marker([marker.lat, marker.lng])
                    .bindPopup(marker.title)
                    .addTo(markersLayerRef.current);
            }
        });

        // Update view if center changed
        mapInstanceRef.current.setView([mapParams.center.lat, mapParams.center.lng], mapParams.zoom);
    }, [selectedBarangay, selectedLivelihood, beneficiaries]);

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <select 
                    value={selectedLivelihood}
                    onChange={(e) => setSelectedLivelihood(e.target.value)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                    <option value="all">All Livelihoods</option>
                    {LIVELIHOODS.map(livelihood => (
                        <option key={livelihood} value={livelihood}>{livelihood}</option>
                    ))}
                </select>

                <select 
                    value={selectedBarangay}
                    onChange={(e) => setSelectedBarangay(e.target.value)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                    <option value="all">All Barangays</option>
                    {BARANGAYS.map(barangay => (
                        <option key={barangay} value={barangay}>{barangay}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Map Section - Takes up 2/3 of space */}
                <div className="lg:col-span-2 h-[85vh] border rounded-lg overflow-hidden shadow-inner">
                    <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
                </div>

                {/* Beneficiary List Section - Takes up 1/3 of space */}
                <div className="lg:col-span-1 h-[85vh] overflow-y-auto">
                    <div className="space-y-4">
                        {filteredBeneficiaries.map((beneficiary) => (
                            <div 
                                key={beneficiary.id} 
                                className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                onClick={() => setSelectedBarangay(beneficiary.barangay)}
                            >
                                <h3 className="font-semibold">{beneficiary.firstname} {beneficiary.lastname}</h3>
                                <p className="text-sm text-gray-600">RSBSA: {beneficiary.register_id}</p>
                                <p className="text-sm text-gray-600">Livelihood: {beneficiary.farm_profile?.main_livelihood}</p>
                                <p className="text-sm text-gray-600">Barangay: {beneficiary.barangay}</p>
                                {BARANGAY_COORDINATES[beneficiary.barangay] && (
                                    <p className="text-sm text-gray-500 mt-2">
                                        Coordinates: {BARANGAY_COORDINATES[beneficiary.barangay].lat}, {BARANGAY_COORDINATES[beneficiary.barangay].lng}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
