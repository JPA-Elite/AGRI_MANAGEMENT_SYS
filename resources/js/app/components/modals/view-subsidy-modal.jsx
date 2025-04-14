import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import moment from "moment";

export default function ViewSubsidyModal({ isOpen, setIsOpen, data }) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto w-full max-w-4xl h-[90vh] rounded-lg bg-white p-6 overflow-y-auto">
                        <div className="sticky top-0 bg-white pb-4 mb-4 border-b">
                            <Dialog.Title className="text-xl font-semibold">View Subsidy Details</Dialog.Title>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute top-0 right-0"
                            >
                                <XMarkIcon className="h-6 w-6 text-gray-500" />
                            </button>
                        </div>
                        <div className="space-y-8">
                            {/* Beneficiary Information */}
                            <div>
                                <h2 className="text-lg font-semibold mb-4">Beneficiary Information</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Name</h3>
                                        <p className="mt-1 text-sm text-gray-900">
                                            {`${data?.beneficiary?.firstname ?? ''} ${data?.beneficiary?.lastname ?? ''}`}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">RSBSA Number</h3>
                                        <p className="mt-1 text-sm text-gray-900">
                                            {data?.beneficiary?.register_id ?? 'N/A'}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Barangay</h3>
                                        <p className="mt-1 text-sm text-gray-900">
                                            {data?.beneficiary?.barangay ?? 'N/A'}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Main Livelihood</h3>
                                        <span className="mt-1 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                                            {data?.beneficiary?.farm_profile?.main_livelihood ?? 'N/A'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Subsidy Details */}
                            <div>
                                <h2 className="text-lg font-semibold mb-4">Subsidy Details</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Amount</h3>
                                        <p className="mt-1 text-sm text-gray-900">₱{data?.amount}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Status</h3>
                                        <span className={`mt-1 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                                            data?.status === 'approved' 
                                                ? 'bg-green-50 text-green-700 ring-green-600/20'
                                                : 'bg-yellow-50 text-yellow-700 ring-yellow-600/20'
                                        }`}>
                                            {data?.status}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Date Released</h3>
                                        <p className="mt-1 text-sm text-gray-900">{moment(data?.date_released).format("LLL")}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Description</h3>
                                        <p className="mt-1 text-sm text-gray-900">{data?.description}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Remarks</h3>
                                        <p className="mt-1 text-sm text-gray-900">{data?.remarks}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    );
}
