import React from 'react'

export default function PersonalInformationComponent() {
  return (
    <div>
        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                Personal Information
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                Use a permanent address where you can receive
                                mail.
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
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                            id="first-name"
                                            name="middle-name"
                                            type="text"
                                            autoComplete="middle-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Suffix
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="suffix"
                                            name="suffix"
                                            autoComplete="suffix-name"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Mother's Maiden Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="maiden-name"
                                            name="maiden-name"
                                            type="text"
                                            autoComplete="maiden-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                            autoComplete="dob"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                            autoComplete="pob"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                            autoComplete="religion"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
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
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
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
                                            autoComplete="civil-status"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                            autoComplete="mobile"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="mobile"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Landline Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="mobile"
                                            name="mobile"
                                            type="text"
                                            autoComplete="mobile"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="contactperson"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Person to notify incase of emergency
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="contactperson"
                                            name="contactperson"
                                            type="text"
                                            autoComplete="contactperson"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="mobile"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Contact Person's mobile number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="contactmobile"
                                            name="contactmobile"
                                            type="text"
                                            autoComplete="contactmobile"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
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
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
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
                            </div>
                        </div>
    </div>
  )
}
