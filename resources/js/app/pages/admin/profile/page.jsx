import React, { useEffect } from "react";
import AdminLayout from "../layout";
import { FaFilePen, FaPrint, FaRegFilePdf } from "react-icons/fa6";
import ProfilePersonalInfoSection from "./sections/profile-personal-info-section";
import ProfileAddressInfoSection from "./sections/profile-address-info-section";
import ProfileEducationInfoSection from "./sections/profile-education-info-section";
import ProfileGovernmentInfoSection from "./sections/profile-government-info-section";
import ProfileFarmTypeSection from "./sections/profile-farm-type-section";
import ProfileFarmlandSection from "./sections/profile-farmland-section";
import { get_personal_information_by_id_thunk } from "@/app/redux/personal-information-thunk";
import store from "@/app/store/store";
import { useSelector } from "react-redux";
import moment from "moment";

export default function ProfilePage() {
    const id = window.location.pathname.split("/")[3];
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    useEffect(() => {
        store.dispatch(get_personal_information_by_id_thunk(id));
    }, []);
console.log('personal_information',personal_information)
    return (
        <AdminLayout>
            <div className="overflow-hidden bg-gray-200 shadow-xl sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <div className="overflow-hidden bg-white shadow sm:rounded-sm">
                        <div className="px-2 py-5 sm:p-4">
                            <header>
                                <div className="grid grid-cols-1 gap-x-10 gap-y-8 p-4 sm:grid-cols-12 items-center border-4 border-gray-200">
                                    <div className="sm:col-span-4">
                                        <img
                                            src="/images/doa.png"
                                            alt=""
                                            className="h-28 w-28 ml-12 float-right"
                                        />
                                    </div>
                                    <div className="sm:col-span-8">
                                        <h2 className="text-3xl font-extrabold text-gray-700">
                                            {personal_information == "male"
                                                ? "Mr."
                                                : "Ms./Mrs."}
                                            &nbsp;
                                            {personal_information.firstname}
                                            &nbsp;{" "}
                                            {personal_information.middlename}
                                            &nbsp;
                                            {personal_information.lastname}
                                        </h2>
                                        <p className="text-lg font-medium text-gray-700 italic">
                                            {personal_information.register_id}
                                        </p>
                                        <p className="text-md font-medium text-gray-400 italic">
                                            Registered since {moment(personal_information.created_at).format('LL')}
                                        </p>
                                    </div>
                                </div>
                            </header>

                            <main>
                                <div className="p-3">
                                    <span className="isolate inline-flex rounded-md shadow-sm">
                                        <button
                                            type="button"
                                            className="relative inline-flex items-center rounded-l-md bg-white px-6 py-3 text-lg font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-green-200 focus:z-10"
                                        >
                                            <FaFilePen className="size-5 mr-2 text-green-600" />
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="relative -ml-px inline-flex items-center bg-white px-6 py-3 text-lg font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-green-200 focus:z-10"
                                        >
                                            <FaPrint className="size-5 mr-2 text-green-600" />
                                            Print Form
                                        </button>
                                        <button
                                            type="button"
                                            className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-6 py-3 text-lg font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-green-200 focus:z-10"
                                        >
                                            <FaRegFilePdf className="size-5 mr-2 text-green-600" />
                                            Export to PDF
                                        </button>
                                    </span>
                                </div>
                                <hr />
                                <ProfilePersonalInfoSection />
                                <ProfileAddressInfoSection />
                                <ProfileEducationInfoSection />
                                <ProfileGovernmentInfoSection />
                                <ProfileFarmTypeSection />
                                <ProfileFarmlandSection />
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
