import { setPersonalInformation } from "@/app/redux/personal-information-slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProfilePersonalInfoSection() {
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    const dispatch = useDispatch();
    console.log("personal_information", personal_information);

    return (
        <div>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-xl/7 font-semibold text-gray-900 mt-3">
                    <span className="block w-full rounded-full bg-gray-200 px-4 py-2">
                        I. Personal Information
                    </span>
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="dob"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Date of Birth
                        </label>
                        <div className="mt-2">
                            <input
                                id="dob"
                                name="dob"
                                type="date"
                                defaultValue={
                                    personal_information?.personal_info?.dob ??
                                    ""
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            personal_info: {
                                                ...personal_information.personal_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="pob"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Place of Birth
                        </label>
                        <div className="mt-2">
                            <input
                                id="pob"
                                name="pob"
                                type="text"
                                defaultValue={
                                    personal_information?.personal_info?.pob ??
                                    ""
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            personal_info: {
                                                ...personal_information.personal_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="religion"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Religion
                        </label>
                        <div className="mt-2">
                            <input
                                id="religion"
                                name="religion"
                                type="text"
                                defaultValue={
                                    personal_information?.personal_info
                                        ?.religion ?? ""
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            personal_info: {
                                                ...personal_information.personal_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="gender"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Gender
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <div className="flex justify-items-center gap-x-3">
                                <input
                                    checked={
                                        (personal_information?.personal_info
                                            ?.gender ?? "") == "male"
                                    }
                                    value="male"
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                personal_info: {
                                                    ...personal_information.personal_info, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    name="gender"
                                    type="radio"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-500 checked:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="gender"
                                    className="block text-sm/6 font-medium text-gray-900 pr-10"
                                >
                                    MALE
                                </label>
                                <input
                                    value="female"
                                    checked={
                                        (personal_information?.personal_info
                                            ?.gender ?? "") == "female"
                                    }
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                personal_info: {
                                                    ...personal_information.personal_info, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    name="gender"
                                    type="radio"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-500 checked:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="push-everything"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    FEMALE
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="mobile"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Civil Status
                        </label>
                        <div className="mt-2">
                            <select
                                id="civil"
                                name="civil"
                                value={
                                    personal_information?.personal_info
                                        ?.civil ?? ""
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            personal_info: {
                                                ...personal_information.personal_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            >
                                <option></option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="widowed">Widowed</option>
                                <option value="separated">Separated</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="mobile"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Mobile Number
                        </label>
                        <div className="mt-2">
                            <input
                                id="mobile"
                                name="mobile"
                                type="text"
                                value={
                                    personal_information?.personal_info
                                        ?.mobile ?? ""
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            personal_info: {
                                                ...personal_information.personal_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="telephone"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Landline Number
                        </label>
                        <div className="mt-2">
                            <input
                                id="landline"
                                name="landline"
                                type="text"
                                value={
                                    personal_information?.personal_info
                                        ?.landline ?? ""
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            personal_info: {
                                                ...personal_information.personal_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="contact_person"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Person to notify incase of emergency
                        </label>
                        <div className="mt-2">
                            <input
                                id="contact_person"
                                name="contact_person"
                                type="text"
                                value={
                                    personal_information?.personal_info
                                        ?.contact_person ?? ""
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            personal_info: {
                                                ...personal_information.personal_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="contact_mobile"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Contact Person's mobile number
                        </label>
                        <div className="mt-2">
                            <input
                                id="contact_person_mobile"
                                name="contact_person_mobile"
                                type="text"
                                value={
                                    personal_information?.personal_info
                                        ?.contact_person_mobile ?? ""
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            personal_info: {
                                                ...personal_information.personal_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="householdhead"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Household Head?
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <div className="flex justify-items-center gap-x-3">
                                <input
                                    checked={
                                        personal_information?.household
                                            ?.household_head == "YES"
                                    }
                                    id="household_head"
                                    name="household_head"
                                    onChange={(e) =>
                                        dispatch(
                                            dispatch(
                                                setPersonalInformation({
                                                    ...personal_information,
                                                    household: {
                                                        ...personal_information.household, // Spread the existing home_address fields
                                                        [e.target.name]:
                                                            e.target.value, // Dynamically set the updated field
                                                    },
                                                })
                                            )
                                        )
                                    }
                                    type="radio"
                                    value="YES"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-500 checked:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="householdhead"
                                    className="block text-sm/6 font-medium text-gray-900 pr-10"
                                >
                                    YES
                                </label>

                                <input
                                    id="household_head"
                                    name="household_head"
                                    checked={
                                        personal_information?.household
                                            ?.household_head == "NO"
                                    }
                                    onChange={(e) =>
                                        dispatch(
                                            dispatch(
                                                setPersonalInformation({
                                                    ...personal_information,
                                                    household: {
                                                        ...personal_information.household, // Spread the existing home_address fields
                                                        [e.target.name]:
                                                            e.target.value, // Dynamically set the updated field
                                                    },
                                                })
                                            )
                                        )
                                    }
                                    type="radio"
                                    value="NO"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-500 checked:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="push-everything"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    NO
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="household_members"
                            className="block text-sm/6 font-medium text-gray-900 pr-10"
                        >
                            No. of living household members
                        </label>
                        <input
                            value={
                                personal_information?.household
                                    ?.household_members ?? "0"
                            }
                            onChange={(e) =>
                                dispatch(
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            household: {
                                                ...personal_information.household, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                )
                            }
                            name="household_members"
                            type="number"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="male_members"
                            className="block text-sm/6 font-medium text-gray-900 pr-10"
                        >
                            No. of Male household members
                        </label>
                        <input
                            name="male_members"
                            type="number"
                            value={
                                personal_information?.household?.male_members ??
                                "0"
                            }
                            onChange={(e) =>
                                dispatch(
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            household: {
                                                ...personal_information.household, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                )
                            }
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="female_members"
                            className="block text-sm/6 font-medium text-gray-900 pr-10"
                        >
                            No. of Female household members
                        </label>
                        <input
                            name="female_members"
                            value={
                                personal_information?.household
                                    ?.female_members ?? "0"
                            }
                            onChange={(e) =>
                                dispatch(
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            household: {
                                                ...personal_information.household, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                )
                            }
                            type="number"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
