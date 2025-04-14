import React, { useState, useEffect } from "react";
import AddAssistanceSection from "./add-assistance-section";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "@inertiajs/react";
import UpdateAssistanceSection from "./update-assistance-section";
import SubsidySection from "./subsidy-section";

export default function AssistanceTableSection() {
    const { cash_assistances } = useSelector((store) => store.cash_assistance);
    const query = new URLSearchParams(window.location.search);
    const status = query.get("status");

    if (status === "subsidy") {
        return <SubsidySection />;
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">
                        Cash Assistance Records
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the active Assistance Program in the
                        system.
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
                                    {/* <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Status
                                    </th> */}
                                    <th
                                        scope="col"
                                        className="relative py-3 pl-3 pr-4 sm:pr-0"
                                    >
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {cash_assistances?.map((res, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                                {res.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                                {res.sponsor}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                                <div className="flex flex-col">
                                                    {res?.livelihoods?.map(
                                                        (result, ii) => {
                                                            return (
                                                                <span
                                                                    key={ii}
                                                                    className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset mb-1"
                                                                >
                                                                    {
                                                                        result.name
                                                                    }
                                                                </span>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {moment(res.date).format("LLL")}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                {res.location}
                                            </td>
                                            {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                                                    Upcoming
                                                </span>
                                            </td> */}
                                            <td className="flex items-center justify-center gap-3 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                <UpdateAssistanceSection
                                                    data={res}
                                                />
                                                {/* <Link
                                                    href={
                                                        "/administrator/assistance/" +
                                                        res.id
                                                    }
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    View Details
                                                </Link> */}
                                                <Link
                                                    href={"/administrator/assistance/" + res.id}
                                                    className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                                >
                                                    View Details
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}

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
