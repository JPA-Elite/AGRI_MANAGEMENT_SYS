import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInformation } from "@/app/redux/personal-information-slice";

export default function ProfileFarmlandSection() {
    const dispatch = useDispatch();
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
                                        name="farmer_rotation_name"
                                        type="text"
                                        value={res?.farmer_rotation_name ?? ""}
                                        placeholder="(P1)"
                                        onChange={(e) => {
                                            const updatedFarmProfiles = [
                                                ...personal_information.land_farmers,
                                            ];
                                            updatedFarmProfiles[i] = {
                                                ...updatedFarmProfiles[i],
                                                [e.target.name]: e.target.value,
                                            };
                                            dispatch(
                                                setPersonalInformation({
                                                    ...personal_information,
                                                    land_farmers:
                                                        updatedFarmProfiles,
                                                })
                                            );
                                        }}
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
                                            htmlFor="farm_location"
                                            className="block text-sm/6 font-medium text-gray-900"
                                        >
                                            Farm Location
                                        </label>
                                        <input
                                            id="farm_location"
                                            name="farm_location"
                                            type="text"
                                            value={res?.farm_location ?? ""}
                                            onChange={(e) => {
                                                const updatedFarmProfiles = [
                                                    ...personal_information.parcels,
                                                ];
                                                updatedFarmProfiles[i] = {
                                                    ...updatedFarmProfiles[i],
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                                dispatch(
                                                    setPersonalInformation({
                                                        ...personal_information,
                                                        parcels:
                                                            updatedFarmProfiles,
                                                    })
                                                );
                                            }}
                                            placeholder="Barangay, City/Municipal"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 sm:text-sm/6"
                                        />
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="farm_area"
                                            className="block text-sm/6 font-medium text-gray-900"
                                        >
                                            Total Farm Area (in hectares)
                                        </label>
                                        <input
                                            value={res?.farm_area ?? ""}
                                            id="farm_area"
                                            name="farm_area"
                                            type="number"
                                            onChange={(e) => {
                                                const updatedFarmProfiles = [
                                                    ...personal_information.parcels,
                                                ];
                                                updatedFarmProfiles[i] = {
                                                    ...updatedFarmProfiles[i],
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                                dispatch(
                                                    setPersonalInformation({
                                                        ...personal_information,
                                                        parcels:
                                                            updatedFarmProfiles,
                                                    })
                                                );
                                            }}
                                            placeholder="in hectares"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 sm:text-sm/6"
                                        />
                                    </div>

                                    <div className="sm:col-span-3 justify-items-center">
                                        <label
                                            htmlFor="ancestral_domain"
                                            className="block text-sm/6 font-medium text-gray-900"
                                        >
                                            Within Ancestral Domain?
                                        </label>
                                        <div className="flex flex-row gap-x-3 mt-2">
                                            <input
                                                id="ancestral_domain"
                                                name={"ancestral_domain" + i}
                                                checked={
                                                    res?.ancestral_domain ==
                                                    "YES"
                                                }
                                                value="YES"
                                                onChange={(e) => {
                                                    const updatedFarmProfiles =
                                                        [
                                                            ...personal_information.parcels,
                                                        ];
                                                    updatedFarmProfiles[i] = {
                                                        ...updatedFarmProfiles[
                                                            i
                                                        ],
                                                        ancestral_domain:
                                                            e.target.value,
                                                    };
                                                    dispatch(
                                                        setPersonalInformation({
                                                            ...personal_information,
                                                            parcels:
                                                                updatedFarmProfiles,
                                                        })
                                                    );
                                                }}
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                            />
                                            <label
                                                htmlFor="ancestral_domainyes"
                                                className="block text-sm/6 font-medium text-gray-900 pr-10"
                                            >
                                                YES
                                            </label>

                                            <input
                                                id="ancestral_domain"
                                                name={"ancestral_domain" + i}
                                                type="radio"
                                                checked={
                                                    res?.ancestral_domain ==
                                                    "NO"
                                                }
                                                value="NO"
                                                onChange={(e) => {
                                                    const updatedFarmProfiles =
                                                        [
                                                            ...personal_information.parcels,
                                                        ];
                                                    updatedFarmProfiles[i] = {
                                                        ...updatedFarmProfiles[
                                                            i
                                                        ],
                                                        ancestral_domain:
                                                            e.target.value,
                                                    };
                                                    dispatch(
                                                        setPersonalInformation({
                                                            ...personal_information,
                                                            parcels:
                                                                updatedFarmProfiles,
                                                        })
                                                    );
                                                }}
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                            />
                                            <label
                                                htmlFor="ancestral_domainno"
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
                                                id="agrarian_beneficiary"
                                                name={
                                                    "agrarian_beneficiary" + i
                                                }
                                                checked={
                                                    res?.agrarian_beneficiary ==
                                                    "YES"
                                                }
                                                onChange={(e) => {
                                                    const updatedFarmProfiles =
                                                        [
                                                            ...personal_information.parcels,
                                                        ];
                                                    updatedFarmProfiles[i] = {
                                                        ...updatedFarmProfiles[
                                                            i
                                                        ],
                                                        agrarian_beneficiary:
                                                            e.target.value,
                                                    };
                                                    dispatch(
                                                        setPersonalInformation({
                                                            ...personal_information,
                                                            parcels:
                                                                updatedFarmProfiles,
                                                        })
                                                    );
                                                }}
                                                value="YES"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                            />
                                            <label
                                                htmlFor="agrarian_beneficiaryyes"
                                                className="block text-sm/6 font-medium text-gray-900 pr-10"
                                            >
                                                YES
                                            </label>

                                            <input
                                                id="agrarian_beneficiary"
                                                name={
                                                    "agrarian_beneficiary" + i
                                                }
                                                checked={
                                                    res?.agrarian_beneficiary ==
                                                    "NO"
                                                }
                                                onChange={(e) => {
                                                    const updatedFarmProfiles =
                                                        [
                                                            ...personal_information.parcels,
                                                        ];
                                                    updatedFarmProfiles[i] = {
                                                        ...updatedFarmProfiles[
                                                            i
                                                        ],
                                                        agrarian_beneficiary:
                                                            e.target.value,
                                                    };
                                                    dispatch(
                                                        setPersonalInformation({
                                                            ...personal_information,
                                                            parcels:
                                                                updatedFarmProfiles,
                                                        })
                                                    );
                                                }}
                                                value="NO"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                            />
                                            <label
                                                htmlFor="agrarian_beneficiaryno"
                                                className="block text-sm/6 font-medium text-gray-900"
                                            >
                                                NO
                                            </label>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label
                                            htmlFor="ownership_doc_number"
                                            className="block text-sm/6 font-medium text-gray-900"
                                        >
                                            Ownership Document No.
                                        </label>
                                        <input
                                            id="ownership_doc_number"
                                            name="ownership_doc_number"
                                            value={res?.ownership_doc_number}
                                            onChange={(e) => {
                                                const updatedFarmProfiles = [
                                                    ...personal_information.parcels,
                                                ];
                                                updatedFarmProfiles[i] = {
                                                    ...updatedFarmProfiles[i],
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                                dispatch(
                                                    setPersonalInformation({
                                                        ...personal_information,
                                                        parcels:
                                                            updatedFarmProfiles,
                                                    })
                                                );
                                            }}
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
                                                            id="ownership_type"
                                                            name="ownership_type"
                                                            type="checkbox"
                                                            checked={
                                                                res?.ownership_type ==
                                                                "regowner"
                                                            }
                                                            value="regowner"
                                                            onChange={(e) => {
                                                                const updatedFarmProfiles =
                                                                    [
                                                                        ...personal_information.parcels,
                                                                    ];
                                                                updatedFarmProfiles[
                                                                    i
                                                                ] = {
                                                                    ...updatedFarmProfiles[
                                                                        i
                                                                    ],
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                };
                                                                dispatch(
                                                                    setPersonalInformation(
                                                                        {
                                                                            ...personal_information,
                                                                            parcels:
                                                                                updatedFarmProfiles,
                                                                        }
                                                                    )
                                                                );
                                                            }}
                                                            aria-describedby="ownership_type-description"
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
                                                        htmlFor="ownership_type"
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
                                                            id="ownership_type"
                                                            name="ownership_type"
                                                            type="checkbox"
                                                            checked={
                                                                res?.ownership_type ==
                                                                "tenant"
                                                            }
                                                            value="tenant"
                                                            onChange={(e) => {
                                                                const updatedFarmProfiles =
                                                                    [
                                                                        ...personal_information.parcels,
                                                                    ];
                                                                updatedFarmProfiles[
                                                                    i
                                                                ] = {
                                                                    ...updatedFarmProfiles[
                                                                        i
                                                                    ],
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                };
                                                                dispatch(
                                                                    setPersonalInformation(
                                                                        {
                                                                            ...personal_information,
                                                                            parcels:
                                                                                updatedFarmProfiles,
                                                                        }
                                                                    )
                                                                );
                                                            }}
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
                                                        htmlFor="ownership_type"
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
                                                            name="ownership_type"
                                                            checked={
                                                                res?.ownership_type ==
                                                                "lessee"
                                                            }
                                                            value="lessee"
                                                            onChange={(e) => {
                                                                const updatedFarmProfiles =
                                                                    [
                                                                        ...personal_information.parcels,
                                                                    ];
                                                                updatedFarmProfiles[
                                                                    i
                                                                ] = {
                                                                    ...updatedFarmProfiles[
                                                                        i
                                                                    ],
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                };
                                                                dispatch(
                                                                    setPersonalInformation(
                                                                        {
                                                                            ...personal_information,
                                                                            parcels:
                                                                                updatedFarmProfiles,
                                                                        }
                                                                    )
                                                                );
                                                            }}
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
                                                            id="ownership_type"
                                                            name="ownership_type"
                                                            checked={
                                                                res?.ownership_type ==
                                                                "others"
                                                            }
                                                            value="others"
                                                            onChange={(e) => {
                                                                const updatedFarmProfiles =
                                                                    [
                                                                        ...personal_information.parcels,
                                                                    ];
                                                                updatedFarmProfiles[
                                                                    i
                                                                ] = {
                                                                    ...updatedFarmProfiles[
                                                                        i
                                                                    ],
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                };
                                                                dispatch(
                                                                    setPersonalInformation(
                                                                        {
                                                                            ...personal_information,
                                                                            parcels:
                                                                                updatedFarmProfiles,
                                                                        }
                                                                    )
                                                                );
                                                            }}
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
                                                        (result, ii) => (
                                                            <tr key={ii}>
                                                                <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm font-medium text-gray-900 sm:table-cell">
                                                                    <input
                                                                        id={`commodity-${i}-${ii}`}
                                                                        name="commodity"
                                                                        type="text"
                                                                        value={
                                                                            result?.commodity ??
                                                                            ""
                                                                        }
                                                                        autoComplete="commodity"
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            const updatedParcels =
                                                                                [
                                                                                    ...personal_information.parcels,
                                                                                ];
                                                                            updatedParcels[
                                                                                i
                                                                            ] =
                                                                                {
                                                                                    ...updatedParcels[
                                                                                        i
                                                                                    ],
                                                                                    parcel_components:
                                                                                        updatedParcels[
                                                                                            i
                                                                                        ].parcel_components.map(
                                                                                            (
                                                                                                component,
                                                                                                index
                                                                                            ) =>
                                                                                                index ===
                                                                                                ii
                                                                                                    ? {
                                                                                                          ...component,
                                                                                                          [e
                                                                                                              .target
                                                                                                              .name]:
                                                                                                              e
                                                                                                                  .target
                                                                                                                  .value,
                                                                                                      }
                                                                                                    : component
                                                                                        ),
                                                                                };
                                                                            dispatch(
                                                                                setPersonalInformation(
                                                                                    {
                                                                                        ...personal_information,
                                                                                        parcels:
                                                                                            updatedParcels,
                                                                                    }
                                                                                )
                                                                            );
                                                                        }}
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                                    />
                                                                </td>
                                                                <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 sm:table-cell">
                                                                    <input
                                                                        id={`size-${i}-${ii}`}
                                                                        name="size"
                                                                        type="number"
                                                                        value={
                                                                            result?.size ??
                                                                            ""
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            const updatedParcels =
                                                                                [
                                                                                    ...personal_information.parcels,
                                                                                ];
                                                                            updatedParcels[
                                                                                i
                                                                            ] =
                                                                                {
                                                                                    ...updatedParcels[
                                                                                        i
                                                                                    ],
                                                                                    parcel_components:
                                                                                        updatedParcels[
                                                                                            i
                                                                                        ].parcel_components.map(
                                                                                            (
                                                                                                component,
                                                                                                index
                                                                                            ) =>
                                                                                                index ===
                                                                                                ii
                                                                                                    ? {
                                                                                                          ...component,
                                                                                                          [e
                                                                                                              .target
                                                                                                              .name]:
                                                                                                              e
                                                                                                                  .target
                                                                                                                  .value,
                                                                                                      }
                                                                                                    : component
                                                                                        ),
                                                                                };
                                                                            dispatch(
                                                                                setPersonalInformation(
                                                                                    {
                                                                                        ...personal_information,
                                                                                        parcels:
                                                                                            updatedParcels,
                                                                                    }
                                                                                )
                                                                            );
                                                                        }}
                                                                        placeholder="in hectares"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                                    />
                                                                </td>
                                                                <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 md:table-cell">
                                                                    <input
                                                                        id={`number_heads-${i}-${ii}`}
                                                                        name="number_heads"
                                                                        type="number"
                                                                        value={
                                                                            result?.number_heads ??
                                                                            ""
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            const updatedParcels =
                                                                                [
                                                                                    ...personal_information.parcels,
                                                                                ];
                                                                            updatedParcels[
                                                                                i
                                                                            ] =
                                                                                {
                                                                                    ...updatedParcels[
                                                                                        i
                                                                                    ],
                                                                                    parcel_components:
                                                                                        updatedParcels[
                                                                                            i
                                                                                        ].parcel_components.map(
                                                                                            (
                                                                                                component,
                                                                                                index
                                                                                            ) =>
                                                                                                index ===
                                                                                                ii
                                                                                                    ? {
                                                                                                          ...component,
                                                                                                          [e
                                                                                                              .target
                                                                                                              .name]:
                                                                                                              e
                                                                                                                  .target
                                                                                                                  .value,
                                                                                                      }
                                                                                                    : component
                                                                                        ),
                                                                                };
                                                                            dispatch(
                                                                                setPersonalInformation(
                                                                                    {
                                                                                        ...personal_information,
                                                                                        parcels:
                                                                                            updatedParcels,
                                                                                    }
                                                                                )
                                                                            );
                                                                        }}
                                                                        placeholder="No. of heads for Poultry & Livestock"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                                    />
                                                                </td>
                                                                <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 md:table-cell">
                                                                    <select
                                                                        id={`farm_type-${i}-${ii}`}
                                                                        name="farm_type"
                                                                        value={
                                                                            result?.farm_type ??
                                                                            ""
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            const updatedParcels =
                                                                                [
                                                                                    ...personal_information.parcels,
                                                                                ];
                                                                            updatedParcels[
                                                                                i
                                                                            ] =
                                                                                {
                                                                                    ...updatedParcels[
                                                                                        i
                                                                                    ],
                                                                                    parcel_components:
                                                                                        updatedParcels[
                                                                                            i
                                                                                        ].parcel_components.map(
                                                                                            (
                                                                                                component,
                                                                                                index
                                                                                            ) =>
                                                                                                index ===
                                                                                                ii
                                                                                                    ? {
                                                                                                          ...component,
                                                                                                          [e
                                                                                                              .target
                                                                                                              .name]:
                                                                                                              e
                                                                                                                  .target
                                                                                                                  .value,
                                                                                                      }
                                                                                                    : component
                                                                                        ),
                                                                                };
                                                                            dispatch(
                                                                                setPersonalInformation(
                                                                                    {
                                                                                        ...personal_information,
                                                                                        parcels:
                                                                                            updatedParcels,
                                                                                    }
                                                                                )
                                                                            );
                                                                        }}
                                                                        autoComplete="farmtype-name"
                                                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 ring-gray-300 sm:text-sm/6"
                                                                    >
                                                                        <option
                                                                            value=""
                                                                            disabled
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
                                                                        id={`organic_practioner-${i}-${ii}`}
                                                                        name="organic_practioner"
                                                                        value={
                                                                            result?.organic_practioner ??
                                                                            ""
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            const updatedParcels =
                                                                                [
                                                                                    ...personal_information.parcels,
                                                                                ];
                                                                            updatedParcels[
                                                                                i
                                                                            ] =
                                                                                {
                                                                                    ...updatedParcels[
                                                                                        i
                                                                                    ],
                                                                                    parcel_components:
                                                                                        updatedParcels[
                                                                                            i
                                                                                        ].parcel_components.map(
                                                                                            (
                                                                                                component,
                                                                                                index
                                                                                            ) =>
                                                                                                index ===
                                                                                                ii
                                                                                                    ? {
                                                                                                          ...component,
                                                                                                          [e
                                                                                                              .target
                                                                                                              .name]:
                                                                                                              e
                                                                                                                  .target
                                                                                                                  .value,
                                                                                                      }
                                                                                                    : component
                                                                                        ),
                                                                                };
                                                                            dispatch(
                                                                                setPersonalInformation(
                                                                                    {
                                                                                        ...personal_information,
                                                                                        parcels:
                                                                                            updatedParcels,
                                                                                    }
                                                                                )
                                                                            );
                                                                        }}
                                                                        autoComplete="organic_practioner-name"
                                                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 ring-gray-300 sm:text-sm/6"
                                                                    >
                                                                        <option value="">
                                                                            --
                                                                            Select
                                                                            --
                                                                        </option>
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
                                                                        id={`remarks-${i}-${ii}`}
                                                                        name="remarks"
                                                                        type="text"
                                                                        value={
                                                                            result?.remarks ??
                                                                            ""
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            const updatedParcels =
                                                                                [
                                                                                    ...personal_information.parcels,
                                                                                ];
                                                                            updatedParcels[
                                                                                i
                                                                            ] =
                                                                                {
                                                                                    ...updatedParcels[
                                                                                        i
                                                                                    ],
                                                                                    parcel_components:
                                                                                        updatedParcels[
                                                                                            i
                                                                                        ].parcel_components.map(
                                                                                            (
                                                                                                component,
                                                                                                index
                                                                                            ) =>
                                                                                                index ===
                                                                                                ii
                                                                                                    ? {
                                                                                                          ...component,
                                                                                                          [e
                                                                                                              .target
                                                                                                              .name]:
                                                                                                              e
                                                                                                                  .target
                                                                                                                  .value,
                                                                                                      }
                                                                                                    : component
                                                                                        ),
                                                                                };
                                                                            dispatch(
                                                                                setPersonalInformation(
                                                                                    {
                                                                                        ...personal_information,
                                                                                        parcels:
                                                                                            updatedParcels,
                                                                                    }
                                                                                )
                                                                            );
                                                                        }}
                                                                        placeholder="Remarks"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                                    />
                                                                </td>
                                                            </tr>
                                                        )
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
