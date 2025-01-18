import React from "react";

export default function FarmLandComponent() {
    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
                III. Farm Land Information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
                Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                <div className="sm:col-span-2">
                    <label
                        htmlFor="farmparcel"
                        className="block text-sm/6 mr-2 font-medium text-gray-900"
                    >
                        No. of Farm Parcel:
                    </label>
                    <input
                        id="farmparcel"
                        name="farmparcel"
                        type="number"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                    />
                </div>

                <div className="sm:col-span-10">
                    <label
                        htmlFor="farmparcel"
                        className="block text-sm/6 mr-2 font-medium text-gray-900"
                    >
                        Name. of Farmer/s in Rotation:
                    </label>
                    <div className="flex flex-row">
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            placeholder="(P1)"
                            className="block h-10 mr-1 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            placeholder="(P2)"
                            className="block h-10 mr-1 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            placeholder="(P3)"
                            className="block h-10 mr-1 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-12 shadow-lg">
                    <div className="border-b border-gray-200 bg-gray-100 rounded-t-md w-full px-4 py-5 sm:px-6">
                        <h3 className="text-base font-semibold text-gray-900">
                            Farm Parcel No. 1
                        </h3>
                    </div>
                    <div className="bg-gray-100 rounded-b-md px-4 py-5 sm:px-6">
                        <h4 className="text-md text-center font-medium text-gray-900">
                            Farm Land Description
                        </h4>

                        <div className="grid grid-cols-12 gap-6 mt-7">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="farmlocation"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Farm Location
                                </label>
                                <input
                                    id="farmlocation"
                                    name="farmlocation"
                                    type="text"
                                    placeholder="Barangay, City/Municipal"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 sm:text-sm/6"
                                />
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="farmarea"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Total Farm Area (in hectares)
                                </label>
                                <input
                                    id="farmarea"
                                    name="farmarea"
                                    type="number"
                                    placeholder="in hectares"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 sm:text-sm/6"
                                />
                            </div>

                            <div className="sm:col-span-3 justify-items-center">
                                <label
                                    htmlFor="ancestraldomain"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Within Ancestral Domain?
                                </label>
                                <div className="flex flex-row gap-x-3 mt-2">
                                    <input
                                        id="ancestraldomain"
                                        name="ancestraldomain"
                                        type="radio"
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                    />
                                    <label
                                        htmlFor="ancestraldomainyes"
                                        className="block text-sm/6 font-medium text-gray-900 pr-10"
                                    >
                                        YES
                                    </label>

                                    <input
                                        id="ancestraldomain"
                                        name="ancestraldomain"
                                        type="radio"
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                    />
                                    <label
                                        htmlFor="ancestraldomainno"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        NO
                                    </label>
                                </div>
                            </div>

                            <div className="sm:col-span-2 justify-items-center">
                                <label
                                    htmlFor="agrarianreform"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Agrarian Reform Beneficiary?
                                </label>
                                <div className="flex flex-row gap-x-3 mt-2">
                                    <input
                                        id="agrarianreform"
                                        name="agrarianreform"
                                        type="radio"
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                    />
                                    <label
                                        htmlFor="agrarianreformyes"
                                        className="block text-sm/6 font-medium text-gray-900 pr-10"
                                    >
                                        YES
                                    </label>

                                    <input
                                        id="agrarianreform"
                                        name="agrarianreform"
                                        type="radio"
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                    />
                                    <label
                                        htmlFor="agrarianreformno"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        NO
                                    </label>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="ownership"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Ownership Document No.
                                </label>
                                <input
                                    id="ownership"
                                    name="ownership"
                                    type="text"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 sm:text-sm/6"
                                />
                            </div>

                            <div className="sm:col-span-8">
                                <label
                                    htmlFor="ownertype"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Ownership Type
                                </label>
                                <div className="flex flex-row gap-x-4 mt-2">
                                    <div className="flex gap-3">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id="regowner"
                                                    name="regowner"
                                                    type="checkbox"
                                                    aria-describedby="regowner-description"
                                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                />
                                                <svg
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                >
                                                    <path
                                                        d="M3 8L6 11L11 3.5"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                                    />
                                                    <path
                                                        d="M3 7H11"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label
                                                htmlFor="regowner"
                                                className="font-medium text-gray-900"
                                            >
                                                Registered Owner
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id="tenant"
                                                    name="tenant"
                                                    type="checkbox"
                                                    aria-describedby="tenant-description"
                                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                />
                                                <svg
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                >
                                                    <path
                                                        d="M3 8L6 11L11 3.5"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                                    />
                                                    <path
                                                        d="M3 7H11"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label
                                                htmlFor="tenant"
                                                className="font-medium text-gray-900"
                                            >
                                                Tenant
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id="lessee"
                                                    name="lessee"
                                                    type="checkbox"
                                                    aria-describedby="lessee-description"
                                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                />
                                                <svg
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                >
                                                    <path
                                                        d="M3 8L6 11L11 3.5"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                                    />
                                                    <path
                                                        d="M3 7H11"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label
                                                htmlFor="lessee"
                                                className="font-medium text-gray-900"
                                            >
                                                Lessee
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id="others"
                                                    name="others"
                                                    type="checkbox"
                                                    aria-describedby="others-description"
                                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                />
                                                <svg
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                >
                                                    <path
                                                        d="M3 8L6 11L11 3.5"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                                    />
                                                    <path
                                                        d="M3 7H11"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label
                                                htmlFor="others"
                                                className="font-medium text-gray-900"
                                            >
                                                Others
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-12">
                                <div>
                                    <table className="w-full text-center border border-gray-900/30">
                                        <thead className="border border-gray-900/30">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="hidden px-3 py-3.5 border-r border-gray-900/20 text-center text-sm font-semibold text-gray-900 sm:table-cell"
                                                >
                                                    CROP/COMMODITY
                                                    <p className="text-xs font-light italic mb-2">
                                                        (Rice/Corn/HVC/Livestock/Poultry/Agri-Fishery)
                                                    </p>
                                                    For Livestock & Poultry
                                                    <p className="text-xs font-light italic">
                                                        (specify type of animal)
                                                    </p>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden px-3 py-3.5 border-r border-gray-900/20 text-center text-sm font-semibold text-gray-900 sm:table-cell"
                                                >
                                                    Size (hectares)
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden px-3 py-3.5 border-r border-gray-900/20 text-center text-sm font-semibold text-gray-900 md:table-cell"
                                                >
                                                    NO. OF HEAD
                                                    <p className="text-xs font-light italic">
                                                        (For Livestock &
                                                        Poultry)
                                                    </p>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden px-3 py-3.5 border-r border-gray-900/20 text-center text-sm font-semibold text-gray-900 md:table-cell"
                                                >
                                                    FARM TYPE
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden px-3 py-3.5 border-r border-gray-900/20 text-center text-sm font-semibold text-gray-900 md:table-cell"
                                                >
                                                    ORGANIC PRACTIONER
                                                    <p className="text-xs font-light italic">
                                                        (YES/NO)
                                                    </p>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                                >
                                                    REMARKS
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm font-medium text-gray-900 sm:table-cell">
                                                    <input
                                                        id="cropcommodity"
                                                        name="cropcommodity"
                                                        type="text"
                                                        autoComplete="cropcommodity"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                    />
                                                </td>
                                                <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 sm:table-cell">
                                                <input
                                                        id="sizeha"
                                                        name="sizeha"
                                                        type="number"
                                                        placeholder="in hectares"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                    />
                                                </td>
                                                <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 md:table-cell">
                                                <input
                                                        id="heads"
                                                        name="heads"
                                                        type="number"
                                                        placeholder="No. of heads for Poultry & Livestock"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                    />
                                                </td>
                                                <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 md:table-cell">
                                                <select
                                            id="farmtype"
                                            name="farmtype"
                                            autoComplete="farmtype-name"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 ring-gray-300 sm:text-sm/6"
                                        >
                                            <option value="" disabled selected>
                                                -- Select Farm Type --
                                            </option>
                                            <option>Irrigated</option>
                                            <option>Rainfed Upland</option>
                                            <option>Rainfed Lowland</option>
                                        </select>
                                                </td>
                                                <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 md:table-cell">
                                                <select
                                            id="organicpractitioner"
                                            name="organicpractitioner"
                                            autoComplete="organicpractitioner-name"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 ring-gray-300 sm:text-sm/6"
                                        >
                                            <option></option>
                                            <option>YES</option>
                                            <option>NO</option>
                                        </select></td>
                                                <td className="px-3 py-4 text-sm text-gray-500">
                                                <input
                                                        id="remarks"
                                                        name="remarks"
                                                        type="text"
                                                        placeholder="Remarks"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
