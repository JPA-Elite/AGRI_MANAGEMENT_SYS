import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
    DocumentMagnifyingGlassIcon,
    FunnelIcon,
    XCircleIcon,
} from "@heroicons/react/24/outline";
import { BARANGAYS } from "@/app/constants/general";

export default function FilterSearchComponent() {
    const callsToAction = [
        {
            name: "Search",
            href: "#",
            icon: DocumentMagnifyingGlassIcon,
            class: "flex items-center gap-x-2.5 p-3 px-6 text-sm/6 font-semibold text-gray-900 hover:bg-green-500 hover:text-white sm:justify-center sm:px-0",
        },
        {
            name: "Cancel",
            href: "#",
            icon: XCircleIcon,
            class: "flex items-center gap-x-2.5 p-3 px-6 text-sm/6 font-semibold text-gray-900 hover:bg-gray-300/50 sm:justify-center sm:px-0",
        },
    ];
    return (
        <Popover className="relative isolate z-50 shadow">
            <div className="bg-white py-5">
                <div className="text-right px-6 lg:px-8">
                    <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                        <FunnelIcon className="size-4" />
                        Filter Search
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="size-5"
                        />
                    </PopoverButton>
                </div>
            </div>

            <PopoverPanel
                transition
                className="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div>
                    <div className="px-6 py-8">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="sm:col-span-3">
                                <input
                                    id="rsbsa_id"
                                    name="rsbsa_id"
                                    type="text"
                                    placeholder="RSBSA Number"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>

                            <div className="sm:col-span-3">
                                <input
                                    id="reg_id"
                                    name="reg_id"
                                    type="text"
                                    placeholder="Registration Number"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>

                            <div className="sm:col-span-3">
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    placeholder="Lastname"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>

                            <div className="sm:col-span-3">
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    placeholder="Firstname"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                />
                            </div>

                            <div className="sm:col-span-3">
                                <select
                                    id="barangay"
                                    name="barangay"
                                    placeholder="Barangay"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                                >
                                    <option value="" disabled selected>
                                        -- Select a Barangay --
                                    </option>
                                    {BARANGAYS.map((barangay) => (
                                        <option key={barangay} value={barangay}>
                                            {barangay}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50">
                    <div className="mx-auto max-w-full sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
                            {callsToAction.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={item.class}
                                >
                                    <item.icon
                                        aria-hidden="true"
                                        className="size-5 flex-none text-gray-300"
                                    />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </Popover>
    );
}
