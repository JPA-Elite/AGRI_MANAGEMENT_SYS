import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FaBuildingFlag, FaPenToSquare } from "react-icons/fa6";

export default function LguInformationSection() {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-xl">
            <div className="px-4 py-5 sm:px-6 bg-green-600">
                <div className="flex flex-row">
                    <FaBuildingFlag className="text-white size-6 mr-2" />
                    <h3 className="text-base font-medium text-white">
                        Local Government Unit Information
                    </h3>
                </div>
            </div>
            <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <div className="overflow-hidden bg-gray-100 shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <img
                                    alt=""
                                    src="/images/valle.png"
                                    className="w-full rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 lg:grid-cols-2">
                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Address Details
                                </label>
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>
                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Barangay
                                </label>
                                <select
                                    id="barangay"
                                    name="barangay"
                                    placeholder="Barangay"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                >
                                    <option value="" disabled selected>
                                        -- Select a Barangay --
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
                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="city"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    City/Municipality
                                </label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    value="Vallehermoso"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                    disabled
                                />
                            </div>
                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="province"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Province
                                </label>
                                <input
                                    id="province"
                                    name="province"
                                    type="text"
                                    value="Negros Oriental"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                    disabled
                                />
                            </div>
                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="region"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Region
                                </label>
                                <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    value="Region 7"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                    disabled
                                />
                            </div>

                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="contact"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                   LGU Contact
                                </label>
                                <input
                                    id="contact"
                                    name="contact"
                                    type="number"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>

                            <div className="sm:cols-span-6">
                                <label
                                    htmlFor="Email Address"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                   LGU Email Address
                                </label>
                                <input
                                    id="Email Address"
                                    name="Email Address"
                                    type="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-12 mt-3">
                            <label
                                htmlFor="MAO"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                City/Municipal Agricultural Office (MAO)
                            </label>
                            <input
                                id="MAO"
                                name="MAO"
                                type="text"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />

                            <label
                                htmlFor="cover-photo"
                                className="block text-sm/6 mt-8 font-medium text-gray-900"
                            >
                                City/Municipal Logo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon
                                        aria-hidden="true"
                                        className="mx-auto size-12 text-gray-300"
                                    />
                                    <div className="mt-4 flex text-sm/6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs/5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="rounded-full bg-green-600 px-3.5 py-2 mt-4 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                <FaPenToSquare className="float-left mr-2 size-4" />
                                UPDATE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
