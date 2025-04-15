import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import store from "@/app/store/store";
import { getFertilizerRequestsThunk } from "@/app/redux/fertilizer-request-thunk";
import { getActiveBeneficiariesThunk } from "@/app/redux/beneficiary-thunk";
import { FERTILIZER_TYPES } from "@/app/constants/general";

export default function AddFertilizerRequestModal({ isOpen, setIsOpen }) {
    const { beneficiaries, loading } = useSelector((state) => state.beneficiary);
    const [formData, setFormData] = useState({
        beneficiary_id: "",
        fertilizer_type: "",
        quantity: "",
        requested_date: "",
        remarks: ""
    });

    useEffect(() => {
        if (isOpen) {
            store.dispatch(getActiveBeneficiariesThunk());
        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/fertilizer-requests', formData);
            await store.dispatch(getFertilizerRequestsThunk());
            setIsOpen(false);
            setFormData({
                beneficiary_id: "",
                fertilizer_type: "",
                quantity: "",
                requested_date: "",
                remarks: ""
            });
            await Swal.fire({
                title: "Success!",
                text: "Fertilizer request has been submitted",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            await Swal.fire({
                title: "Error!",
                text: error.response?.data?.message || "Failed to submit request",
                icon: "error",
                showConfirmButton: true,
            });
        }
    };

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto w-full max-w-4xl h-[90vh] rounded-lg bg-white p-6 overflow-y-auto">
                        <div className="sticky top-0 bg-white pb-4 mb-4 border-b">
                            <Dialog.Title className="text-xl font-medium">Add Fertilizer Request</Dialog.Title>
                            <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0">
                                <XMarkIcon className="h-6 w-6 text-gray-500" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Select Beneficiary</label>
                                <select
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                    value={formData.beneficiary_id}
                                    onChange={(e) => setFormData({...formData, beneficiary_id: e.target.value})}
                                    required
                                >
                                    <option value="">Select Beneficiary</option>
                                    {beneficiaries?.data?.map(beneficiary => (
                                        <option key={beneficiary.id} value={beneficiary.id}>
                                            {beneficiary.firstname} {beneficiary.lastname} - {beneficiary.register_id}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Fertilizer Type</label>
                                <select
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                    value={formData.fertilizer_type}
                                    onChange={(e) => setFormData({...formData, fertilizer_type: e.target.value})}
                                    required
                                >
                                    <option value="">Select Fertilizer</option>
                                    {FERTILIZER_TYPES.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Quantity (Bags)</label>
                                <input
                                    type="number"
                                    min="1"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Requested Date</label>
                                <input
                                    type="date"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                    value={formData.requested_date}
                                    onChange={(e) => setFormData({...formData, requested_date: e.target.value})}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Additional Remarks</label>
                                <textarea
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                    value={formData.remarks}
                                    onChange={(e) => setFormData({...formData, remarks: e.target.value})}
                                    rows={2}
                                />
                            </div>

                            <div className="mt-6 flex justify-end gap-3">
                                <button
                                    type="button"
                                    className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500"
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    );
}
