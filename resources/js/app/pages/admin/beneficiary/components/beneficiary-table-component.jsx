import { UserPlusIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import FilterDrawerComponent from "./filter-drawer-component";
import { Link } from "@inertiajs/react";
import { useSelector } from "react-redux";
import {
    verify_beneficiary_thunk,
    get_personal_information_thunk,
} from "@/app/redux/personal-information-thunk";
import Swal from "sweetalert2";
import store from "@/app/store/store";
import Spinner from "@/app/components/spinner";
import OverlaySpinner from "@/app/components/overlay-spinner";
import AddSubsidyModal from "@/app/components/modals/add-subsidy-modal";
import BeneficiaryMap from "@/app/components/map/beneficiary-map";

export default function BenefeciaryTableComponent() {
    const { personal_informations } = useSelector(
        (store) => store.personal_information
    );
    const { user } = useSelector(
        (store) => store.app
    );
    const [editingStatus, setEditingStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [isSubsidyModalOpen, setIsSubsidyModalOpen] = useState(false);
    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
    const [showMap, setShowMap] = useState(false);
    const statusOptions = ['active', 'inactive', 'declined'];
    const query = new URLSearchParams(window.location.search);
    const status = query.get("status");

    useEffect(() => {
        const loadData = async () => {
            try {
                await store.dispatch(get_personal_information_thunk());
            } finally {
                setIsPageLoading(false);
            }
        };
        loadData();
    }, []);

    const handleStatusChange = async (data, newStatus) => {
        setEditingStatus(null);
        setIsLoading(true);
        try {
            await store.dispatch(
                verify_beneficiary_thunk({
                    ...data,
                    status: newStatus,
                })
            );

            store.dispatch(get_personal_information_thunk());
            
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
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddSubsidy = (beneficiaryId) => {
        setSelectedBeneficiary(beneficiaryId);
        setIsSubsidyModalOpen(true);
    };

    if (isPageLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Spinner size="h-8 w-8" color="text-green-500" />
                <span className="ml-2">Loading...</span>
            </div>
        );
    }

    return (
        <>
            <OverlaySpinner isLoading={isLoading} />
            <AddSubsidyModal 
                isOpen={isSubsidyModalOpen}
                setIsOpen={setIsSubsidyModalOpen}
                beneficiaryId={selectedBeneficiary}
            />
            <div className="px-4 sm:px-6 lg:px-8 mt-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold text-gray-900">
                            Active Beneficiary
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the active benefeciary in the system
                            including their rsbsa number, registration no.,
                            fullname, association and livelihood.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none space-x-4">
                        <button
                            onClick={() => setShowMap(!showMap)}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                        >
                            {showMap ? 'Show Table' : 'Show Map'}
                        </button>
                    </div>
                </div>
                {showMap ? (
                    <div className="mt-8">
                        <BeneficiaryMap 
                            beneficiaries={personal_informations?.data || []}
                            filters={{ status }}
                        />
                    </div>
                ) : (
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                                            >
                                                RSBSA No.
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                            >
                                                Register No.
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                            >
                                                Lastname
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                            >
                                                Firstname
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                            >
                                                Middlename
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                            >
                                                Livelihood/Organization
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                            >
                                                Barangay
                                            </th>
                                            <th
                                                scope="col"
                                                className="relative py-3 pl-3 pr-4 sm:pr-0"
                                            >
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {personal_informations?.data?.map((person) => (
                                            <tr key={person.email}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                    {person.register_id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    {person.id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                                    {person.lastname}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                                    {person.firstname}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                                    {person.middlename}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    <p className="text-gray-500 italic">
                                                        {person?.farm_profile
                                                            ?.main_livelihood ?? "N/A"}
                                                    </p>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    {editingStatus === person.id ? (
                                                        <select
                                                            className="rounded-md border-gray-300 text-xs focus:border-green-500 focus:ring-green-500"
                                                            defaultValue={person.status}
                                                            onChange={(e) => handleStatusChange(person, e.target.value)}
                                                            onBlur={() => setEditingStatus(null)}
                                                            disabled={isLoading}
                                                        >
                                                            {isLoading ? (
                                                                <div className="flex items-center justify-center py-1">
                                                                    <Spinner size="h-4 w-4" color="text-green-500" />
                                                                    <span className="ml-2">Updating...</span>
                                                                </div>
                                                            ) : (
                                                                statusOptions.map((status) => (
                                                                    <option key={status} value={status}>
                                                                        {status}
                                                                    </option>
                                                                ))
                                                            )}
                                                        </select>
                                                    ) : (
                                                        <span
                                                            onClick={() => setEditingStatus(person.id)}
                                                            className={`inline-flex cursor-pointer items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                                                                person.status === 'active'
                                                                    ? 'bg-green-50 text-green-700 ring-green-600/20'
                                                                    : person.status === 'inactive'
                                                                    ? 'bg-yellow-50 text-yellow-700 ring-yellow-600/20'
                                                                    : 'bg-red-50 text-red-700 ring-red-600/20'
                                                            }`}
                                                        >
                                                            {person.status}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                                    {person.barangay}
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            href={`/administrator/profile/${person.id}`}
                                                            className="text-indigo-600 hover:text-indigo-900"
                                                        >
                                                            View Profile
                                                            <span className="sr-only">
                                                                , {person.rsbsa}
                                                            </span>
                                                        </Link>
                                                        {status === 'active' && (
                                                            <button
                                                                onClick={() => handleAddSubsidy(person.id)}
                                                                className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                                                            >
                                                                Request Subsidy
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
                )}
            </div>
        </>
    );
}
