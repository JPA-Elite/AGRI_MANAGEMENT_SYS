import React, { useState } from 'react';
import { BARANGAYS, LIVELIHOODS, BARANGAY_COORDINATES, MAP_CENTER } from '@/app/constants/general';

export default function BeneficiaryMap({ beneficiaries, filters }) {
    const [selectedLivelihood, setSelectedLivelihood] = useState('all');
    const [selectedBarangay, setSelectedBarangay] = useState('all');

    const filteredBeneficiaries = beneficiaries.filter(b => {
        const livelihoodMatch = selectedLivelihood === 'all' || 
            b.farm_profile?.main_livelihood?.toLowerCase() === selectedLivelihood.toLowerCase();
        
        const barangayMatch = selectedBarangay === 'all' || 
            b.barangay?.toLowerCase() === selectedBarangay.toLowerCase();

        return livelihoodMatch && barangayMatch;
    });

    const uniqueBarangays = [...new Set(beneficiaries.map(b => b.barangay))];
    const uniqueLivelihoods = [...new Set(beneficiaries.map(b => b.farm_profile?.main_livelihood).filter(Boolean))];

    const getMapParameters = () => {
        const selectedCoords = selectedBarangay !== 'all' ? 
            BARANGAY_COORDINATES[selectedBarangay] : 
            MAP_CENTER;

        const zoom = selectedBarangay !== 'all' ? 15 : 13;
        
        return {
            center: selectedCoords,
            zoom,
            markers: filteredBeneficiaries.map(b => ({
                lat: BARANGAY_COORDINATES[b.barangay]?.lat,
                lng: BARANGAY_COORDINATES[b.barangay]?.lng,
                title: `${b.firstname} ${b.lastname} - ${b.barangay}`
            })).filter(m => m.lat && m.lng)
        };
    };

    const mapParams = getMapParameters();
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?` +
        `bbox=${mapParams.center.lng-0.02}%2C${mapParams.center.lat-0.02}%2C` +
        `${mapParams.center.lng+0.02}%2C${mapParams.center.lat+0.02}` +
        `&layer=mapnik&zoom=${mapParams.zoom}` +
        mapParams.markers.map(m => `&marker=${m.lat},${m.lng}&title=${encodeURIComponent(m.title)}`).join('');

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
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src={mapUrl}
                    ></iframe>
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
