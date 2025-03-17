import { setPersonalInformation } from "@/app/redux/personal-information-slice";
import { setForm } from "@/app/redux/register-slice";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { FaFileCirclePlus, FaTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

export default function FarmLandComponent() {
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    const dispatch = useDispatch();
    // const [parcel, setParcel] = useState([]);

    const deleteParcel = (index) => {
        // Use the filter method to create a new array with all parcels except the one at the index
        const updatedParcels = personal_information.parcels.filter(
            (_, i) => i !== index
        );

        dispatch(
            setPersonalInformation({
                ...personal_information,
                parcels: updatedParcels,
            })
        );
    };
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;

        const updatedParcels = personal_information.parcels.map((parcel, i) => {
            if (i === index) {
                return { ...parcel, [name]: value };
            }
            return parcel;
        });

        dispatch(
            setPersonalInformation({
                ...personal_information,
                parcels: updatedParcels,
            })
        );
    };

    const handleRadioChange = (e, index) => {
        const { name, checked,value } = e.target;

        const updatedParcels = personal_information.parcels.map((parcel, i) => {
            if (i === index) {
                return { ...parcel, [name]: value };
            }
            return parcel;
        });

        dispatch(
            setPersonalInformation({
                ...personal_information,
                parcels: updatedParcels,
            })
        );
    };

    const handleDelete = (index) => {
        const updatedFarmers = personal_information.land_farmers.filter(
            (_, i) => i !== index
        );
        dispatch(
            setPersonalInformation({
                ...personal_information,
                land_farmers: updatedFarmers,
            })
        );
    };

    const handleChange = (index, value) => {
        const updatedFarmers = personal_information.land_farmers.map(
            (farmer, i) => (i === index ? { ...farmer, name: value } : farmer)
        );

        dispatch(
            setPersonalInformation({
                ...personal_information,
                land_farmers: updatedFarmers,
            })
        );
    };
    console.log("personal_information", personal_information);
    const addComponent = (parcelIndex) => {
        const updatedParcels = personal_information.parcels.map(
            (parcel, index) =>
                index === parcelIndex
                    ? {
                          ...parcel,
                          components: [
                              ...(parcel.components || []),
                              { name: "" },
                          ], // Add a new empty component
                      }
                    : parcel
        );

        dispatch(
            setPersonalInformation({
                ...personal_information,
                parcels: updatedParcels,
            })
        );
    };

    const editComponent = (parcelIndex, componentIndex, e) => {
        const updatedParcels = personal_information.parcels.map(
            (parcel, index) =>
                index === parcelIndex
                    ? {
                          ...parcel,
                          components: parcel.components.map(
                              (component, compIndex) =>
                                  compIndex === componentIndex
                                      ? {
                                            ...component,
                                            [e.target.name]: e.target.value,
                                        }
                                      : component
                          ),
                      }
                    : parcel
        );

        dispatch(
            setPersonalInformation({
                ...personal_information,
                parcels: updatedParcels,
            })
        );
    };

    const deleteComponent = (parcelIndex, componentIndex) => {
        const updatedParcels = personal_information.parcels.map(
            (parcel, index) =>
                index === parcelIndex
                    ? {
                          ...parcel,
                          components: parcel.components.filter(
                              (_, compIndex) => compIndex !== componentIndex
                          ), // Remove selected component
                      }
                    : parcel
        );

        dispatch(
            setPersonalInformation({
                ...personal_information,
                parcels: updatedParcels,
            })
        );
    };
    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
                III. Farm Land Information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
                Use a permanent address where you can receive mail.
            </p>
            <button
                onClick={() =>
                    dispatch(
                        setPersonalInformation({
                            ...personal_information,
                            land_farmers: [
                                ...(personal_information?.land_farmers || []), // Spread existing farmers safely
                                {
                                    name: "",
                                }, // Add a new empty farmer object
                            ],
                        })
                    )
                }
                className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 hover:bg-green-500 hover:text-white"
            >
                <div className="flex flex-row text-center">
                    <UserCircleIcon className="mr-2 size-6" />
                    Add Farmer
                </div>
            </button>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                <div className="sm:col-span-12">
                    <label
                        htmlFor="farmparcel"
                        className="block text-sm/6 mr-2 font-medium text-gray-900"
                    >
                        Name. of Farmer/s in Rotation:
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {personal_information?.land_farmers.map(
                            (res, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        id={`farmer-${index}`}
                                        name={`farmer-${index}`}
                                        type="text"
                                        placeholder={`(P${index + 1})`}
                                        value={res.name}
                                        onChange={(e) =>
                                            handleChange(index, e.target.value)
                                        }
                                        className="h-10 w-[200px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    />
                                    <button
                                        disabled={index == 0}
                                        onClick={() => handleDelete(index)}
                                        className={`${
                                            index == 0
                                                ? "bg-gray-300 hover:bg-gray-400"
                                                : "bg-red-500 hover:bg-red-600"
                                        } h-10 w-10 flex items-center justify-center  text-white rounded-md  transition`}
                                    >
                                        ✕
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="sm:col-span-12">
                    <button
                        onClick={() =>
                            dispatch(
                                setPersonalInformation({
                                    ...personal_information,
                                    parcels: [
                                        ...(personal_information?.parcels ||
                                            []), // Spread existing farmers safely
                                        {
                                            name: "",
                                        }, // Add a new empty farmer object
                                    ],
                                })
                            )
                        }
                        className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 hover:bg-green-500 hover:text-white"
                    >
                        <div className="flex flex-row text-center">
                            <FaFileCirclePlus className="mr-2 size-6" />
                            Add Farm Parcel Form
                        </div>
                    </button>
                </div>

                {personal_information.parcels.map((res, i) => {
                    const number = i + 1;
                    return (
                        <div key={i} className="sm:col-span-12 shadow-lg">
                            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 rounded-t-md w-full px-4 py-5 sm:px-6">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Farm Parcel No. {number}
                                </h3>
                                {i !== 0 && (
                                    <button
                                        onClick={() => deleteParcel(i)}
                                        title="Remove Parcel Form"
                                        className="rounded-full bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                    >
                                        <FaTrashCan className="size-5" />
                                    </button>
                                )}
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
                                            value={
                                                personal_information.parcels[i]
                                                    ?.farmlocation ?? ""
                                            }
                                            onChange={(e) =>
                                                handleInputChange(e, i)
                                            }
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
                                            value={
                                                personal_information.parcels[i]
                                                    ?.farmarea ?? ""
                                            }
                                            onChange={(e) =>
                                                handleInputChange(e, i)
                                            }
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
                                                value='YES'
                                                onChange={(e) =>
                                                    handleRadioChange(e, i)
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
                                                name="ancestraldomain"
                                                type="radio"
                                                value='NO'
                                                onChange={(e) =>
                                                    handleRadioChange(e, i)
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
                                                name="agrarianreform"
                                                type="radio"
                                               value='YES'
                                                onChange={(e) =>
                                                    handleRadioChange(e, i)
                                                }
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
                                               value='NO'
                                                onChange={(e) =>
                                                    handleRadioChange(e, i)
                                                }
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
                                            name="ownership_doc_number"
                                            type="text"
                                            value={
                                                personal_information.parcels[i]
                                                    ?.ownership_doc_number ?? ""
                                            }
                                            onChange={(e) =>
                                                handleInputChange(e, i)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 sm:text-sm/6"
                                        />
                                    </div>

                                    <div className="sm:col-span-8">
                                        <label
                                            htmlFor="ownership_type"
                                            className="block text-sm/6 font-medium text-gray-900"
                                        >
                                            Ownership Type
                                        </label>
                                        <div className="flex flex-row gap-x-4 mt-2">
                                            {[
                                                {
                                                    id: "regowner",
                                                    label: "Registered Owner",
                                                },
                                                {
                                                    id: "tenant",
                                                    label: "Tenant",
                                                },
                                                {
                                                    id: "lessee",
                                                    label: "Lessee",
                                                },
                                                {
                                                    id: "others",
                                                    label: "Others",
                                                },
                                            ].map(({ id, label }) => (
                                                <div
                                                    key={id}
                                                    className="flex gap-3"
                                                >
                                                    <div className="flex h-6 shrink-0 items-center">
                                                        <input
                                                            id={id}
                                                            name="ownership_type"
                                                            value={id}
                                                            checked={
                                                                personal_information
                                                                    .parcels[i]
                                                                    ?.ownership_type ===
                                                                id
                                                            }
                                                            onChange={(e) =>
                                                                handleInputChange(
                                                                    e,
                                                                    i
                                                                )
                                                            }
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                                                        />
                                                    </div>
                                                    <div className="text-sm/6">
                                                        <label
                                                            htmlFor={id}
                                                            className="font-medium text-gray-900"
                                                        >
                                                            {label}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
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
                                                            className="px-3 py-3.5 text-center border-r border-gray-900/20 text-sm font-semibold text-gray-900"
                                                        >
                                                            <div className="flex flex-col gap-3">
                                                                <div>
                                                                    REMARKS
                                                                </div>
                                                                <div>
                                                                    <button
                                                                        onClick={() =>
                                                                            addComponent(
                                                                                i
                                                                            )
                                                                        }
                                                                        className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 hover:bg-green-500 hover:text-white"
                                                                    >
                                                                        <div className="flex flex-row items-center justify-center text-center">
                                                                            <div>
                                                                                <FaFileCirclePlus className="mr-2 size-6" />
                                                                            </div>
                                                                            <div>
                                                                                Add
                                                                                Components
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                                        >
                                                            DELETE
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {res?.components?.map(
                                                        (
                                                            component,
                                                            componentIndex
                                                        ) => {
                                                            return (
                                                                <tr>
                                                                    <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm font-medium text-gray-900 sm:table-cell">
                                                                        <input
                                                                            id="cropcommodity"
                                                                            name="cropcommodity"
                                                                            type="text"
                                                                            value={
                                                                                component?.cropcommodity ||
                                                                                ""
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                editComponent(
                                                                                    i,
                                                                                    componentIndex,
                                                                                    e
                                                                                )
                                                                            }
                                                                            autoComplete="cropcommodity"
                                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                                        />
                                                                    </td>
                                                                    <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 sm:table-cell">
                                                                        <input
                                                                            id="sizeha"
                                                                            name="sizeha"
                                                                            type="number"
                                                                            value={
                                                                                component?.sizeha ||
                                                                                ""
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                editComponent(
                                                                                    i,
                                                                                    componentIndex,
                                                                                    e
                                                                                )
                                                                            }
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
                                                                                component?.heads ||
                                                                                ""
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                editComponent(
                                                                                    i,
                                                                                    componentIndex,
                                                                                    e
                                                                                )
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
                                                                                component?.farmtype ||
                                                                                ""
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                editComponent(
                                                                                    i,
                                                                                    componentIndex,
                                                                                    e
                                                                                )
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
                                                                            <option>
                                                                                Irrigated
                                                                            </option>
                                                                            <option>
                                                                                Rainfed
                                                                                Upland
                                                                            </option>
                                                                            <option>
                                                                                Rainfed
                                                                                Lowland
                                                                            </option>
                                                                        </select>
                                                                    </td>
                                                                    <td className="hidden px-3 py-4 border-r border-gray-900/20 text-sm text-gray-500 md:table-cell">
                                                                        <select
                                                                            id="organicpractitioner"
                                                                            name="organicpractitioner"
                                                                            value={
                                                                                component?.organicpractitioner ||
                                                                                ""
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                editComponent(
                                                                                    i,
                                                                                    componentIndex,
                                                                                    e
                                                                                )
                                                                            }
                                                                            autoComplete="organicpractitioner-name"
                                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 ring-gray-300 sm:text-sm/6"
                                                                        >
                                                                            <option></option>
                                                                            <option>
                                                                                YES
                                                                            </option>
                                                                            <option>
                                                                                NO
                                                                            </option>
                                                                        </select>
                                                                    </td>
                                                                    <td className="px-3 border-r border-gray-900/20 py-4 text-sm text-gray-500">
                                                                        <input
                                                                            id="remarks"
                                                                            name="remarks"
                                                                            type="text"
                                                                            value={
                                                                                component?.remarks ||
                                                                                ""
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                editComponent(
                                                                                    i,
                                                                                    componentIndex,
                                                                                    e
                                                                                )
                                                                            }
                                                                            placeholder="Remarks"
                                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                                                        />
                                                                    </td>
                                                                    <td className="px-3 py-4 text-sm text-gray-500">
                                                                        <button
                                                                            onClick={() =>
                                                                                deleteComponent(
                                                                                    i,
                                                                                    componentIndex
                                                                                )
                                                                            }
                                                                            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                                                        >
                                                                            Delete
                                                                        </button>
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
