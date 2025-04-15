import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddSubsidyModal({ isOpen, setIsOpen, beneficiaryId }) {
    const [formData, setFormData] = useState({
        amount: "",
        description: "",
        date_released: "",
        remarks: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/subsidies', {
                ...formData,
                beneficiary_id: beneficiaryId
            });
            setIsOpen(false);
            await Swal.fire({
                title: "Success!",
                text: "Subsidy has been added successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
            setFormData({ amount: "", description: "", date_released: "", remarks: "" }); // Reset form
        } catch (error) {
            console.error('Error adding subsidy:', error);
            await Swal.fire({
                title: "Error!",
                text: error.response?.data?.message || "Failed to add subsidy",
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
                            <Dialog.Title className="text-xl font-semibold">Request for Subsidy</Dialog.Title>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute top-0 right-0"
                            >
                                <XMarkIcon className="h-6 w-6 text-gray-500" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Amount</label>
                                <input
                                    type="number"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                    value={formData.amount}
                                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date Released</label>
                                <input
                                    type="date"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                    value={formData.date_released}
                                    onChange={(e) => setFormData({...formData, date_released: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Remarks</label>
                                <textarea
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                    value={formData.remarks}
                                    onChange={(e) => setFormData({...formData, remarks: e.target.value})}
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
                                    Add Subsidy
                                </button>
                            </div>
                        </form>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    );
}
