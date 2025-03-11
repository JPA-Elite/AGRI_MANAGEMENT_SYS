import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm";

export default function SettingsScreenSection({
    auth,
    mustVerifyEmail,
    status,
}) {
    return (
        <div>
            <main>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
                {/* <div className="divide-y divide-gray-500/30">
                    <div className="grid max-w-full grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-12">
                        <div>
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                Personal Information
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-400">
                                Use a permanent address where you can receive
                                mail.
                            </p>
                        </div>

                        <form className="md:col-span-2">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                                <div className="col-span-full flex items-center gap-x-8">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="size-24 flex-none rounded-lg bg-gray-800 object-cover"
                                    />
                                    <div>
                                        <button
                                            type="button"
                                            className="rounded-md bg-gray-400/20 px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm hover:bg-gray-500/20 hover:text-gray-900"
                                        >
                                            Change avatar
                                        </button>
                                        <p className="mt-2 text-xs/5 text-gray-400">
                                            JPG, GIF or PNG. 1MB max.
                                        </p>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm/6 font-medium text-gray-500"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-medium text-gray-500"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm/6 font-medium text-gray-500"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex">
                                <button
                                    type="submit"
                                    className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="grid max-w-full grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                        <div>
                            <h2 className="text-base/7 font-semibold text-gray-500">
                                Change password
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-400">
                                Update your password associated with your
                                account.
                            </p>
                        </div>

                        <form className="md:col-span-2">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                                <div className="col-span-full">
                                    <label
                                        htmlFor="current-password"
                                        className="block text-sm/6 font-medium text-gray-500"
                                    >
                                        Current password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="current-password"
                                            name="current_password"
                                            type="password"
                                            autoComplete="current-password"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="new-password"
                                        className="block text-sm/6 font-medium text-gray-500"
                                    >
                                        New password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="new-password"
                                            name="new_password"
                                            type="password"
                                            autoComplete="new-password"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="confirm-password"
                                        className="block text-sm/6 font-medium text-gray-500"
                                    >
                                        Confirm password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="confirm-password"
                                            name="confirm_password"
                                            type="password"
                                            autoComplete="new-password"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex">
                                <button
                                    type="submit"
                                    className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div> */}
            </main>
        </div>
    );
}
