import React from 'react';
import AdminLayout from '../layout';
import EquipmentRequestSection from './sections/equipment-request-section';
import FertilizerRequestSection from './sections/fertilizer-request-section';
import NotFoundSection from './sections/not-found-section';

export default function RequestPage() {
    const query = new URLSearchParams(window.location.search);
    const status = query.get("status");

    const renderSection = () => {
        switch (status) {
            case 'equipment':
                return <EquipmentRequestSection />;
            case 'fertilizer':
                return <FertilizerRequestSection />;
            default:
                return <NotFoundSection />;
        }
    };

    return (
        <AdminLayout>
            {renderSection()}
        </AdminLayout>
    );
}
