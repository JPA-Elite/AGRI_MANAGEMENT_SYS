import { setPersonalInformation } from "@/app/redux/personal-information-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BARANGAYS } from "@/app/constants/general";

export default function ProfileAddressInfoSection() {
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );

    const dispatch = useDispatch();

    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl/7 font-semibold text-gray-900 mt-3">
                <span className="block w-full rounded-full bg-gray-200 px-4 py-2">
                    II. Address Information
                </span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                <div className="col-span-4">
                    <label
                        htmlFor="street_address"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        House No./Lot/Bldg.No./Purok
                    </label>
                    <div className="mt-2">
                        <input
                            id="street_address"
                            name="street_address"
                            type="text"
                            value={
                                personal_information?.personal_info
                                    ?.street_address ?? ""
                            }
                            onChange={(e) =>
                                dispatch(
                                    setPersonalInformation({
                                        ...personal_information,
                                        personal_info: {
                                            ...personal_information.personal_info, // Spread the existing home_address fields
                                            [e.target.name]: e.target.value, // Dynamically set the updated field
                                        },
                                    })
                                )
                            }
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="col-span-4">
                    <label
                        htmlFor="street_address_2"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Street/Sitio/Subdv.
                    </label>
                    <div className="mt-2">
                        <input
                            id="street_address_2"
                            name="street_address_2"

                            value={
                                personal_information?.personal_info
                                    ?.street_address_2 ?? ""
                            }
                            onChange={(e) =>
                                dispatch(
                                    setPersonalInformation({
                                        ...personal_information,
                                        personal_info: {
                                            ...personal_information.personal_info, // Spread the existing home_address fields
                                            [e.target.name]: e.target.value, // Dynamically set the updated field
                                        },
                                    })
                                )
                            }
                            type="text"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="col-span-4">
                    <label
                        htmlFor="barangay"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Barangay
                    </label>
                    <div className="mt-2">
                        <select
                            name="barangay"
                            placeholder="Barangay"
                            value={personal_information?.personal_info?.barangay ?? ""}

                            onChange={(e) =>
                                dispatch(
                                    setPersonalInformation({
                                        ...personal_information,
                                        personal_info: {
                                            ...personal_information.personal_info, // Spread the existing home_address fields
                                            [e.target.name]: e.target.value, // Dynamically set the updated field
                                        },
                                    })
                                )
                            }
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        >
                            <option value="" selected>
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

                <div className="sm:col-span-4 sm:col-start-1">
                    <label
                        htmlFor="city"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Municipality/City
                    </label>
                    <div className="mt-2">
                        <input
                            name="city"
                            type="text"
                            value={personal_information?.personal_info?.city ?? ""}

                            onChange={(e) =>
                                dispatch(
                                    setPersonalInformation({
                                        ...personal_information,
                                        personal_info: {
                                            ...personal_information.personal_info, // Spread the existing home_address fields
                                            [e.target.name]: e.target.value, // Dynamically set the updated field
                                        },
                                    })
                                )
                            }
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label
                        htmlFor="Province"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        State / Province
                    </label>
                    <div className="mt-2">
                        <input
                            id="Province"
                            name="province"
                            type="text"
                            value={personal_information?.personal_info?.province ?? ""}

                            onChange={(e) =>
                                dispatch(
                                    setPersonalInformation({
                                        ...personal_information,
                                        personal_info: {
                                            ...personal_information.personal_info, // Spread the existing home_address fields
                                            [e.target.name]: e.target.value, // Dynamically set the updated field
                                        },
                                    })
                                )
                            }
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label
                        htmlFor="region"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Region
                    </label>
                    <div className="mt-2">
                        <select
                            name="region"
                            value={personal_information?.personal_info?.region ?? ""}

                            onChange={(e) =>
                                dispatch(
                                    setPersonalInformation({
                                        ...personal_information,
                                        personal_info: {
                                            ...personal_information.personal_info, // Spread the existing home_address fields
                                            [e.target.name]: e.target.value, // Dynamically set the updated field
                                        },
                                    })
                                )
                            }
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        >
                            <option value="">-- Select a Region --</option>

                            <optgroup label="Luzon">
                                <option value="ncr">
                                    National Capital Region (NCR)
                                </option>
                                <option value="car">
                                    Cordillera Administrative Region (CAR)
                                </option>
                                <option value="region I">
                                    Ilocos Region (Region I)
                                </option>
                                <option value="region II">
                                    Cagayan Valley (Region II)
                                </option>
                                <option value="region III">
                                    Central Luzon (Region III)
                                </option>
                                <option value="region IV-A">
                                    CALABARZON (Region IV-A)
                                </option>
                                <option value="region IV-B">
                                    MIMAROPA (Region IV-B)
                                </option>
                                <option value="region V">
                                    Bicol Region (Region V)
                                </option>
                            </optgroup>

                            <optgroup label="Visayas">
                                <option value="region VI">
                                    Western Visayas (Region VI)
                                </option>
                                <option selected value="region VII">
                                    Central Visayas (Region VII)
                                </option>
                                <option value="region VIII">
                                    Eastern Visayas (Region VIII)
                                </option>
                            </optgroup>

                            <optgroup label="Mindanao">
                                <option value="region IX">
                                    Zamboanga Peninsula (Region IX)
                                </option>
                                <option value="region X">
                                    Northern Mindanao (Region X)
                                </option>
                                <option value="region XI">
                                    Davao Region (Region XI)
                                </option>
                                <option value="region XII">
                                    SOCCSKSARGEN (Region XII)
                                </option>
                                <option value="region XIII">
                                    Caraga (Region XIII)
                                </option>
                                <option value="barmm">
                                    Bangsamoro Autonomous Region in Muslim
                                    Mindanao (BARMM)
                                </option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
