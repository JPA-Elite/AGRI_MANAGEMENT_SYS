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
import {
    get_cash_assistance_thunk,
    store_cash_assistance_thunk,
} from "@/app/redux/cash-assistance-thunk";
import Swal from "sweetalert2";

export default function AddAssistanceSection() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        sponsor: "",
        date: "",
        location: "",
        description: "",
        livelihoods: [],
    });

    const [message, setMessage] = useState("");
 

    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setFormData({ ...formData, [e.target.name ]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.password2) {
            setMessage("Passwords do not match.");
            return;
        }
        setLoading(true);
        try {
            await store.dispatch(store_cash_assistance_thunk(formData));
            await store.dispatch(get_cash_assistance_thunk());
            setLoading(false);
            setFormData({
                name: "",
                sponsor: "",
                date: "",
                location: "",
                description: "",
                livelihoods: [],
            });

            await Swal.fire({
                title: "Success!",
                text: `Cash Assistance Event Created.`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
            setOpen(false);
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="mt-5 text-right">
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    <FaMoneyBillWheat
                        aria-hidden="true"
                        className="float-left mr-2 size-5"
                    />
                    New Cash Assistance Event
                </button>
            </div>
            <Dialog open={open} onClose={setOpen} className="relative z-40">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div className="px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <DialogTitle className="text-base font-semibold text-gray-900">
                                                <FaMoneyBillWheat className="size-5 float-left mr-2" />{" "}
                                                New Cash Assistance Event
                                            </DialogTitle>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                    className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">
                                                        Close panel
                                                    </span>
                                                    <XMarkIcon
                                                        aria-hidden="true"
                                                        className="size-6"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                                    <div className="sm:col-span-12">
                                                        {message && (
                                                            <p className="text-red-500">
                                                                {message}
                                                            </p>
                                                        )}
                                                        <hr />
                                                        <h3 className="text-base font-medium text-gray-500 pt-3">
                                                            Assistance
                                                            Information
                                                        </h3>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            placeholder="Cash Assistance Name"
                                                            autoComplete="name"
                                                            value={
                                                                formData.name
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <input
                                                            type="text"
                                                            placeholder="Sponsor Name"
                                                            autoComplete="sponsor"
                                                            name="sponsor"
                                                            value={
                                                                formData.sponsor
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <input
                                                            name="date"
                                                            type="datetime-local"
                                                            autoComplete="date"
                                                            value={
                                                                formData.date
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <select
                                                            id="barangay"
                                                            name="location"
                                                            placeholder="Barangay"
                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                            value={
                                                                formData.location
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        >
                                                            <option value="" disabled selected>
                                                                -- Event Location --
                                                            </option>
                                                            <option>Bairan</option>
                                                            <option>Bagawines</option>
                                                            <option>Cabulihan</option>
                                                            <option>Don Esperidion Villegas</option>
                                                            <option>Guba</option>
                                                            <option>Macapso</option>
                                                            <option>Maglahos</option>
                                                            <option>Malangsa</option>
                                                            <option>Molobolo</option>
                                                            <option>Pinocawan</option>
                                                            <option>Poblacion</option>
                                                            <option>Puan</option>
                                                            <option>Tabon</option>
                                                            <option>Tagbino</option>
                                                            <option>Ulay</option>
                                                        </select>
                                                    </div>
                                                    {/* <div className="sm:col-span-12">
                                                        <input
                                                            name="location"
                                                            type="text"
                                                            placeholder="Event Location"
                                                            autoComplete="location"
                                                            value={
                                                                formData.location
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
                                                    </div> */}
                                                    <div className="sm:col-span-12">
                                                        <textarea
                                                            id="description"
                                                            name="description"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            rows={8}
                                                            placeholder="Assistance Description"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <hr />
                                                        <h3 className="text-base font-medium text-gray-500 pt-3 mb-2">
                                                            Main Livelihood
                                                        </h3>
                                                        <div class="space-y-4">
                                                            <div class="flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    id="farmer"
                                                                    name="role"
                                                                    value="Farmer"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setFormData(
                                                                            (
                                                                                prev
                                                                            ) => ({
                                                                                ...prev,
                                                                                livelihoods:
                                                                                    e
                                                                                        .target
                                                                                        .checked
                                                                                        ? [
                                                                                              ...prev.livelihoods,
                                                                                              e
                                                                                                  .target
                                                                                                  .value,
                                                                                          ] // Add if checked
                                                                                        : prev.livelihoods.filter(
                                                                                              (
                                                                                                  item
                                                                                              ) =>
                                                                                                  item !==
                                                                                                  e
                                                                                                      .target
                                                                                                      .value
                                                                                          ), // Remove if unchecked
                                                                            })
                                                                        );
                                                                    }}
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
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setFormData(
                                                                            (
                                                                                prev
                                                                            ) => ({
                                                                                ...prev,
                                                                                livelihoods:
                                                                                    e
                                                                                        .target
                                                                                        .checked
                                                                                        ? [
                                                                                              ...prev.livelihoods,
                                                                                              e
                                                                                                  .target
                                                                                                  .value,
                                                                                          ] // Add if checked
                                                                                        : prev.livelihoods.filter(
                                                                                              (
                                                                                                  item
                                                                                              ) =>
                                                                                                  item !==
                                                                                                  e
                                                                                                      .target
                                                                                                      .value
                                                                                          ), // Remove if unchecked
                                                                            })
                                                                        );
                                                                    }}
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
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setFormData(
                                                                            (
                                                                                prev
                                                                            ) => ({
                                                                                ...prev,
                                                                                livelihoods:
                                                                                    e
                                                                                        .target
                                                                                        .checked
                                                                                        ? [
                                                                                              ...prev.livelihoods,
                                                                                              e
                                                                                                  .target
                                                                                                  .value,
                                                                                          ] // Add if checked
                                                                                        : prev.livelihoods.filter(
                                                                                              (
                                                                                                  item
                                                                                              ) =>
                                                                                                  item !==
                                                                                                  e
                                                                                                      .target
                                                                                                      .value
                                                                                          ), // Remove if unchecked
                                                                            })
                                                                        );
                                                                    }}
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
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setFormData(
                                                                            (
                                                                                prev
                                                                            ) => ({
                                                                                ...prev,
                                                                                livelihoods:
                                                                                    e
                                                                                        .target
                                                                                        .checked
                                                                                        ? [
                                                                                              ...prev.livelihoods,
                                                                                              e
                                                                                                  .target
                                                                                                  .value,
                                                                                          ] // Add if checked
                                                                                        : prev.livelihoods.filter(
                                                                                              (
                                                                                                  item
                                                                                              ) =>
                                                                                                  item !==
                                                                                                  e
                                                                                                      .target
                                                                                                      .value
                                                                                          ), // Remove if unchecked
                                                                            })
                                                                        );
                                                                    }}
                                                                    value="Agri Youth"
                                                                    class="h-4 w-4 text-green-600 border-gray-300 rounded"
                                                                />
                                                                <label
                                                                    for="agriYouth"
                                                                    class="ml-2 text-gray-700"
                                                                >
                                                                    Agri Youth
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <input
                                                            name="status"
                                                            type="hidden"
                                                            value={
                                                                formData.status
                                                            }
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
                                                        <hr />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex shrink-0 justify-end px-4 py-4">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    disabled={loading}
                                                    type="submit"
                                                    className="ml-4 inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                                                >
                                                    {loading
                                                        ? "Loading..."
                                                        : "Save"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
