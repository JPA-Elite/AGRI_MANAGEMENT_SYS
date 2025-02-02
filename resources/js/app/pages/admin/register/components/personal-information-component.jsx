import { setPersonalInformation } from "@/app/redux/personal-information-slice";
import { setForm } from "@/app/redux/register-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalInformationComponent() {
    const [isHouseHold, setIsHouseHold] = useState(true);
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    const dispatch = useDispatch();

    console.log("personal_information", personal_information);
    return (
        <div>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                    I. Personal Information
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                    Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="first-name"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            First name
                        </label>
                        <div className="mt-2">
                            <input
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
                                name="first_name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="first-name"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Middle name
                        </label>
                        <div className="mt-2">
                            <input
                                name="middle_name"
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
                                type="text"
                                autoComplete="middle_name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="last-name"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                id="last_name"
                                name="last_name"
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
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="suffix"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Suffix
                        </label>
                        <div className="mt-2">
                            <select
                                name="suffix"
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
                                <option>Jr</option>
                                <option>Sr</option>
                                <option>I</option>
                                <option>II</option>
                                <option>III</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-12">
                        <label
                            htmlFor="maiden_name"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Mother's Maiden Name
                        </label>
                        <div className="mt-2">
                            <input
                                name="maiden_name"
                                type="text"
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
                                    id="gender"
                                    name="gender"
                                    type="radio"
                                    value="male"
                                    onChange={(e) =>
                                        dispatch(
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
                                        )
                                    }
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-500 checked:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="gender"
                                    className="block text-sm/6 font-medium text-gray-900 pr-10"
                                >
                                    MALE
                                </label>

                                <input
                                    id="gender"
                                    name="gender"
                                    type="radio"
                                    value="female"
                                    onChange={(e) =>
                                        dispatch(
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
                                        )
                                    }
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
                                <option>Single</option>
                                <option>Married</option>
                                <option>Widowed</option>
                                <option>Separated</option>
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
                                id="telephone"
                                name="telephone"
                                type="text"
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
                                id="contact_mobile"
                                name="contact_mobile"
                                type="text"
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
                                    id="householdhead"
                                    name="householdhead"
                                    type="radio"
                                    value="YES"
                                    onClick={() => setIsHouseHold(true)}
                                    onChange={(e) =>
                                        dispatch(
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
                                        )
                                    }
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-500 checked:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="householdhead"
                                    className="block text-sm/6 font-medium text-gray-900 pr-10"
                                >
                                    YES
                                </label>

                                <input
                                    id="householdhead"
                                    name="householdhead"
                                    type="radio"
                                    value="NO"
                                    onClick={() => setIsHouseHold(false)}
                                    onChange={(e) =>
                                        dispatch(
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
                                        )
                                    }
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

                    {!isHouseHold && (
                        <>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="household_name"
                                    className="block text-sm/6 font-medium text-gray-900 pr-10"
                                >
                                    Name of Household Head
                                </label>
                                <input
                                    name="household_name"
                                    type="text"
                                    onChange={(e) =>
                                        dispatch(
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
                                        )
                                    }
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>

                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="household_relation"
                                    className="block text-sm/6 font-medium text-gray-900 pr-10"
                                >
                                    Relationship to the Household Head
                                </label>
                                <input
                                    name="household_relation"
                                    type="text"
                                    onChange={(e) =>
                                        dispatch(
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
                                        )
                                    }
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>
                        </>
                    )}

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="household_members"
                            className="block text-sm/6 font-medium text-gray-900 pr-10"
                        >
                            No. of living household members
                        </label>
                        <input
                            name="household_members"
                            type="number"
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

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="female_members"
                            className="block text-sm/6 font-medium text-gray-900 pr-10"
                        >
                            No. of Female household members
                        </label>
                        <input
                            name="female_members"
                            type="number"
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
            </div>
        </div>
    );
}
