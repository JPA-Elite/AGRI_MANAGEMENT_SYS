import React, { useEffect, useState } from "react";

import { FaFilePen, FaPrint, FaRegFilePdf } from "react-icons/fa6";
import ProfilePersonalInfoSection from "./sections/profile-personal-info-section";
import ProfileAddressInfoSection from "./sections/profile-address-info-section";
import ProfileEducationInfoSection from "./sections/profile-education-info-section";
import ProfileGovernmentInfoSection from "./sections/profile-government-info-section";
import ProfileFarmTypeSection from "./sections/profile-farm-type-section";
import ProfileFarmlandSection from "./sections/profile-farmland-section";
import {
    get_personal_information_by_id_thunk,
    update_personal_information_thunk,
} from "@/app/redux/personal-information-thunk";
import store from "@/app/store/store";
import { useSelector } from "react-redux";
import moment from "moment";
import Swal from "sweetalert2";
import VerifierLayout from "../layout";

export default function ProfilePage() {
    const id = window.location.pathname.split("/")[3];
    const [loading, setLoading] = useState(false);
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    useEffect(() => {
        store.dispatch(get_personal_information_by_id_thunk(id));
    }, []);

    async function update_handler() {
        setLoading(true);
        try {
            await store.dispatch(
                update_personal_information_thunk(personal_information)
            );
            await Swal.fire({
                title: "Success!",
                text: `Updated Successfully.`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <VerifierLayout>
            <div className="overflow-hidden bg-gray-200 shadow-xl sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <div className="overflow-hidden bg-white shadow sm:rounded-sm">
                        <div className="px-2 py-5 sm:p-4">
                            <header>
                                <div className="flex w-full items-center p-4  border-4 border-gray-200">
                                    <div className="flex-none">
                                        <img
                                            src="/images/DOA.png"
                                            alt=""
                                            className="h-28 w-28 ml-12 "
                                        />
                                    </div>
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="flex flex-col items-center justify-center">
                                            <h2 className="text-3xl w-full font-extrabold text-gray-700">
                                                {personal_information?.gender ==
                                                "male"
                                                    ? "Mr."
                                                    : "Ms./Mrs."}
                                                &nbsp;
                                                {
                                                    personal_information
                                                        ?.personal_info
                                                        ?.firstname
                                                }
                                                &nbsp;{" "}
                                                {
                                                    personal_information
                                                        ?.personal_info
                                                        ?.middlename
                                                }
                                                &nbsp;
                                                {
                                                    personal_information
                                                        ?.personal_info
                                                        ?.lastname
                                                }
                                            </h2>
                                            <p className="text-lg font-medium text-gray-700 italic">
                                                {
                                                    personal_information
                                                        ?.personal_info
                                                        ?.register_id
                                                }
                                            </p>
                                            <p className="text-md font-medium text-gray-400 italic">
                                                Registered since{" "}
                                                {moment(
                                                    personal_information
                                                        ?.personal_info
                                                        ?.created_at
                                                ).format("LL")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-none">
                                        <img
                                            src="/images/valle.png"
                                            alt=""
                                            className="h-28 w-28 ml-12 float-right"
                                        />
                                    </div>
                                </div>
                            </header>

                            <main>
                                <div className="p-3">
                                    <span className="isolate inline-flex rounded-md shadow-sm">
                                        <button
                                            type="button"
                                            disabled={loading}
                                            onClick={update_handler}
                                            className="relative inline-flex items-center rounded-l-md bg-white px-6 py-3 text-lg font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-green-200 focus:z-10"
                                        >
                                            <FaFilePen className="size-5 mr-2 text-green-600" />

                                            {loading ? "Loading..." : "Save Profile"}
                                        </button>
                                        {/* <button
                                            type="button"
                                            className="relative -ml-px inline-flex items-center bg-white px-6 py-3 text-lg font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-green-200 focus:z-10"
                                        >
                                            <FaPrint className="size-5 mr-2 text-green-600" />
                                            Print Form
                                        </button> */}
                                        <a
                                            target="_blank"
                                            href={`/administrator/profile/${id}/pdf`}
                                            className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-6 py-3 text-lg font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-green-200 focus:z-10"
                                        >
                                            <FaRegFilePdf className="size-5 mr-2 text-green-600" />
                                            Export to PDF
                                        </a>
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
        </VerifierLayout>
    );
}
