import React from 'react';

export default function ActiveAgriworkerComponent() {
    const people = [
        {
            register: "2023-074624000-00663",
            register_date: "July 24, 2023",
            lastname: "Soon",
            firstname: "Jose Dary",
            middlename: "Ybalez",
            livelihood: "Fisherfolk",
            kind: "Fishing Capture",
            organization: "Macapso Anglers Association",
            gender: "Male",
            civil: "Married",
            status: "Active",
            brgy: "Macapso",
        },
        {
            register: "2023-074624000-00659",
            register_date: "December 24, 2023",
            lastname: "Cristobal",
            firstname: "Jose Marie Juancho",
            middlename: "Camingao",
            livelihood: "Fisherfolk",
            kind: "Fishing Capture",
            organization: "Macapso Anglers Association",
            gender: "Male",
            civil: "Single",
            status: "Active",
            brgy: "Macapso",
        },
    ];

    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">
                        Active Agri-Workers
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the active beneficiaries in the system
                        including their RSBA number, registration no.,
                        fullname, association, and livelihood.
                    </p>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 print:overflow-visible">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full border-collapse divide-y divide-gray-300 print:w-full print:break-inside-avoid print:table-layout-fixed">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 print:whitespace-normal"
                                    >
                                        Register No.
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 print:whitespace-normal"
                                    >
                                        Registration Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 print:whitespace-normal"
                                    >
                                        Fullname
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 print:whitespace-normal"
                                    >
                                        Gender
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 print:whitespace-normal"
                                    >
                                        Civil Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 print:whitespace-normal"
                                    >
                                        Livelihood/Organization
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 print:whitespace-normal"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 print:whitespace-normal"
                                    >
                                        Barangay
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person, index) => (
                                    <tr
                                        key={index}
                                        className="print:break-inside-avoid print:page-break-after-always"
                                    >
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 print:whitespace-normal">
                                            {person.register}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 print:whitespace-normal">
                                            {person.register_date}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900 print:whitespace-normal">
                                            {person.lastname}, {person.firstname} {person.middlename}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900 print:whitespace-normal">
                                            {person.gender}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900 print:whitespace-normal">
                                            {person.civil}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 print:whitespace-normal">
                                            {person.livelihood} - {person.kind}
                                            <p className="text-gray-500 italic print:text-black">
                                                {person.organization}
                                            </p>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 print:whitespace-normal">
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 print:bg-transparent">
                                                {person.status}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900 print:whitespace-normal">
                                            {person.brgy}
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
