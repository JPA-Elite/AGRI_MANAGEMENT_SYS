import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ProfileGovernmentInfoSection() {
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    const [isIndigenous, setIsIndigenous] = useState(true);
    const [isGovernment, setIsGovernment] = useState(true);
    const [isCooperative, setIsCooperative] = useState(true);
    return (
        <div>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-xl/7 font-semibold text-gray-900 mt-3">
                    <span className="block w-full rounded-full bg-gray-200 px-4 py-2">
                        IV. Government Affiliation
                    </span>
                </h2>
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
                                    disabled
                                    name="pwd"
                                    type="radio"
                                    value="YES"
                                    checked={
                                        personal_information
                                            ?.government_affiliation?.PWD ==
                                        "YES"
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
                                    disabled
                                    checked={
                                        personal_information
                                            ?.government_affiliation?.PWD ==
                                        "NO"
                                    }
                                    name="pwd"
                                    type="radio"
                                    value="NO"
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
                                    disabled
                                    name="4ps"
                                    type="radio"
                                    checked={
                                        personal_information
                                            ?.government_affiliation?.[
                                            "4Ps"
                                        ] === "YES"
                                    }
                                    value="YES"
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
                                    disabled
                                    checked={
                                        personal_information
                                            ?.government_affiliation?.[
                                            "4Ps"
                                        ] === "NO"
                                    }
                                    name="4ps"
                                    type="radio"
                                    value="NO"
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
                                    disabled
                                    name="indigenous"
                                    type="radio"
                                    value="YES"
                                    checked={
                                        personal_information
                                            ?.government_affiliation
                                            ?.indigenous_group === "YES"
                                    }
                                    onClick={() => setIsIndigenous(false)}
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
                                    disabled
                                    checked={
                                        personal_information
                                            ?.government_affiliation
                                            ?.indigenous_group === "NO"
                                    }
                                    name="indigenous"
                                    type="radio"
                                    value="NO"
                                    onClick={() => setIsIndigenous(true)}
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="indigenousno"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    NO
                                </label>
                            </div>
                            {personal_information?.government_affiliation
                                ?.indigenous_group === "YES" && (
                                <>
                                    <input
                                        disabled
                                        name="indigent_specify"
                                        type="text"
                                        value={
                                            personal_information
                                                ?.government_affiliation
                                                ?.indigenous_group_name
                                        }
                                        placeholder="If YES, Please Specify"
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
                                disabled
                                checked={
                                    personal_information?.government_affiliation
                                        ?.government_id === "YES"
                                }
                                name="gov_id"
                                type="radio"
                                value="YES"
                                onClick={() => setIsGovernment(false)}
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
                                disabled
                                name="gov_id"
                                type="radio"
                                checked={
                                    personal_information?.government_affiliation
                                        ?.government_id === "NO"
                                }
                                value="NO"
                                onClick={() => setIsGovernment(true)}
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            <label
                                htmlFor="govidno"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                NO
                            </label>
                        </div>
                        {personal_information?.government_affiliation
                            ?.government_id === "YES" && (
                            <>
                                <input
                                    disabled
                                    name="gov_type"
                                    value={
                                        personal_information
                                            ?.government_affiliation
                                            ?.government_id_type
                                    }
                                    type="text"
                                    placeholder="If YES, Please Specify ID Type"
                                    className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 mt-4 sm:text-sm/6"
                                />

                                <input
                                    disabled
                                    name="gov_number"
                                    value={
                                        personal_information
                                            ?.government_affiliation
                                            ?.government_id_number
                                    }
                                    type="text"
                                    placeholder="ID Number"
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
                                disabled
                                name="farm_assoc"
                                type="radio"
                                value="YES"
                                checked={
                                    personal_information?.government_affiliation
                                        ?.farmers_association == "YES"
                                }
                                onClick={() => setIsCooperative(false)}
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
                                disabled
                                checked={
                                    personal_information?.government_affiliation
                                        ?.farmers_association == "NO"
                                }
                                name="farm_assoc"
                                type="radio"
                                value="NO"
                                onClick={() => setIsCooperative(true)}
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
                                <input
                                    disabled
                                    name="farmassoc_name"
                                    type="text"
                                    value={personal_information?.government_affiliation
                                        ?.farmers_association_name }
                                    placeholder="If YES, Please Specify"
                                    className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 mt-4 sm:text-sm/6"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
