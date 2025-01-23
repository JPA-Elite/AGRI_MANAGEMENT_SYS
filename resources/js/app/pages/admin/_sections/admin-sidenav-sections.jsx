import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function AdminSidenavSection({ navigation, classNames, teams }) {
    const [expanded, setExpanded] = useState({}); // To manage expanded state of items with children

    const toggleExpand = (name) => {
        setExpanded((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <div>
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r border-gray-300">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
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
                                                                : "text-gray-400 hover:bg-green-700 hover:text-white"
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
                                                                (child) => (
                                                                    <li
                                                                        key={
                                                                            child.name
                                                                        }
                                                                    >
                                                                        <a
                                                                            href={
                                                                                child.href
                                                                            }
                                                                            className="flex items-center text-gray-400 hover:text-white hover:bg-green-600 rounded-md px-2 py-1 text-sm font-semibold leading-6"
                                                                        >
                                                                            <child.icon
                                                                                aria-hidden="true"
                                                                                className="h-3 w-3 shrink-0 mr-2"
                                                                            />
                                                                            {
                                                                                child.name
                                                                            }
                                                                        </a>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    )}
                                                </>
                                            ) : (
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-white-800 text-gray-800"
                                                            : "text-gray-400 hover:bg-green-700 hover:text-white",
                                                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                                    )}
                                                >
                                                    <item.icon
                                                        aria-hidden="true"
                                                        className="h-6 w-6 shrink-0"
                                                    />
                                                    {item.name}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div className="text-xs font-semibold leading-6 text-gray-400">
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
                                                                : "text-gray-400 hover:bg-green-700 hover:text-white"
                                                        )}
                                                    >
                                                        <teams.icon
                                                            aria-hidden="true"
                                                            className="h-6 w-6 shrink-0"
                                                        />
                                                        {teams.name}
                                                        <span className="ml-auto">
                                                            {expanded[teams.name]
                                                                ? "-"
                                                                : "+"}
                                                        </span>
                                                    </div>
                                                    {expanded[teams.name] && (
                                                        <ul className="ml-6 mt-1 space-y-1">
                                                            {teams.children.map(
                                                                (child) => (
                                                                    <li
                                                                        key={
                                                                            child.name
                                                                        }
                                                                    >
                                                                        <a
                                                                            href={
                                                                                child.href
                                                                            }
                                                                            className="flex items-center text-gray-400 hover:text-white hover:bg-green-700 rounded-md px-2 py-1 text-sm font-semibold leading-6"
                                                                        >
                                                                            <child.icon
                                                                                aria-hidden="true"
                                                                                className="h-3 w-3 shrink-0 mr-2"
                                                                            />
                                                                            {
                                                                                child.name
                                                                            }
                                                                        </a>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    )}
                                                </>
                                            ) : (
                                                <a
                                                    href={teams.href}
                                                    className={classNames(
                                                        teams.current
                                                            ? "bg-white-800 text-gray-800"
                                                            : "text-gray-400 hover:bg-green-700 hover:text-white",
                                                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                                    )}
                                                >
                                                    <teams.icon
                                                        aria-hidden="true"
                                                        className="h-6 w-6 shrink-0"
                                                    />
                                                    {teams.name}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="mt-auto">
                                <a
                                    href="./settings"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-green-700 hover:text-white"
                                >
                                    <Cog6ToothIcon
                                        aria-hidden="true"
                                        className="h-6 w-6 shrink-0"
                                    />
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
