import { useEffect, useState } from "react";
import axios from "axios";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FaMoneyBillWheat } from "react-icons/fa6";
import store from "@/app/store/store";
import { get_users_thunk } from "@/app/redux/user-thunk";
import { useSelector } from "react-redux";

export default function DetailsModalSection() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const { cash_assistance } = useSelector((store) => store.cash_assistance);
    const [formData, setFormData] = useState({
        name: "",
        sponsor: "",
        date: "",
        location: "",
        description: "",
        livelihoods: [],
    });
    console.log("cash_assistance", cash_assistance);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setFormData(cash_assistance);
    }, [cash_assistance?.name??""]);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.password2) {
            setMessage("Passwords do not match.");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post("/api/users", {
                firstname: formData.firstname,
                middlename: formData.middlename,
                lastname: formData.lastname,
                suffix: formData.suffix,
                role: formData.role,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password2,
                status: formData.status,
            });
            await store.dispatch(get_users_thunk());
            setLoading(false);
            setMessage(response.data.message);
            setFormData({
                firstname: "",
                middlename: "",
                lastname: "",
                suffix: "",
                role: "",
                email: "",
                password: "",
                password2: "",
                status: "Active",
            });

            setOpen(false);
        } catch (error) {
            setLoading(false);
        }
    };
    return (
        <div className="divide-y divide-gray-900/10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
                <div className="px-4 sm:px-0">
                    <h2 className="text-base/7 font-semibold text-gray-900">
                        Cash Assistance Event Information
                    </h2>
                    <p className="mt-1 text-sm/6 text-gray-600">
                        A detailed information of the Assistance Program in the
                        system.
                    </p>
                </div>

                <form className="bg-white ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl md:col-span-2">
                    <div className="px-4 py-6 sm:p-8">
                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-12">
                                {message && (
                                    <p className="text-red-500">{message}</p>
                                )}
                                <h3 className="text-base font-medium text-gray-500 pt-3">
                                    Assistance Information
                                    {/* <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 float-end text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
                                        Upcoming
                                    </span> */}
                                </h3>
                            </div>

                            <div className="sm:col-span-12">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Cash Assistance Name"
                                    autoComplete="cash_assistance"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="sm:col-span-12">
                                <input
                                    name="sponsor"
                                    type="text"
                                    placeholder="Sponsor Name"
                                    autoComplete="sponsor"
                                    value={formData.sponsor}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="sm:col-span-12">
                                <input
                                    name="date"
                                    type="datetime-local"
                                    autoComplete="event_date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="sm:col-span-12">
                                <input
                                    name="location"
                                    type="text"
                                    placeholder="Event Location"
                                    autoComplete="event_location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="sm:col-span-12">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={8}
                                    placeholder="Assistance Description"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                    value={formData.description}
                                />
                            </div>
                            <div className="sm:col-span-12">
                                <hr />
                                <h3 className="text-base font-medium text-gray-500 pt-3 mb-2">
                                    Main Livelihood
                                </h3>
                                <div class="space-y-4">
                                   

                                   <div className="flex gap-3">
                                   {formData?.livelihoods?.map(
                                                        (result, ii) => {
                                                            return (
                                                                <span
                                                                    key={ii}
                                                                    className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset mb-1"
                                                                >
                                                                    {
                                                                        result.name
                                                                    }
                                                                </span>
                                                            );
                                                        }
                                                    )}
                                   </div>
                                    {/* 
                                    
                                     <div class="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="farmer"
                                            name="role"
                                            value="Farmer"
                                            class="h-4 w-4 text-green-600 border-gray-300 rounded"
                                        />
                                        <label
                                            for="farmer"
                                            class="ml-2 text-gray-700"
                                        >
                                            Farmer
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="farmworker"
                                            name="role"
                                            value="Farmworker/Laborer"
                                            class="h-4 w-4 text-green-600 border-gray-300 rounded"
                                        />
                                        <label
                                            for="farmworker"
                                            class="ml-2 text-gray-700"
                                        >
                                            Farmworker/Laborer
                                        </label>
                                    </div>

                                    <div class="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="fisherfolk"
                                            name="role"
                                            value="Fisherfolk"
                                            class="h-4 w-4 text-green-600 border-gray-300 rounded"
                                        />
                                        <label
                                            for="fisherfolk"
                                            class="ml-2 text-gray-700"
                                        >
                                            Fisherfolk
                                        </label>
                                    </div>

                                    <div class="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="agriYouth"
                                            name="role"
                                            value="Agri Youth"
                                            class="h-4 w-4 text-green-600 border-gray-300 rounded"
                                        />
                                        <label
                                            for="agriYouth"
                                            class="ml-2 text-gray-700"
                                        >
                                            Agri Youth
                                        </label>
                                    </div> */}
                                </div>
                            </div>

                            <div className="sm:col-span-12">
                                <input
                                    name="status"
                                    type="hidden"
                                    value={formData.status}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
