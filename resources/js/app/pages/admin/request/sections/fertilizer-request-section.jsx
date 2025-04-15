import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import store from "@/app/store/store";
import { getFertilizerRequestsThunk } from "@/app/redux/fertilizer-request-thunk";
import AddFertilizerRequestModal from '../components/add-fertilizer-request-modal';
import ViewFertilizerRequestModal from '../components/view-fertilizer-request-modal';
import moment from 'moment';
import Spinner from "@/app/components/spinner";
import { REQUEST_STATUS_OPTIONS } from "@/app/constants/general";
import axios from 'axios';
import Swal from 'sweetalert2';

export default function FertilizerRequestSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingStatus, setEditingStatus] = useState(null);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const { fertilizer_requests, loading } = useSelector((state) => state.fertilizer_request);

    useEffect(() => {
        store.dispatch(getFertilizerRequestsThunk());
    }, []);

    const handleStatusChange = async (request, newStatus) => {
        setEditingStatus(null);
        try {
            await axios.put(`/api/fertilizer-requests/${request.id}/status`, { status: newStatus });
            await store.dispatch(getFertilizerRequestsThunk());
            await Swal.fire({
                title: "Success!",
                text: `Status updated successfully to ${newStatus}`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.error("Error updating status:", error);
            await Swal.fire({
                title: "Error!",
                text: "Failed to update status",
                icon: "error",
                showConfirmButton: true,
            });
        }
    };

    const handleViewDetails = (request) => {
        setSelectedRequest(request);
        setIsViewModalOpen(true);
    };

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
            <AddFertilizerRequestModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            <ViewFertilizerRequestModal 
                isOpen={isViewModalOpen}
                setIsOpen={setIsViewModalOpen}
                data={selectedRequest}
            />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold text-gray-900">Fertilizer Requests</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            List of fertilizer requests from beneficiaries
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
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Fertilizer Type</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Quantity</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Requested Date</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                                        <th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {fertilizer_requests?.data?.map((request) => (
                                        <tr key={request.id}>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {request.beneficiary.firstname} {request.beneficiary.lastname}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {request.fertilizer_type}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {request.quantity} bags
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {moment(request.requested_date).format('LL')}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {editingStatus === request.id ? (
                                                    <select
                                                        className="rounded-md border-gray-300 text-xs focus:border-green-500 focus:ring-green-500"
                                                        defaultValue={request.status}
                                                        onChange={(e) => handleStatusChange(request, e.target.value)}
                                                        onBlur={() => setEditingStatus(null)}
                                                    >
                                                        {REQUEST_STATUS_OPTIONS.map((status) => (
                                                            <option key={status} value={status}>
                                                                {status}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <span
                                                        onClick={() => setEditingStatus(request.id)}
                                                        className={`inline-flex cursor-pointer rounded-full px-2 text-xs font-semibold leading-5 ${
                                                            request.status === 'approved'
                                                                ? 'bg-green-100 text-green-800'
                                                                : request.status === 'rejected'
                                                                ? 'bg-red-100 text-red-800'
                                                                : 'bg-yellow-100 text-yellow-800'
                                                        }`}
                                                    >
                                                        {request.status}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-center text-sm font-medium">
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
