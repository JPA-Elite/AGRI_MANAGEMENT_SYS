import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getSubsidiesThunk, approveSubsidyThunk } from "@/app/redux/subsidy-thunk";
import store from "@/app/store/store";
import Spinner from "@/app/components/spinner";
import { Link } from "@inertiajs/react";
import moment from "moment";
import Swal from "sweetalert2";
import ViewSubsidyModal from "@/app/components/modals/view-subsidy-modal";

export default function SubsidySection() {
    const { subsidies, loading } = useSelector((state) => state.subsidy);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedSubsidy, setSelectedSubsidy] = useState(null);

    const handleViewDetails = (data) => {
        setSelectedSubsidy(data);
        setIsViewModalOpen(true);
    };

    const handleApprove = async (id) => {
        try {
            await store.dispatch(approveSubsidyThunk(id));
            await Swal.fire({
                title: "Success!",
                text: "Subsidy has been approved",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            await Swal.fire({
                title: "Error!",
                text: "Failed to approve subsidy",
                icon: "error",
                showConfirmButton: true,
            });
        }
    };

    useEffect(() => {
        store.dispatch(getSubsidiesThunk());
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
            <ViewSubsidyModal 
                isOpen={isViewModalOpen}
                setIsOpen={setIsViewModalOpen}
                data={selectedSubsidy}
            />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold text-gray-900">
                            Subsidy Records
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the subsidies in the system.
                        </p>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            Subsidy Name
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            Amount
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            Beneficiary Type
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            Date Released
                                        </th>
                                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                                            Status
                                        </th>
                                        <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-0">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {subsidies.map((subsidy) => (
                                        <tr key={subsidy.id}>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                                <div className="max-w-xs overflow-hidden overflow-ellipsis" title={subsidy.description}>
                                                    {subsidy.description}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                ₱{subsidy.amount}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                <div className="flex flex-col">
                                                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset mb-1">
                                                        {subsidy.beneficiary?.farm_profile?.main_livelihood ?? 'N/A'}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {moment(subsidy.date_released).format("LLL")}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                                                    subsidy.status === 'approved' 
                                                        ? 'bg-green-50 text-green-700 ring-green-600/20'
                                                        : 'bg-yellow-50 text-yellow-700 ring-yellow-600/20'
                                                }`}>
                                                    {subsidy.status}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleViewDetails(subsidy)}
                                                        className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                                                    >
                                                        View Details
                                                    </button>
                                                    {subsidy.status !== 'approved' && (
                                                        <button
                                                            onClick={() => handleApprove(subsidy.id)}
                                                            className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                                                        >
                                                            Approve
                                                        </button>
                                                    )}
                                                </div>
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
