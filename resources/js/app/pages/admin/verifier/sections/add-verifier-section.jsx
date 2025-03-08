import { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";
import { FaUserPlus } from "react-icons/fa6";
import axios from "axios";

export default function AddVerifierSection({addUser}) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        suffix: "",
        role: "Verifier",
        brgy: "",
        email: "",
        password: "",
        password2: "",
        status: "Active",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.password2) {
            setMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post(
                "/api/users",
                {
                    firstname: formData.firstname,
                    middlename: formData.middlename,
                    lastname: formData.lastname,
                    suffix: formData.suffix,
                    role: formData.role,
                    brgy: formData.brgy,
                    email: formData.email,
                    password: formData.password,
                    password_confirmation: formData.password2,
                    status: formData.status,
                }
            );

            setMessage(response.data.message);
            addUser(response.data.user);
            setFormData({
                firstname: "",
                middlename: "",
                lastname: "",
                suffix: "",
                role: "Verifier",
                brgy: "",
                email: "",
                password: "",
                password2: "",
                status: "Active",
            });

            setOpen(false);
        } catch (error) {
            setMessage("Error saving user. Check console for details.");
            console.error(error.response?.data || error.message);
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
                    <FaUserPlus
                        aria-hidden="true"
                        className="float-left mr-2 size-5"
                    />
                    New Verifier
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
                                                <FaUserPlus className="size-5 float-left mr-2" />{" "}
                                                New Barangay Verifier
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
                                                        <hr />
                                                        <h3 className="text-base font-medium text-gray-500 pt-3">
                                                            Personal Information
                                                        </h3>
                                                    </div>
                                                    <div className="sm:col-span-6">
                                                        <input
                                                            value={
                                                                formData.firstname
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name="firstname"
                                                            type="text"
                                                            placeholder="Firstname"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
                                                    </div>

                                                    <div className="sm:col-span-6">
                                                        <input
                                                            value={
                                                                formData.middlename
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name="middlename"
                                                            type="text"
                                                            placeholder="Middlename"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-6">
                                                        <input
                                                            value={
                                                                formData.lastname
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name="lastname"
                                                            type="text"
                                                            placeholder="Lastname"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
                                                    </div>

                                                    <div className="sm:col-span-6">
                                                        <select
                                                            value={
                                                                formData.suffix
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name="suffix"
                                                            autoComplete="suffix-name"
                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                                selected
                                                            >
                                                                -- Suffix --
                                                            </option>
                                                            <option>Jr</option>
                                                            <option>Sr</option>
                                                            <option>I</option>
                                                            <option>II</option>
                                                            <option>III</option>
                                                        </select>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <select
                                                            value={
                                                                formData.brgy
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name="brgy"
                                                            placeholder="Barangay"
                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                                selected
                                                            >
                                                                -- Select a
                                                                Barangay --
                                                            </option>
                                                            <option>
                                                                Bairan
                                                            </option>
                                                            <option>
                                                                Bagawines
                                                            </option>
                                                            <option>
                                                                Cabulihan
                                                            </option>
                                                            <option>
                                                                Don Esperidion
                                                                Villegas
                                                            </option>
                                                            <option>
                                                                Guba
                                                            </option>
                                                            <option>
                                                                Macapso
                                                            </option>
                                                            <option>
                                                                Maglahos
                                                            </option>
                                                            <option>
                                                                Malangsa
                                                            </option>
                                                            <option>
                                                                Molobolo
                                                            </option>
                                                            <option>
                                                                Pinocawan
                                                            </option>
                                                            <option>
                                                                Poblacion
                                                            </option>
                                                            <option>
                                                                Puan
                                                            </option>
                                                            <option>
                                                                Tabon
                                                            </option>
                                                            <option>
                                                                Tagbino
                                                            </option>
                                                            <option>
                                                                Ulay
                                                            </option>
                                                        </select>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <hr />
                                                        <h3 className="text-base font-medium text-gray-500 pt-3">
                                                            Account Information
                                                        </h3>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <input
                                                            value={
                                                                formData.email
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name="email"
                                                            type="email"
                                                            placeholder="Email Address"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <input
                                                            value={
                                                                formData.password
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name="password"
                                                            type="password"
                                                            placeholder="Password"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <input
                                                            value={
                                                                formData.password2
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name="password2"
                                                            type="password"
                                                            placeholder="Confirm Password"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                        />
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
                                                    type="submit"
                                                    className="ml-4 inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                                                >
                                                    Save
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
