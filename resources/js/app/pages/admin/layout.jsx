import { Children, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    BellIcon,
    HomeIcon,
    PresentationChartBarIcon,
    UserGroupIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { FaCircleDot } from "react-icons/fa6";
import {
    FcAssistant,
    FcButtingIn,
    FcComboChart,
    FcConferenceCall,
    FcDataConfiguration,
    FcHome,
    FcList,
    FcMoneyTransfer,
} from "react-icons/fc";

import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    PhoneArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import AdminSidenavSection from "./_sections/admin-sidenav-sections";
import { Link, router } from "@inertiajs/react";
import store from "@/app/store/store";
import { get_user_thunk } from "@/app/redux/user-thunk";
import { useSelector } from "react-redux";


const navigation = [
    { name: "Dashboard", href: "/administrator/dashboard", icon: FcHome, current: false },
    {
        name: "Beneficiary Section",
        icon: FcConferenceCall,
        current:false,
        children: [
            {
                name: "Register Beneficiary",
                href: "/administrator/beneficiary/register?status=register",
                icon: FcList,
            },
            {
                name: "Active Beneficiary",
                href: "/administrator/beneficiary?page=1&status=active",
                icon: FcList,
            },
            {
                name: "Inactive Beneficiary",
                href: "/administrator/beneficiary?page=1&status=inactive",
                icon: FcList,
            },
            // {
            //     name: "Declined Beneficiary",
            //     href: "/administrator/beneficiary?page=1&status=declined",
            //     icon: FcList,
            // },
        ],
    },
    { 
        name: "Assistance Section",  
        icon: FcMoneyTransfer,
        current: false,
        children: [
            { name: "Cash Assistance Records", href: "/administrator/assistance?status=assistance", icon: FcList },
            { name: "Subsidy Beneficiaries List", href: "/administrator/assistance?status=subsidy", icon: FcList },
        ],
    },
    {
        name: "Request Section",
        icon: FcDataConfiguration,
        current: false,
        children: [
            { name: "Requests List", href: "/administrator/request?status=all", icon: FcList },
        ],
    },
    {
        name: "Report Section",
        icon: FcComboChart,
        current: false,
        children: [
            { name: "General Report", href: "/administrator/reports?status=reports", icon: FcList },
            { name: "Barangay Report", href: "/administrator/reports/brgy?search=Bairan", icon: FcList },
        ],
    },
];
const teams = [
    {
        id: 1,
        name: "Account Management",
        icon: FcButtingIn,
        current: false,
        children: [{ name: "Accounts List", href: "/administrator/accounts/list?role=admin", icon: FcList }],
    },
    {
        id: 2,
        name: "System Maintenance",
        icon: FcDataConfiguration,
        current: false,
        children: [
            { name: "LGU Profile", href: "/administrator/system_maintenance/lgu-profile", icon: FcList },
            // { name: "Brgy.Verifier", href: "/administrator/system_maintenance/verifier?role=verifier", icon: FcList }, // temporary hide
            { name: "Organization", href: "/administrator/system_maintenance/organization", icon: FcList },
        ],
    },
    // {
    //     id: 3,
    //     name: "Help Desk",
    //     icon: FcAssistant,
    //     current: false,
    //     children: [
    //         {
    //             name: "Download User Manual",
    //             href: "/administrator/manual",
    //             icon: FcList,
    //         },
    //         { name: "Contact Us", href: "/administrator/contact", icon: FcList },
    //     ],
    // },
];


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AdminLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expanded, setExpanded] = useState({});
    const {user}=useSelector((store)=>store.app)
    console.log('useruser',user)
    useEffect(() => {
     store.dispatch(get_user_thunk())
    }, [])
    
    const toggleExpand = (name) => {
        setExpanded((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = e.target.search.value;
        if (searchQuery.trim()) {
            router.visit(`/administrator/search?query=${searchQuery}`);
        }
    };

    return (
        <div>
            {/* Static sidebar for desktop */}
            <AdminSidenavSection
                setSidebarOpen={setSidebarOpen}
                navigation={navigation}
                classNames={classNames}
                teams={teams}
                sidebarOpen={sidebarOpen}
            />

            <div className="lg:pl-72">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-gray-100 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 print:hidden">
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>

                    {/* Separator */}
                    <div
                        aria-hidden="true"
                        className="h-6 w-px bg-gray-900/10 lg:hidden"
                    />

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <form
                            onSubmit={handleSearch}
                            className="relative flex flex-1"
                        >
                            <label htmlFor="search-field" className="sr-only">
                                Search
                            </label>
                            <MagnifyingGlassIcon
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                            />
                            <input
                                id="search-field"
                                name="search"
                                type="search"
                                placeholder="Search beneficiary name, RSBSA, or address..."
                                className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 bg-gray-100 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                            />
                        </form>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            {/* <button
                                type="button"
                                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">
                                    View notifications
                                </span>
                                <BellIcon
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                />
                            </button> */}

                            {/* Separator */}
                            {/* <div
                                aria-hidden="true"
                                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                            /> */}

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative">
                                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                                    {/* <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="h-8 w-8 rounded-full bg-gray-50"
                                    /> */}
                                    <span className="hidden lg:flex lg:items-center">
                                        <span
                                            aria-hidden="true"
                                            className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                                        >
                                           {user?.firstname} {user?.middlename} {user?.lastname}
                                        </span>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="ml-2 h-5 w-5 text-gray-400"
                                        />
                                    </span>
                                </Menu.Button>
                                <Menu.Items
                                    transition
                                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    {/* {userNavigation.map((item) => (
                                        <Menu.Item key={item.name}>
                                            <a
                                                href={item.href}
                                                className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        </Menu.Item>
                                    ))} */}
                                    {/* <Menu.Item>
                                        <a
                                            onClick={()=>router.visit(
                                                "/administrator/profile"
                                            )}
                                            className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                                        >
                                          Profile
                                        </a>
                                    </Menu.Item> */}
                                    <Menu.Item>
                                        <Link
                                            method="post"
                                            href={route("logout")}
                                            as="button"
                                            className=" flex w-full px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                                        >
                                            Sign Out
                                        </Link>
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </div>
                    </div>
                </div>

                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </div>
    );
}
