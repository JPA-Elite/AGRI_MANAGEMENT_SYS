import { setPersonalInformation } from "@/app/redux/personal-information-slice";
import { setForm } from "@/app/redux/register-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function GovernmentAffiliationComponent() {
    const [isIndigenous, setIsIndigenous] = useState(true);
    const [isGovernment, setIsGovernment] = useState(true);
    const [isCooperative, setIsCooperative] = useState(true);
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    const { organizations } = useSelector((store) => store.organization);
    console.log("organizations", organizations);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                    Government Programs Affiliation
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                    Use a permanent address where you can receive mail.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                    <div className="sm:col-span-4 border-r border-gray-900/30">
                        <label
                            htmlFor="pwd"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Person with Disability (PWD)?
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center gap-x-3 mb-3">
                                <input
                                    name="PWD"
                                    type="radio"
                                    value="YES"
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="pwdyes"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    YES
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    name="PWD"
                                    type="radio"
                                    value="NO"
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="pwdno"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    NO
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4 border-r border-gray-900/30">
                        <label
                            htmlFor="4ps"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            4P's Beneficiary?
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center gap-x-3 mb-3">
                                <input
                                    name="4Ps"
                                    type="radio"
                                    value="YES"
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="4psyes"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    YES
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    name="4Ps"
                                    type="radio"
                                    value="NO"
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="4psno"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    NO
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="education"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Member of an Indigenous Group?
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center gap-x-3 mb-3">
                                <input
                                    name="indigenous_group"
                                    type="radio"
                                    value="YES"
                                    onClick={() => setIsIndigenous(false)}
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="indigenousyes"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    YES
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    name="indigenous_group"
                                    type="radio"
                                    value="NO"
                                    onClick={() => setIsIndigenous(true)}
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="indigenousno"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    NO
                                </label>
                            </div>
                            {!isIndigenous && (
                                <>
                                    <input
                                        name="indigenous_group_name"
                                        type="text"
                                        placeholder="If YES, Please Specify"
                                        onChange={(e) =>
                                            dispatch(
                                                setPersonalInformation({
                                                    ...personal_information,
                                                    government_affiliation: {
                                                        ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                        [e.target.name]:
                                                            e.target.value, // Dynamically set the updated field
                                                    },
                                                })
                                            )
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 mt-4 sm:text-sm/6"
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                <div className="sm:col-span-6 border-r border-gray-900/30">
                    <label
                        htmlFor="govid"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        With Government ID?
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center gap-x-3 mb-3">
                            <input
                                name="government_id"
                                type="radio"
                                value="YES"
                                onClick={() => setIsGovernment(false)}
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            government_affiliation: {
                                                ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            <label
                                htmlFor="gov_id"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                YES
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                name="government_id"
                                type="radio"
                                value="NO"
                                onClick={() => setIsGovernment(true)}
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            government_affiliation: {
                                                ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            <label
                                htmlFor="govidno"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                NO
                            </label>
                        </div>
                        {!isGovernment && (
                            <>
                                <input
                                    name="government_id_type"
                                    type="text"
                                    placeholder="If YES, Please Specify ID Type"
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 mt-4 sm:text-sm/6"
                                />

                                <input
                                    name="government_id_number"
                                    type="text"
                                    placeholder="ID Number"
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 mt-4 sm:text-sm/6"
                                />
                            </>
                        )}
                    </div>
                </div>

                <div className="sm:col-span-6 border-r border-gray-900/30">
                    <label
                        htmlFor="farmassoc"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Member of any Farmers Association/Cooperative?
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center gap-x-3 mb-3">
                            <input
                                name="farmers_association"
                                type="radio"
                                value="YES"
                                // onClick={() => setIsCooperative(false)}
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            government_affiliation: {
                                                ...personal_information.government_affiliation, // Spread the existing government_affiliation fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            <label
                                htmlFor="farm_assocyes"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                YES
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                name="farmers_association"
                                type="radio"
                                value="NO"
                                onClick={() => setIsCooperative(true)}
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            government_affiliation: {
                                                ...personal_information.government_affiliation, // Spread the existing government_affiliation fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            <label
                                htmlFor="farmassocno"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                NO
                            </label>
                        </div>
                        {personal_information?.government_affiliation
                            ?.farmers_association == "YES" && (
                            <>
                                <select
                                    id="farmers_association_name"
                                    name="farmers_association_name"
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                government_affiliation: {
                                                    ...personal_information.government_affiliation, // Spread the existing home_address fields
                                                    [e.target.name]:
                                                        e.target.value, // Dynamically set the updated field
                                                },
                                            })
                                        )
                                    }
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                >
                                    <option value="" disabled selected>
                                        -- Member of any Farmers
                                        Association/Cooperative? --
                                    </option>
                                    {organizations.map((res, i) => {
                                        return (
                                            <option
                                                value={res.organization_name}
                                                key={i}
                                            >
                                                {res.organization_name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
