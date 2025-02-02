import React from "react";
import AddVerifierSection from "./add-verifier-section";

export default function VerifierTableSection() {
    const people = [
        {
            lastname: "Soon",
            firstname: "Jose Dary",
            middlename: "Ybalez",
            email: "vhermoso.macapso@gmail.com",
            barangay: "Macapso",
            role: "Barangay Verifier",
            status: "Active",
        },
        {
            lastname: "Cristobal",
            firstname: "Jose Marie Juancho",
            middlename: "Camingao",
            email: "	vhermoso.bagawines@gmail.com",
            barangay: "Bagawines",
            role: "Barangay Verifier",
            status: "Active",
        },
    ];
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">
                        Barangay Verifier Records
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the active Barangay Verifier in the
                        system.
                    </p>
                </div>
                <AddVerifierSection />
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
                                        Fullname
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Barangay
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Email Address
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
                                {people.map((person) => (
                                    <tr key={person.email}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {person.lastname},{" "}
                                            {person.firstname}{" "}
                                            {person.middlename}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {person.barangay}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                                {person.role}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {person.email}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                {person.status}
                                            </span>
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a
                                                href="#"
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Change Status
                                                <span className="sr-only">
                                                    , {person.rsbsa}
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
