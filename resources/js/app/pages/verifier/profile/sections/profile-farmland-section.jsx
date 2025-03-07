import React from "react";
import { useSelector } from "react-redux";

export default function ProfileFarmlandSection() {
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    return (
        <div className="border-t border-gray-900/10 mt-7 pb-12">
            <h2 className="text-xl/7 font-semibold text-gray-900 mt-3">
                <span className="block w-full rounded-full bg-gray-200 px-4 py-2">
                    VI. Farm Land Information
                </span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                <div className="sm:col-span-12">
                    <label
                        htmlFor="farmparcel"
                        className="block text-sm/6 mr-2 font-medium text-gray-900"
                    >
                        Name. of Farmer/s in Rotation:
                    </label>
                    <div className="flex flex-row gap-3 flex-wrap">
                        {personal_information?.land_farmers?.map((res, i) => {
                            return (
                                <>
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        value={res?.farmer_rotation_name ?? ""}
                                        placeholder="(P1)"
                                        className="block h-10 mr-1 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className="sm:col-span-12"></div>
                {personal_information?.parcels?.map((res, i) => {
                    return (
                        <div className="sm:col-span-12 shadow-lg">
                            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 rounded-t-md w-full px-4 py-5 sm:px-6">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Farm Parcel
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
                                            value={res?.farm_location ?? ""}
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
                                            value={res?.farm_area ?? ""}
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
                                                name={"ancestraldomain" + i}
                                                checked={
                                                    res?.ancestral_domain ==
                                                    "YES"
                                                }
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
                                                name={"ancestraldomain" + i}
                                                type="radio"
                                                checked={
                                                    res?.ancestral_domain ==
                                                    "NO"
                                                }
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
                                                name={"agrarianreform" + i}
                                                checked={
                                                    res?.agrarian_beneficiary ==
                                                    "YES"
                                                }
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
                                                name={"agrarianreform" + i}
                                                checked={
                                                    res?.agrarian_beneficiary ==
                                                    "NO"
                                                }
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
                                            value={res?.ownership_doc_number}
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
                                                            checked={
                                                                res?.ownership_type ==
                                                                "regowner"
                                                            }
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
                                                            checked={
                                                                res?.ownership_type ==
                                                                "tenant"
                                                            }
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
                                                            checked={
                                                                res?.ownership_type ==
                                                                "lessee"
                                                            }
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
                                                            checked={
                                                                res?.ownership_type ==
                                                                "others"
                                                            }
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
                                                            For Livestock &
                                                            Poultry
                                                            <p className="text-xs font-light italic">
                                                                (specify type of
                                                                animal)
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
                                                    {res?.parcel_components?.map(
                                                        (result, i) => {
                                                            return (
                                                                <tr>
                                                                    <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm font-medium text-gray-900 sm:table-cell">
                                                                        <input
                                                                            value={
                                                                                result?.commodity ??
                                                                                ""
                                                                            }
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
                                                                            value={
                                                                                result?.size ??
                                                                                ""
                                                                            }
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
                                                                            value={
                                                                                result?.number_heads ??
                                                                                ""
                                                                            }
                                                                            placeholder="No. of heads for Poultry & Livestock"
                                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                                        />
                                                                    </td>
                                                                    <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 md:table-cell">
                                                                        <select
                                                                            id="farmtype"
                                                                            name="farmtype"
                                                                            value={
                                                                                result?.farm_type ??
                                                                                ""
                                                                            }
                                                                            autoComplete="farmtype-name"
                                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 ring-gray-300 sm:text-sm/6"
                                                                        >
                                                                            <option
                                                                                value=""
                                                                                disabled
                                                                                selected
                                                                            >
                                                                                --
                                                                                Select
                                                                                Farm
                                                                                Type
                                                                                --
                                                                            </option>
                                                                            <option value="Irrigated">
                                                                                Irrigated
                                                                            </option>
                                                                            <option value="Rainfed Upland">
                                                                                Rainfed
                                                                                Upland
                                                                            </option>
                                                                            <option value="Rainfed Lowland">
                                                                                Rainfed
                                                                                Lowland
                                                                            </option>
                                                                        </select>
                                                                    </td>
                                                                    <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 md:table-cell">
                                                                        <select
                                                                            id="organicpractitioner"
                                                                            name="organicpractitioner"
                                                                            autoComplete="organicpractitioner-name"
                                                                            value={
                                                                                result?.organic_practioner ??
                                                                                ""
                                                                            }
                                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 ring-gray-300 sm:text-sm/6"
                                                                        >
                                                                            <option></option>
                                                                            <option value="YES">
                                                                                YES
                                                                            </option>
                                                                            <option value="NO">
                                                                                NO
                                                                            </option>
                                                                        </select>
                                                                    </td>
                                                                    <td className="px-3 py-4 text-sm text-gray-500">
                                                                        <input
                                                                            id="remarks"
                                                                            name="remarks"
                                                                            type="text"
                                                                            value={
                                                                                result?.remarks ??
                                                                                ""
                                                                            }
                                                                            placeholder="Remarks"
                                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
