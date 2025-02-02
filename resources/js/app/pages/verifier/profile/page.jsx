import React from "react";
import { FaFilePen, FaPrint, FaRegFilePdf, FaUserCheck, FaUserXmark } from "react-icons/fa6";
import ProfilePersonalInfoSection from "./sections/profile-personal-info-section";
import ProfileAddressInfoSection from "./sections/profile-address-info-section";
import ProfileEducationInfoSection from "./sections/profile-education-info-section";
import ProfileGovernmentInfoSection from "./sections/profile-government-info-section";
import ProfileFarmTypeSection from "./sections/profile-farm-type-section";
import ProfileFarmlandSection from "./sections/profile-farmland-section";
import VerifierLayout from "../layout";

export default function ProfilePage() {
    return (
        <VerifierLayout>
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
                                            Mr. JOSE MARIE JUANCHO CAMINGAO
                                            CRISTOBAL
                                        </h2>
                                        <p className="text-lg font-medium text-gray-700 italic">
                                            2023-074624000-00659
                                        </p>
                                        <p className="text-md font-medium text-gray-400 italic">
                                            Registered since December 12, 2023
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
                                            <FaUserCheck className="size-5 mr-2 text-green-600" />
                                            Verify Registration
                                        </button>
                                       
                                        <button
                                            type="button"
                                            className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-6 py-3 text-lg font-semibold text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-red-200 focus:z-10"
                                        >
                                            <FaUserXmark className="size-5 mr-2 text-red-600" />
                                            Decline Registration
                                        </button>
                                    </span>
                                </div>
                                <hr />
                                <ProfilePersonalInfoSection />
                                <ProfileAddressInfoSection/>
                                <ProfileEducationInfoSection/>
                                <ProfileGovernmentInfoSection/>
                                <ProfileFarmTypeSection/>
                                <ProfileFarmlandSection/>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </VerifierLayout>
    );
}
