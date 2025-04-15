import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { getBeneficiariesThunk } from "@/app/redux/beneficiary-thunk";
import store from "@/app/store/store";
import { REQUEST_OPTIONS } from "@/app/constants/general";

export default function AddRequestModal({ isOpen, setIsOpen, onRequestAdded }) {
    const { beneficiaries, loading } = useSelector((state) => state.beneficiary);
    const [formData, setFormData] = useState({
        beneficiary_id: "",
        request_type: "",
        category: "",
        specific_type: "",
        purpose: "",
        requested_date: "",
        remarks: "",
        unit: "",
        schedule: ""
    });

    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
    const [selectedTools, setSelectedTools] = useState([]);

    useEffect(() => {
        if (isOpen) {
            store.dispatch(getBeneficiariesThunk());
            console.log("Beneficiaries data:", beneficiaries?.data);
        }
    }, [isOpen]);

    const handleBeneficiaryChange = (id) => {
        const beneficiary = beneficiaries?.data?.find(b => b.id === parseInt(id));
        setSelectedBeneficiary(beneficiary);
        setFormData({
            ...formData,
            beneficiary_id: id,
            request_type: "",
            category: "",
            specific_type: ""
        });
    };

    const handleCategoryChange = (category) => {
        const type = getBeneficiaryType();
        setFormData({
            ...formData,
            category,
            specific_type: '', 
            request_type: type 
        });
        setSelectedTools([]); // Reset tools when category changes
    };

    const handleSpecificTypeChange = (value) => {
        setFormData({
            ...formData,
            specific_type: value
        });
        // Reset selected tools when changing specific type
        setSelectedTools([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Get the current beneficiary type and options
            const beneficiaryKey = getBeneficiaryTypeKey();
            const typeOptions = REQUEST_OPTIONS[beneficiaryKey];

            // Get the complete category info
            const categoryInfo = typeOptions?.categories.find(
                cat => cat.name === formData.category
            );

            // Prepare complete request data
            const requestData = {
                ...formData,
                request_type: getBeneficiaryType(),
                requested_date: formData.requested_date,
                status: 'pending',
                // Include complete tools information
                tools: selectedTools.map(toolName => {
                    const toolInfo = typeOptions?.tools[formData.specific_type]?.find(
                        t => t.name === toolName
                    );
                    return {
                        name: toolName,
                        type: toolInfo?.type || '',
                        category: formData.category,
                        specific_type: formData.specific_type
                    };
                }),
                // Add additional context
                request_context: {
                    category_info: categoryInfo,
                    beneficiary_type: typeOptions?.type,
                    schedule_options: typeOptions?.schedule_options
                }
            };

            // Remove unnecessary fields based on type
            if (!(getBeneficiaryType() === 'farmer' && formData.category === 'Fertilizer')) {
                delete requestData.unit;
            }
            if (getBeneficiaryType() !== 'farmworker') {
                delete requestData.schedule;
            }

            const response = await axios.post('/api/beneficiary-requests', requestData);
            setIsOpen(false);
            onRequestAdded();
            Swal.fire({
                title: "Success!",
                text: "Request has been submitted successfully",
                icon: "success",
                timer: 1500
            });
        } catch (error) {
            console.error('Submit error:', error);
            Swal.fire({
                title: "Error!",
                text: error.response?.data?.message || "Failed to submit request. Please try again.",
                icon: "error"
            });
        }
    };

    const getBeneficiaryType = () => {
        if (!selectedBeneficiary?.farm_profile?.main_livelihood) return null;
        
        const livelihood = selectedBeneficiary.farm_profile.main_livelihood.toLowerCase();
        
        // Special handling for farmworker/laborer
        if (livelihood.includes('farmworker') || livelihood.includes('laborer')) {
            return 'farmworker/laborer';
        }

        // Find matching type from REQUEST_OPTIONS
        const matchingKey = Object.entries(REQUEST_OPTIONS).find(([_, value]) => 
            livelihood.includes(value.type.toLowerCase())
        );

        return matchingKey ? matchingKey[1].type : null;
    };

    const getBeneficiaryTypeKey = () => {
        const type = getBeneficiaryType();
        if (!type) return null;

        // Special handling for farmworker/laborer
        if (type === 'farmworker/laborer') {
            return 'FARMWORKER';
        }

        // Find key from REQUEST_OPTIONS based on type
        return Object.entries(REQUEST_OPTIONS).find(([_, value]) => 
            value.type === type
        )?.[0] || null;
    };

    const getToolsForType = () => {
        const beneficiaryKey = getBeneficiaryTypeKey();
        const specificType = formData.specific_type;
        
        // Debug logs
        console.log('Tool lookup:', {
            beneficiaryKey,
            specificType,
            toolsData: REQUEST_OPTIONS[beneficiaryKey]?.tools
        });

        // Return empty array if any required data is missing
        if (!beneficiaryKey || !specificType || !REQUEST_OPTIONS[beneficiaryKey]?.tools) {
            return [];
        }

        console.log("data: ", REQUEST_OPTIONS[beneficiaryKey]?.tools['Habitat Restoration'])

        // Get tools for specific type with fallback
        return REQUEST_OPTIONS[beneficiaryKey]?.tools[specificType] || [];
    };

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-start justify-center p-4 overflow-y-auto">
                    <div className="min-h-full flex items-center w-full">
                        <Dialog.Panel className="mx-auto w-full max-w-6xl rounded-lg bg-white p-6 shadow-xl my-8">
                            <div className="sticky top-0 bg-white border-b pb-4 mb-4">
                                <Dialog.Title className="text-lg font-medium">Add New Request</Dialog.Title>
                                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
                                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>

                            <div className="max-h-[calc(100vh-16rem)] overflow-y-auto pr-2">
                                <form id="requestForm" onSubmit={handleSubmit} className="space-y-4">
                                    {/* Beneficiary Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Select Beneficiary</label>
                                        <select
                                            value={formData.beneficiary_id}
                                            onChange={(e) => handleBeneficiaryChange(e.target.value)}
                                            required
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                            disabled={loading}
                                        >
                                            <option value="">Select Beneficiary</option>
                                            {beneficiaries?.data?.map(b => (
                                                <option key={b.id} value={b.id}>
                                                    {b.firstname} {b.lastname} - {b.farm_profile?.main_livelihood}
                                                </option>
                                            ))}
                                        </select>
                                        {loading && <span className="text-sm text-gray-500">Loading beneficiaries...</span>}
                                    </div>

                                    {/* Request Types Display */}
                                    {selectedBeneficiary && getBeneficiaryType() && (
                                        <div className="space-y-6 border-t pt-4">
                                            <div className="grid grid-cols-2 gap-6">
                                                {/* Category Selection */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Category</label>
                                                    <select
                                                        value={formData.category}
                                                        onChange={(e) => handleCategoryChange(e.target.value)}
                                                        required
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                                    >
                                                        <option value="">Select Category</option>
                                                        {REQUEST_OPTIONS[getBeneficiaryTypeKey()]?.categories.map(cat => (
                                                            <option key={cat.name} value={cat.name}>{cat.name}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/* Specific Type Selection */}
                                                {formData.category && (
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Specific Type</label>
                                                        <select
                                                            value={formData.specific_type}
                                                            onChange={(e) => handleSpecificTypeChange(e.target.value)}
                                                            required
                                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                                        >
                                                            <option value="">Select Type</option>
                                                            {REQUEST_OPTIONS[getBeneficiaryTypeKey()]
                                                                ?.categories
                                                                .find(cat => cat.name === formData.category)
                                                                ?.specific.map(type => (
                                                                    <option key={type} value={type}>{type}</option>
                                                                ))}
                                                        </select>
                                                    </div>
                                                )}

                                                {/* Additional Fields based on type */}
                                                {getBeneficiaryType() === 'farmer' && formData.category === 'Fertilizer' && (
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Quantity Unit</label>
                                                        <select
                                                            value={formData.unit}
                                                            onChange={(e) => setFormData({...formData, unit: e.target.value})}
                                                            required
                                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                                        >
                                                            <option value="">Select Unit</option>
                                                            {REQUEST_OPTIONS.FARMER.quantities.map(q => (
                                                                <option key={q.value} value={q.value}>{q.label}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                )}

                                                {getBeneficiaryType() === 'farmworker' && (
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Preferred Schedule</label>
                                                        <select
                                                            value={formData.schedule}
                                                            onChange={(e) => setFormData({...formData, schedule: e.target.value})}
                                                            required
                                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                                        >
                                                            <option value="">Select Schedule</option>
                                                            {REQUEST_OPTIONS.WORKER.schedule_options.map(schedule => (
                                                                <option key={schedule} value={schedule}>{schedule}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Tools/Equipment Selection */}
                                            {formData.specific_type && (
                                                <div className="space-y-6 border-t pt-4">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Select Required Tools/Equipment
                                                    </label>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        {(getToolsForType() || []).map(tool => (
                                                            <div key={tool.name} className="border rounded-lg p-3 hover:bg-gray-50">
                                                                <label className="flex items-start space-x-3 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedTools.includes(tool.name)}
                                                                        onChange={(e) => {
                                                                            if (e.target.checked) {
                                                                                setSelectedTools([...selectedTools, tool.name]);
                                                                            } else {
                                                                                setSelectedTools(selectedTools.filter(t => t !== tool.name));
                                                                            }
                                                                        }}
                                                                        className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded"
                                                                    />
                                                                    <div>
                                                                        <p className="font-medium text-gray-900">{tool.name}</p>
                                                                        <p className="text-sm text-gray-500">{tool.type}</p>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Common Fields */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Purpose</label>
                                        <textarea
                                            value={formData.purpose}
                                            onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                                            required
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                            rows={3}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Requested Date</label>
                                        <input
                                            type="date"
                                            value={formData.requested_date}
                                            onChange={(e) => setFormData({...formData, requested_date: e.target.value})}
                                            required
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Remarks</label>
                                        <textarea
                                            value={formData.remarks}
                                            onChange={(e) => setFormData({...formData, remarks: e.target.value})}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                            rows={2}
                                        />
                                    </div>
                                </form>
                            </div>

                            <div className="sticky bottom-0 bg-white pt-4 mt-6 border-t">
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        form="requestForm"
                                        className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
