import { Children, useState } from 'react'
import {
  Dialog,
  Menu,
  Transition,
} from '@headlessui/react'
import {
  ArchiveBoxIcon,
  Bars3Icon,
  BellIcon,
  CircleStackIcon,
  Cog6ToothIcon,
  DocumentChartBarIcon,
  FolderIcon,
  HomeIcon,
  PresentationChartBarIcon,
  UserCircleIcon,
  UserGroupIcon,
  UsersIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { AdjustmentsHorizontalIcon, ArrowRightEndOnRectangleIcon, ArrowsRightLeftIcon, BarsArrowDownIcon, BuildingOffice2Icon, ChevronDownIcon, ChevronRightIcon, MagnifyingGlassIcon, PhoneArrowUpRightIcon } from '@heroicons/react/20/solid'
import AdminSidenavSection from './_sections/admin-sidenav-sections'

const navigation = [
  { name: 'Dashboard', href: './dashboard', icon: HomeIcon, current: true },
  { 
    name: 'Beneficiary Section', icon: UsersIcon, current: false,
    children: [
      { name: 'Register Beneficiary', href: './register' , icon: ChevronRightIcon },
      { name: 'Active Beneficiary', href: './beneficiary?status=active' , icon: ChevronRightIcon },
      { name: 'Inactive Beneficiary', href: './beneficiary?status=inactive' , icon: ChevronRightIcon },
      { name: 'Most Recent Encoded', href: './recent' , icon: ChevronRightIcon },
    ],
  },
  { 
    name: 'Report Section', icon: PresentationChartBarIcon, current: false,
    children: [
      { name: 'General Report', href: './reports' , icon: ChevronRightIcon },
      { name: 'Batch Printing', href: './printing' , icon: ChevronRightIcon },
    ],
  },
]
const teams = [
  { 
    id: 1, name: 'Account Management', icon: UserGroupIcon, current: false,
    children: [
      { name: 'Accounts List', href: './accounts' , icon: ChevronRightIcon },
      { name: 'Create Account', href: './create-account' , icon: ChevronRightIcon },
    ], 
  },
  { 
    id: 2, name: 'System Maintenance', icon: AdjustmentsHorizontalIcon, current: false,
    children: [
      { name: 'LGU Profile', href: './lgu-profile' , icon: ChevronRightIcon },
      { name: 'Brgy.Verifier', href: './verifier' , icon: ChevronRightIcon },
      { name: 'Organization', href: './organization' , icon: ChevronRightIcon },
    ], 
  },
  { 
    id: 3, name: 'Help Desk', icon: PhoneArrowUpRightIcon, current: false,
    children: [
      { name: 'Download User Manual', href: './manual' , icon: ChevronRightIcon },
      { name: 'Contact Us', href: './contact' , icon: ChevronRightIcon },
    ], 
  },
]
const userNavigation = [
  { name: 'My profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (


    <div>
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
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
                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                </button>
              </div>
            </Transition.Child>
            {/* Sidebar component, swap this element with another sidebar if you like */}

          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <AdminSidenavSection
        navigation={navigation}
        classNames={classNames}
        teams={teams}
      />

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>

          {/* Separator */}
          <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form action="#" method="GET" className="relative flex flex-1">
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
                placeholder="Search..."
                className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              />
            </form>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Separator */}
              <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full bg-gray-50"
                  />
                  <span className="hidden lg:flex lg:items-center">
                    <span aria-hidden="true" className="ml-4 text-sm font-semibold leading-6 text-gray-900">
                      Tom Cook
                    </span>
                    <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
                  </span>
                </Menu.Button>
                <Menu.Items
                  transition
                  className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      <a
                        href={item.href}
                        className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    </Menu.Item>
                  ))}
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

  )
}
