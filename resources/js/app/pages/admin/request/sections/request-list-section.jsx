import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import store from "@/app/store/store";
import { getAllRequestsThunk } from "@/app/redux/request-thunk";
import AddRequestModal from '@/app/components/request/add-request-modal';
import ViewRequestModal from '@/app/components/request/view-request-modal';
import moment from 'moment';
import Spinner from "@/app/components/spinner";
import axios from 'axios';
import Swal from 'sweetalert2';

export default function RequestListSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const { requests, loading } = useSelector((state) => state.request);

    const handleViewDetails = (request) => {
        setSelectedRequest(request);
        setIsViewModalOpen(true);
    };

    const handleStatusUpdate = async (requestId, newStatus) => {
        try {
            await axios.put(`/api/beneficiary-requests/${requestId}/status`, {
                status: newStatus
            });
            
            store.dispatch(getAllRequestsThunk());
            
            Swal.fire({
                title: "Success!",
                text: `Request status updated to ${newStatus}`,
                icon: "success",
                timer: 1500
            });
        } catch (error) {
            console.error('Status update error:', error);
            Swal.fire({
                title: "Error!",
                text: error.response?.data?.message || "Failed to update status",
                icon: "error"
            });
        }
    };

    useEffect(() => {
        store.dispatch(getAllRequestsThunk());
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Spinner size="h-8 w-8" color="text-green-500" />
                <span className="ml-2">Loading...</span>
            </div>
        );
    }

    return (
        <>
            <AddRequestModal 
                isOpen={isModalOpen} 
                setIsOpen={setIsModalOpen}
                onRequestAdded={() => store.dispatch(getAllRequestsThunk())}
            />
            <ViewRequestModal
                isOpen={isViewModalOpen}
                setIsOpen={setIsViewModalOpen}
                data={selectedRequest}
            />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold text-gray-900">Beneficiary Requests</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            List of all requests from beneficiaries
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                        >
                            Add Request
                        </button>
                    </div>
                </div>

                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Beneficiary</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Request</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                                        <th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {requests?.data?.map((request) => (
                                        <tr key={request.id}>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {request.beneficiary.firstname} {request.beneficiary.lastname}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {request.request_type}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {request.category}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {request.specific_type}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {moment(request.requested_date).format('LL')}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                <select
                                                    value={request.status}
                                                    onChange={(e) => handleStatusUpdate(request.id, e.target.value)}
                                                    disabled={request.status !== 'pending'}
                                                    className={`rounded-full px-2 py-1 text-xs font-semibold cursor-${request.status === 'pending' ? 'pointer' : 'not-allowed'} ${
                                                        request.status === 'approved' 
                                                            ? 'bg-green-100 text-green-800'
                                                            : request.status === 'rejected'
                                                            ? 'bg-red-100 text-red-800'
                                                            : 'bg-yellow-100 text-yellow-800'
                                                    }`}
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="approved">Approved</option>
                                                    <option value="rejected">Rejected</option>
                                                </select>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
                                                <button
                                                    onClick={() => handleViewDetails(request)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
