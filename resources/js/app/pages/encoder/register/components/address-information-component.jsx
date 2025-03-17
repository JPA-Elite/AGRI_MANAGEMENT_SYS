import { setPersonalInformation } from "@/app/redux/personal-information-slice";
import { setForm } from "@/app/redux/register-slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    regions,
    provinces,
    cities,
    barangays,
    regionByCode,
    provincesByCode,
    provinceByName,
} from "select-philippines-address";

export default function AddressInformationComponent() {
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );
    const [address, setAddress] = useState({});
    const [form, setForm] = useState({
        city: "",
        province: "",
        region: null,
    });


    useEffect(() => {
        setForm((prevForm) => ({
            ...prevForm,
        }));
    }, []);

    useEffect(() => {
        regions().then((region) =>
            setAddress((prevAddress) => ({
                ...prevAddress,
                region,
            }))
        );
    }, []); // Correctly fetching regions only once

    useEffect(() => {
        if (form?.region_code) {
            provinces(form?.region_code).then((province) =>
                setAddress((prevAddress) => ({
                    ...prevAddress,
                    province,
                }))
            );
        }
    }, [form?.region_code]); // Removed unnecessary default value

    useEffect(() => {
        if (form?.province_code) {
            cities(form?.province_code).then((cities) =>
                setAddress((prevAddress) => ({
                    ...prevAddress,
                    cities,
                }))
            );
        }
    }, [form?.province_code]); // Removed unnecessary default value

    useEffect(() => {
        if (form?.city_code) {
            barangays(form?.city_code).then((barangay) =>
                setAddress((prevAddress) => ({
                    ...prevAddress,
                    barangay,
                }))
            );
        }
    }, [form?.city_code]); // Removed unnecessary default value

    const { user } = useSelector((store) => store.app);

    useEffect(() => {
        dispatch(
            setPersonalInformation({
                ...personal_information,
                address_info: {
                    ...personal_information.address_info, // Spread the existing home_address fields
                    city: user?.profile?.city ?? "",
                    province: user?.profile?.province ?? "",
                    region: user?.profile?.region ?? "",
                },
            })
        );
    }, [user?.id ?? ""]);

    const dispatch = useDispatch();
    return (
        <div>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                    Home Address
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                    Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                    <div className="col-span-4">
                        <label
                            htmlFor="region"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Region
                        </label>

                        <select
                            name="region"
                            value={
                                personal_information?.address_info?.region ?? ""
                            }
                            onChange={(e) => {
                                const selectedOption =
                                    e.target.options[e.target.selectedIndex];
                                setForm({
                                    ...form,
                                    [e.target.name]: e.target.value,
                                    region_code: selectedOption.dataset.code, // Correct way to get custom attributes
                                });
                                dispatch(
                                    setPersonalInformation({
                                        ...personal_information,
                                        address_info: {
                                            ...personal_information.address_info, // Spread the existing home_address fields
                                            [e.target.name]: e.target.value, // Dynamically set the updated field
                                        },
                                    })
                                );
                            }}
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        >
                            <option value="" disabled selected>
                                -- Select a Region --
                            </option>

                            {address?.region?.map((res, i) => {
                                return (
                                    <option
                                        key={i}
                                        data-code={res.region_code}
                                        value={res.region_name}
                                    >
                                        {res.region_name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="col-span-4">
                        <label
                            htmlFor="province"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Province
                        </label>

                        <select
                            id="province"
                            name="province"
                            value={
                                personal_information?.address_info?.province ??
                                ""
                            }
                            onChange={(e) => {
                                const selectedOption =
                                    e.target.options[e.target.selectedIndex];
                                setForm({
                                    ...form,
                                    province: selectedOption.value, // Province name
                                    province_code: selectedOption.dataset.code, // Province code
                                });
                                dispatch(
                                    setPersonalInformation({
                                        ...personal_information,
                                        address_info: {
                                            ...personal_information.address_info, // Spread the existing home_address fields
                                            [e.target.name]: e.target.value, // Dynamically set the updated field
                                        },
                                    })
                                );
                            }}
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        >
                            <option value="" selected disabled>
                                -- Select a Province --
                            </option>

                            {address?.province?.map((res, i) => (
                                <option
                                    key={i}
                                    value={res.province_name}
                                    data-code={res.province_code}
                                >
                                    {res.province_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-span-4">
                        {/* <label
                            htmlFor="barangay"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Barangay
                        </label>
                        <div >
                            <select
                                id="barangay"
                                name="barangay"
                                placeholder="Barangay"
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            address_info: {
                                                ...personal_information.address_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            >
                                <option value="" disabled selected>
                                    -- Select a Barangay --
                                </option>
                                <option value="Bairan">Bairan</option>
                                <option value="Bagawines">Bagawines</option>
                                <option value="Cabulihan">Cabulihan</option>
                                <option value="Don Esperidion Villegas">
                                    Don Esperidion Villegas
                                </option>
                                <option value="Guba">Guba</option>
                                <option value="Macapso">Macapso</option>
                                <option value="Maglahos">Maglahos</option>
                                <option value="Malangsa">Malangsa</option>
                                <option value="Molobolo">Molobolo</option>
                                <option value="Pinocawan">Pinocawan</option>
                                <option value="Poblacion">Poblacion</option>
                                <option value="Puan">Puan</option>
                                <option value="Tabon">Tabon</option>
                                <option value="Tagbino">Tagbino</option>
                                <option value="Ulay">Ulay</option>
                            </select>
                        </div> */}
                        <label
                            htmlFor="city"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            City/Municipality
                        </label>

                        <select
                            id="city"
                            name="city"
                            value={
                                personal_information?.address_info?.city ?? ""
                            }
                            onChange={(e) => {
                                const selectedOption =
                                    e.target.options[e.target.selectedIndex];
                                setForm({
                                    ...form,
                                    city: selectedOption.value, // City name
                                    city_code: selectedOption.dataset.code, // City code
                                });

                                dispatch(
                                    setPersonalInformation({
                                        ...personal_information,
                                        address_info: {
                                            ...personal_information.address_info, // Spread the existing home_address fields
                                            [e.target.name]: e.target.value, // Dynamically set the updated field
                                        },
                                    })
                                );
                            }}
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        >
                            <option value="" selected disabled>
                                -- Select a City --
                            </option>

                            {address?.cities?.map((res, i) => (
                                <option
                                    key={i}
                                    value={res.city_name}
                                    data-code={res.city_code}
                                >
                                    {res.city_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="sm:col-span-4 sm:col-start-1">
                        <label className="block text-sm/6 font-medium text-gray-900">
                            Barangay
                        </label>
                        <select
                            id="barangay"
                            name="barangay"
                            value={
                                personal_information?.address_info?.barangay ??
                                ""
                            }
                            onChange={(e) => {
                                const selectedOption =
                                    e.target.options[e.target.selectedIndex];
                                setForm({
                                    ...form,
                                    barangay: selectedOption.value, // Barangay name
                                    brgy_code: selectedOption.dataset.code, // Barangay code
                                });
                                dispatch(
                                    setPersonalInformation({
                                        ...personal_information,
                                        address_info: {
                                            ...personal_information.address_info, // Spread the existing home_address fields
                                            [e.target.name]: e.target.value, // Dynamically set the updated field
                                        },
                                    })
                                );
                            }}
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        >
                            <option value="" selected disabled>
                                -- Select a Barangay --
                            </option>

                            {address?.barangay?.map((res, i) => (
                                <option
                                    key={i}
                                    value={res.brgy_name}
                                    data-code={res.brgy_code}
                                >
                                    {res.brgy_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="street_address_2"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Street/Sitio/Subdv.
                        </label>
                        <div>
                            <input
                                id="street_address_2"
                                name="street_address_2"
                                type="text"
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            address_info: {
                                                ...personal_information.address_info, // Spread the existing home_address fields
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
                            htmlFor="street_address"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            House No./Lot/Bldg.No./Purok
                        </label>
                        <div>
                            <input
                                id="street_address"
                                name="street_address"
                                type="text"
                                onChange={(e) =>
                                    dispatch(
                                        setPersonalInformation({
                                            ...personal_information,
                                            address_info: {
                                                ...personal_information.address_info, // Spread the existing home_address fields
                                                [e.target.name]: e.target.value, // Dynamically set the updated field
                                            },
                                        })
                                    )
                                }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
