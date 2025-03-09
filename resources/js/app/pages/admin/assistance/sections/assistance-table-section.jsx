import React, { useState, useEffect } from "react";
import AddAssistanceSection from "./add-assistance-section";

export default function AssistanceTableSection() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">
                        Cash Assistance Records
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the active Assistance Program in the system.
                    </p>
                </div>
                <AddAssistanceSection />
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Assistance Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Sponsorship
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Main Livelihood
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Event Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Event Location
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="relative py-3 pl-3 pr-4 sm:pr-0"
                                    >
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {/* {users?.data?.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500"
                                        >
                                           
                                            <span className="text-green-600 font-medium">
                                            No records available.{" "}
                                            </span>
                                            
                                        </td>
                                    </tr>
                                ) : ( */}
                                {/* users?.data?.map((user) => ( */}
                                <tr key="">
                                    <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                        Agricultural Assistance
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                    Rice Farmer Financial Assistance (RFFA)
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                        <div className="flex flex-col">
                                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset mb-1">
                                                Farmers
                                            </span>
                                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset mb-1">
                                                Farm Owners
                                            </span>
                                        </div>
                                    </td>

                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                        March 30, 2025 - 08:00 AM
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                        La Playa Resort, Brgy. Poblacion
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                                            Upcoming
                                        </span>
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                        <a
                                            href="./assistance-details"
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            View Details
                                        </a>
                                    </td>
                                </tr>
                                {/* ))
                                )} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
