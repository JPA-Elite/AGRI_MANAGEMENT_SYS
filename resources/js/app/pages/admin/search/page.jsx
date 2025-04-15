import React, { useEffect } from 'react';
import AdminLayout from '../layout';
import { Link } from '@inertiajs/react';
import { useSelector } from 'react-redux';
import store from '@/app/store/store';
import { searchBeneficiariesThunk } from '@/app/redux/search-thunk';
import Spinner from '@/app/components/spinner';

export default function SearchPage() {
    const searchState = useSelector((state) => state.search) || { results: null, loading: false, error: null };
    const { results, loading, error } = searchState;
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query'); // Remove the || '' to allow null/undefined

    useEffect(() => {
        // Always dispatch to get either filtered or all data
        store.dispatch(searchBeneficiariesThunk(query));
    }, [query]);

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex items-center justify-center min-h-screen">
                    <Spinner size="h-8 w-8" color="text-green-500" />
                    <span className="ml-2">Loading...</span>
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold text-gray-900">
                            Search Results for "{query}"
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Found {results?.total || 0} beneficiaries matching your search
                        </p>
                    </div>
                </div>

                {error ? (
                    <div className="mt-8 text-red-600">{error}</div>
                ) : (
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">RSBSA No.</th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Barangay</th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                                            <th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {results?.data?.map((person) => (
                                            <tr key={person.id}>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    {person.register_id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    {person.firstname} {person.middlename} {person.lastname}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    {person.barangay}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                                        person.status === 'active'
                                                            ? 'bg-green-100 text-green-800'
                                                            : person.status === 'inactive'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}>
                                                        {person.status}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
                                                    <Link
                                                        href={`/administrator/profile/${person.id}`}
                                                        className="text-indigo-600 hover:text-indigo-900"
                                                    >
                                                        View Profile
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
