import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '70vh'
};

const center = {
    lat: 9.2661,
    lng: 123.3035
};

export default function BeneficiaryGoogleMap({ beneficiaries }) {
    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
    const [selectedLivelihood, setSelectedLivelihood] = useState('all');
    const [selectedBarangay, setSelectedBarangay] = useState('all');

    const filteredBeneficiaries = beneficiaries.filter(b => {
        return (selectedLivelihood === 'all' || b.farm_profile?.main_livelihood === selectedLivelihood) &&
               (selectedBarangay === 'all' || b.barangay === selectedBarangay);
    });

    const uniqueBarangays = [...new Set(beneficiaries.map(b => b.barangay))];
    const uniqueLivelihoods = [...new Set(beneficiaries.map(b => b.farm_profile?.main_livelihood).filter(Boolean))];

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <select 
                    value={selectedLivelihood}
                    onChange={(e) => setSelectedLivelihood(e.target.value)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                    <option value="all">All Livelihoods</option>
                    {uniqueLivelihoods.map(livelihood => (
                        <option key={livelihood} value={livelihood}>{livelihood}</option>
                    ))}
                </select>

                <select 
                    value={selectedBarangay}
                    onChange={(e) => setSelectedBarangay(e.target.value)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                    <option value="all">All Barangays</option>
                    {uniqueBarangays.map(barangay => (
                        <option key={barangay} value={barangay}>{barangay}</option>
                    ))}
                </select>
            </div>

            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                >
                    {filteredBeneficiaries.map((beneficiary) => (
                        <Marker
                            key={beneficiary.id}
                            position={{
                                lat: parseFloat(beneficiary.latitude),
                                lng: parseFloat(beneficiary.longitude)
                            }}
                            onClick={() => setSelectedBeneficiary(beneficiary)}
                        />
                    ))}

                    {selectedBeneficiary && (
                        <InfoWindow
                            position={{
                                lat: parseFloat(selectedBeneficiary.latitude),
                                lng: parseFloat(selectedBeneficiary.longitude)
                            }}
                            onCloseClick={() => setSelectedBeneficiary(null)}
                        >
                            <div className="p-2">
                                <h3 className="font-semibold">
                                    {selectedBeneficiary.firstname} {selectedBeneficiary.lastname}
                                </h3>
                                <p>RSBSA: {selectedBeneficiary.register_id}</p>
                                <p>Livelihood: {selectedBeneficiary.farm_profile?.main_livelihood}</p>
                                <p>Barangay: {selectedBeneficiary.barangay}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}
