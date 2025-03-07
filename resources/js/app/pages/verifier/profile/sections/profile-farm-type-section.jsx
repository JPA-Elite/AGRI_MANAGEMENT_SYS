import React from "react";
import { useSelector } from "react-redux";

export default function ProfileFarmTypeSection() {
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    return (
        <div className="border-t border-gray-300 mt-6">
            <h2 className="text-xl/7 font-semibold text-gray-900 mt-3">
                <span className="block w-full rounded-full bg-gray-200 px-4 py-2">
                    V. Farm Profile
                </span>
            </h2>
            {personal_information?.farm_profiles?.map((res, i) => {
                return (
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="male_members"
                                className="block text-sm/6 font-medium text-gray-900 pr-10"
                            >
                                Main Livelihood
                            </label>
                            <input
                                disabled
                                name="male_members"
                                type="text"
                                value={res?.main_livelihood??''}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>

                        <div className="sm:col-span-4">
                            <label
                                htmlFor="female_members"
                                className="block text-sm/6 font-medium text-gray-900 pr-10"
                            >
                                Type/Kind of Activity/Work
                            </label>
                            <input
                                disabled
                                name="female_members"
                                type="text"
                                value={res?.farm_activity??''}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="female_members"
                                className="block text-sm/6 font-medium text-gray-900 pr-10"
                            >
                                Household Monthly Income
                            </label>
                            <input
                                disabled
                                name="female_members"
                                type="text"
                                value={personal_information?.household?.annual_income??0}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
