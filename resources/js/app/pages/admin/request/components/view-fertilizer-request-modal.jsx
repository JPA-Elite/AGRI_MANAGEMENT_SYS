import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import moment from "moment";

export default function ViewFertilizerRequestModal({ isOpen, setIsOpen, data }) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto w-full max-w-3xl rounded-lg bg-white p-6">
                        <div className="border-b pb-4 mb-4">
                            <Dialog.Title className="text-lg font-medium">Fertilizer Request Details</Dialog.Title>
                            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
                                <XMarkIcon className="h-6 w-6 text-gray-500" />
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Beneficiary</h3>
                                <p className="mt-1 text-sm text-gray-900">
                                    {data?.beneficiary?.firstname} {data?.beneficiary?.lastname}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">RSBSA Number</h3>
                                <p className="mt-1 text-sm text-gray-900">{data?.beneficiary?.register_id}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Fertilizer Type</h3>
                                <p className="mt-1 text-sm text-gray-900">{data?.fertilizer_type}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Quantity</h3>
                                <p className="mt-1 text-sm text-gray-900">{data?.quantity} bags</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                                <span className={`mt-1 inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                    data?.status === 'approved'
                                        ? 'bg-green-100 text-green-800'
                                        : data?.status === 'rejected'
                                        ? 'bg-red-100 text-red-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {data?.status}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Requested Date</h3>
                                <p className="mt-1 text-sm text-gray-900">
                                    {moment(data?.requested_date).format('LL')}
                                </p>
                            </div>
                        </div>
                        {data?.remarks && (
                            <div className="mt-4">
                                <h3 className="text-sm font-medium text-gray-500">Remarks</h3>
                                <p className="mt-1 text-sm text-gray-900">{data?.remarks}</p>
                            </div>
                        )}
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    );
}
