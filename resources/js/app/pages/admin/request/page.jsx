import React from 'react';
import AdminLayout from '../layout';
import RequestListSection from './sections/request-list-section';
import NotFoundSection from './sections/not-found-section';

export default function RequestPage() {
    const query = new URLSearchParams(window.location.search);
    const status = query.get("status");

    const renderSection = () => {
        switch (status) {
            case 'all':
                return <RequestListSection />;
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
