import React, { useState, useEffect } from "react";
import axios from "axios";
import AddVerifierSection from "./add-verifier-section";

export default function VerifierTableSection() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Fetch the data when the component is mounted
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/verifier");
                setUsers(response.data); // Store the fetched users
            } catch (error) {
                setMessage("Error fetching users.");
                console.error(error);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    const addUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]); // Add the new user to the users list
    };
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
                <AddVerifierSection addUser={addUser}/>
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
                            {users.length === 0 ? (
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
                                ) : (
                                users.map((user) => (
                                    <tr key={user.email}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {user.lastname},{" "}
                                            {user.firstname}{" "}
                                            {user.middlename}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {user.brgy}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {user.email}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a
                                                href="#"
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Change Status
                                                <span className="sr-only">
                                                    , {user.rsbsa}
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
