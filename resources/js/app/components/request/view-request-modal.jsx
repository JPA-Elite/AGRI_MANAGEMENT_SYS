import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";

export default function ViewRequestModal({ isOpen, setIsOpen, data, onStatusUpdate }) {
    if (!data) return null;

    const handleStatusUpdate = async (newStatus) => {
        try {
            await axios.put(`/api/beneficiary-requests/${data.id}/status`, {
                status: newStatus
            });

            onStatusUpdate(); // Refresh parent data
            
            Swal.fire({
                title: "Success!",
                text: `Request has been ${newStatus}`,
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

    const renderStatusSection = () => (
        <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <div className="mt-2 flex items-center gap-2">
                <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    data.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : data.status === 'rejected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                }`}>
                    {data.status}
                </span>
                {/* {data.status === 'pending' && (
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleStatusUpdate('approved')}
                            className="px-2 py-1 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-700"
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => handleStatusUpdate('rejected')}
                            className="px-2 py-1 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700"
                        >
                            Reject
                        </button>
                    </div>
                )} */}
            </div>
        </div>
    );

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-start justify-center p-4 overflow-y-auto">
                    <div className="min-h-full flex items-center w-full">
                        <Dialog.Panel className="mx-auto w-full max-w-4xl rounded-lg bg-white p-8 shadow-xl">
                            <div className="border-b pb-4 mb-4">
                                <Dialog.Title className="text-lg font-medium">Request Details</Dialog.Title>
                                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
                                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Beneficiary</label>
                                        <p className="mt-1">{data.beneficiary.firstname} {data.beneficiary.lastname}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Request Type</label>
                                        <p className="mt-1 capitalize">{data.request_type}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Category</label>
                                        <p className="mt-1">{data.category}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Specific Type</label>
                                        <p className="mt-1">{data.specific_type}</p>
                                    </div>
                                    {data.unit && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Unit</label>
                                            <p className="mt-1 capitalize">{data.unit}</p>
                                        </div>
                                    )}
                                    {data.schedule && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Schedule</label>
                                            <p className="mt-1">{data.schedule}</p>
                                        </div>
                                    )}
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">Selected Tools</label>
                                        {data.tools && data.tools.length > 0 ? (
                                            <div className="mt-2 grid grid-cols-2 gap-3">
                                                {data.tools.map((tool, index) => (
                                                    <div key={index} className="border rounded-lg p-3">
                                                        <p className="font-medium text-gray-900">{tool.name}</p>
                                                        <p className="text-sm text-gray-500">{tool.type}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="mt-1 text-gray-500">No tools selected</p>
                                        )}
                                    </div>
                                    {renderStatusSection()}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Purpose</label>
                                    <p className="mt-1">{data.purpose}</p>
                                </div>

                                {data.remarks && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Remarks</label>
                                        <p className="mt-1">{data.remarks}</p>
                                    </div>
                                )}
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
