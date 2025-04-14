import React from 'react';
import { BARANGAYS, LIVELIHOODS } from '@/app/constants/general';

export default function PersonalInformationForm({ formData, handleChange }) {
    return (
        <form>
            <div>
                <label htmlFor="barangay">Barangay</label>
                <select 
                    name="barangay"
                    value={formData.barangay}
                    onChange={handleChange}
                >
                    <option value="">Select Barangay</option>
                    {BARANGAYS.map(barangay => (
                        <option key={barangay} value={barangay}>{barangay}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="main_livelihood">Main Livelihood</label>
                <select 
                    name="main_livelihood"
                    value={formData.main_livelihood}
                    onChange={handleChange}
                >
                    <option value="">Select Livelihood</option>
                    {LIVELIHOODS.map(livelihood => (
                        <option key={livelihood} value={livelihood}>{livelihood}</option>
                    ))}
                </select>
            </div>
        </form>
    );
}