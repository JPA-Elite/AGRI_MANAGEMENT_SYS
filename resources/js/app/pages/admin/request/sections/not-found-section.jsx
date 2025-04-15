import React from 'react';

export default function NotFoundSection() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-900">Page Not Found</h2>
                <p className="mt-2 text-sm text-gray-700">
                    The requested section could not be found.
                </p>
            </div>
        </div>
    );
}
