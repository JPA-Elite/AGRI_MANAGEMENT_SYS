import React from "react";

export default function ProfilePersonalInfoSection() {
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
                                disabled
                                id="dob"
                                name="dob"
                                type="text"
                                value="January 28, 1998"
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
                                disabled
                                id="pob"
                                name="pob"
                                type="text"
                                value="Macapso, Vallehermoso"
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
                                disabled
                                id="religion"
                                name="religion"
                                type="text"
                                value="Roman Catholic"
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
                                    disabled
                                    checked
                                    name="gender"
                                    type="radio"
                                    value="MALE"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-green-500 checked:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                                <label
                                    htmlFor="gender"
                                    className="block text-sm/6 font-medium text-gray-900 pr-10"
                                >
                                    MALE
                                </label>

                                <input
                                    disabled
                                    name="gender"
                                    type="radio"
                                    value="FEMALE"
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
                                disabled
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            >
                                <option></option>
                                <option selected>Single</option>
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
                                disabled
                                id="mobile"
                                name="mobile"
                                type="text"
                                value="+639876543210"
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
                                disabled
                                id="telephone"
                                name="telephone"
                                type="text"
                                value="N/A"
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
                                disabled
                                id="contact_person"
                                name="contact_person"
                                type="text"
                                value="Sample Contact Person"
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
                                disabled
                                id="contact_mobile"
                                name="contact_mobile"
                                type="text"
                                value="+639876543210"
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
                                    disabled
                                    checked
                                    id="householdhead"
                                    name="householdhead"
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
                                    disabled
                                    id="householdhead"
                                    name="householdhead"
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
                            disabled
                            name="household_members"
                            type="number"
                            value="4"
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
                            disabled
                            name="male_members"
                            type="number"
                            value="2"
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
                            disabled
                            name="female_members"
                            type="number"
                            value="2"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
