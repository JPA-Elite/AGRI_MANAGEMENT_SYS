import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { FcServices } from "react-icons/fc";

export default function AdminSidenavSection({
    navigation,
    classNames,
    teams,
    setSidebarOpen,
    sidebarOpen,
}) {
    const [expanded, setExpanded] = useState({}); // To manage expanded state of items with children
    const params = new URLSearchParams(window.location.search);
    const isOpen = window.location.pathname.split("/")[2];
    const isActive = params.get("status");
    const isSystemActive = window.location.pathname.split("/")[3];
    useEffect(() => {
        setExpanded((prev) => ({
            ...prev,
            "Beneficiary Section": isOpen == "beneficiary",
            "Report Section": isOpen == "reports",
            "Account Management": isOpen == "accounts",
            "System Maintenance": isOpen == "system_maintenance",
        }));
    }, []);

    const toggleExpand = (name) => {
        setExpanded((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <>
            <Dialog
                open={sidebarOpen}
                onClose={setSidebarOpen}
                className="relative z-50 lg:hidden"
            >
                <div
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                ></div>

                <div className="fixed inset-0 flex">
                    <Dialog.Panel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <Transition.Child>
                            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                <button
                                    type="button"
                                    onClick={() => setSidebarOpen(false)}
                                    className="-m-2.5 p-2.5"
                                >
                                    <span className="sr-only">
                                        Close sidebar
                                    </span>
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="h-6 w-6 text-white"
                                    />
                                </button>
                            </div>
                        </Transition.Child>
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-100 px-6 pb-4">
                            <div className="flex h-16 shrink-0 items-center">
                                <img
                                    alt="Your Company"
                                    src="/images/DOA.png"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul
                                    role="list"
                                    className="flex flex-1 flex-col gap-y-7"
                                >
                                    <li>
                                        <ul
                                            role="list"
                                            className="-mx-2 space-y-1"
                                        >
                                            {navigation.map((item) => (
                                                <li key={item.name}>
                                                    {item.children ? (
                                                        <>
                                                            <div
                                                                onClick={() =>
                                                                    toggleExpand(
                                                                        item.name
                                                                    )
                                                                }
                                                                className={classNames(
                                                                    "group flex cursor-pointer gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                                                    expanded[
                                                                        item
                                                                            .name
                                                                    ]
                                                                        ? "text-gray-800 bg-white-800"
                                                                        : "text-gray-600 hover:bg-green-600 hover:text-white"
                                                                )}
                                                            >
                                                                <item.icon
                                                                    aria-hidden="true"
                                                                    className="h-6 w-6 shrink-0"
                                                                />
                                                                {item.name}
                                                                <span className="ml-auto">
                                                                    {expanded[
                                                                        item
                                                                            .name
                                                                    ]
                                                                        ? "-"
                                                                        : "+"}
                                                                </span>
                                                            </div>
                                                            {expanded[
                                                                item.name
                                                            ] && (
                                                                <ul className="ml-6 mt-1 space-y-1">
                                                                    {item.children.map(
                                                                        (
                                                                            child
                                                                        ) => (
                                                                            <Link
                                                                                key={
                                                                                    child.name
                                                                                }
                                                                            >
                                                                                <Link
                                                                                    href={
                                                                                        child.href
                                                                                    }
                                                                                    className="flex items-center text-gray-600 hover:text-white hover:bg-green-600 rounded-md px-2 py-1 text-sm font-semibold leading-6"
                                                                                >
                                                                                    <child.icon
                                                                                        aria-hidden="true"
                                                                                        className="h-3 w-3 shrink-0 mr-2"
                                                                                    />
                                                                                    {
                                                                                        child.name
                                                                                    }
                                                                                </Link>
                                                                            </Link>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <Link
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? "bg-white-800 text-gray-800"
                                                                    : "text-gray-600 hover:bg-green-600 hover:text-white",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                                            )}
                                                        >
                                                            <item.icon
                                                                aria-hidden="true"
                                                                className="h-6 w-6 shrink-0"
                                                            />
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="text-xs/6 font-semibold text-gray-600">
                                            Your teams
                                        </div>
                                        <ul
                                            role="list"
                                            className="-mx-2 mt-2 space-y-1"
                                        >
                                            {teams.map((team) => (
                                                <li key={team.name}>
                                                    <Link
                                                        href={team.href}
                                                        className={classNames(
                                                            team.current
                                                                ? "bg-green-700 text-white"
                                                                : "text-gray-600 hover:bg-green-700 hover:text-white",
                                                            "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                                                        )}
                                                    >
                                                        <team.icon
                                                            aria-hidden="true"
                                                            className="h-6 w-6 shrink-0"
                                                        />
                                                        <span className="truncate">
                                                            {team.name}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="mt-auto">
                                        <Link
                                            href="#"
                                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-600 hover:bg-green-700 hover:text-white"
                                        >
                                            <Cog6ToothIcon
                                                aria-hidden="true"
                                                className="size-6 shrink-0 text-gray-600 group-hover:text-white"
                                            />
                                            Settings
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r border-gray-300">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-100 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center justify-center mt-2">
                        <img
                            alt="Your Company"
                            src="/images/DOA.png"
                            className="h-16 w-auto"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                        >
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            {item.children ? (
                                                <>
                                                    <div
                                                        onClick={() =>
                                                            toggleExpand(
                                                                item.name
                                                            )
                                                        }
                                                        className={classNames(
                                                            "group flex cursor-pointer gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                                            expanded[item.name]
                                                                ? "text-gray-800 bg-white-800"
                                                                : ` text-gray-600 hover:bg-green-600 hover:text-white `
                                                        )}
                                                    >
                                                        <item.icon
                                                            aria-hidden="true"
                                                            className="h-6 w-6 shrink-0"
                                                        />
                                                        {item.name}
                                                        <span className="ml-auto">
                                                            {expanded[item.name]
                                                                ? "-"
                                                                : "+"}
                                                        </span>
                                                    </div>
                                                    {expanded[item.name] && (
                                                        <ul className="ml-6 mt-1 space-y-1">
                                                            {item.children.map(
                                                                (child) => {
                                                                    const path =
                                                                        child.href;
                                                                    return (
                                                                        <Link
                                                                            key={
                                                                                child.name
                                                                            }
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    child.href
                                                                                }
                                                                                className={`
                                                                            ${
                                                                                path.split(
                                                                                    "="
                                                                                )[1] ==
                                                                                isActive
                                                                                    ? "bg-green-600 text-white"
                                                                                    : ""
                                                                            }
                                                                            flex items-center text-gray-600 hover:text-white hover:bg-green-600 rounded-md px-2 py-1 text-sm font-semibold leading-6`}
                                                                            >
                                                                                <child.icon
                                                                                    aria-hidden="true"
                                                                                    className="h-3 w-3 shrink-0 mr-2"
                                                                                />
                                                                                {
                                                                                    child.name
                                                                                }
                                                                            </Link>
                                                                        </Link>
                                                                    );
                                                                }
                                                            )}
                                                        </ul>
                                                    )}
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-white-800 text-gray-800"
                                                            : "text-gray-600 hover:bg-green-600 hover:text-white",
                                                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                                    )}
                                                >
                                                    <item.icon
                                                        aria-hidden="true"
                                                        className="h-6 w-6 shrink-0"
                                                    />
                                                    {item.name}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div className="text-xs font-semibold leading-6 text-gray-600">
                                    My Team
                                </div>
                                <ul
                                    role="list"
                                    className="-mx-2 mt-2 space-y-1"
                                >
                                    {teams.map((teams) => (
                                        <li key={teams.name}>
                                            {teams.children ? (
                                                <>
                                                    <div
                                                        onClick={() =>
                                                            toggleExpand(
                                                                teams.name
                                                            )
                                                        }
                                                        className={classNames(
                                                            "group flex cursor-pointer gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                                            expanded[teams.name]
                                                                ? "text-gray-800 bg-white-800"
                                                                : "text-gray-600 hover:bg-green-600 hover:text-white"
                                                        )}
                                                    >
                                                        <teams.icon
                                                            aria-hidden="true"
                                                            className="h-6 w-6 shrink-0"
                                                        />
                                                        {teams.name}
                                                        <span className="ml-auto">
                                                            {expanded[
                                                                teams.name
                                                            ]
                                                                ? "-"
                                                                : "+"}
                                                        </span>
                                                    </div>
                                                    {expanded[teams.name] && (
                                                        <ul className="ml-6 mt-1 space-y-1">
                                                            {teams.children.map(
                                                                (child) => {
                                                                    const path =
                                                                        child.href;
                                                                    return (
                                                                        <Link
                                                                            key={
                                                                                child.name
                                                                            }
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    child.href
                                                                                }
                                                                                className={`
                                                                            ${
                                                                                path
                                                                                    .split(
                                                                                        "/"
                                                                                    )[3]
                                                                                    ?.split(
                                                                                        "?"
                                                                                    )[0] ==
                                                                                isSystemActive
                                                                                    ? "bg-green-600 text-white"
                                                                                    : ""
                                                                            }
                                                                            flex items-center text-gray-600 hover:text-white hover:bg-green-600 rounded-md px-2 py-1 text-sm font-semibold leading-6`}
                                                                            >
                                                                                <child.icon
                                                                                    aria-hidden="true"
                                                                                    className="h-3 w-3 shrink-0 mr-2"
                                                                                />
                                                                                {
                                                                                    child.name
                                                                                }
                                                                            </Link>
                                                                        </Link>
                                                                    );
                                                                }
                                                            )}
                                                        </ul>
                                                    )}
                                                </>
                                            ) : (
                                                <link
                                                    href={teams.href}
                                                    className={classNames(
                                                        teams.current
                                                            ? "bg-white-800 text-gray-800"
                                                            : "text-gray-600 hover:bg-green-600 hover:text-white",
                                                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                                    )}
                                                >
                                                    <teams.icon
                                                        aria-hidden="true"
                                                        className="h-6 w-6 shrink-0"
                                                    />
                                                    {teams.name}
                                                </link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="mt-auto">
                                <Link
                                    href="./settings"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-600 hover:bg-green-600 hover:text-white"
                                >
                                    <FcServices
                                        aria-hidden="true"
                                        className="h-6 w-6 shrink-0"
                                    />
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
