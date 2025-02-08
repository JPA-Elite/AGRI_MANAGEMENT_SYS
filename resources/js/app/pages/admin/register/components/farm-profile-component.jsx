import { useState } from "react";
import FarmActivityComponent from "./farm-activity-component";
import FarmersWorkComponent from "./farmers-work-component";
import FishingActivityComponent from "./fishing-activity-component";
import YouthInvolvementComponent from "./youth-involvement-component";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "@/app/redux/register-slice";
import { setPersonalInformation } from "@/app/redux/personal-information-slice";

function FarmProfileComponent() {
    const [isFarmer, setIsFarmer] = useState(false);
    const [isFarmWorker, setIsFarmWorker] = useState(false);
    const [isFisherfolk, setIsFisherfolk] = useState(false);
    const [isYouth, setIsYouth] = useState(false);
    const { form } = useSelector((store) => store.register);
    const dispatch = useDispatch();
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );

    return (
        <form>
            <div className="flex justify-between gap-y-4 font-medium mt-2">
                <div className="flex justify-items-center">
                    <h2 className="text-lg font-semibold text-gray-800 mr-5">
                        Main Livelihood:
                    </h2>

                    <input
                        type="checkbox"
                        id="farmer"
                        name="main_livelihood"
                        value="Farmer"
                        checked={isFarmer}
                        onClick={(e) => {
                            setIsFarmer(true);
                            setIsFarmWorker(false);
                            setIsFisherfolk(false);
                            setIsYouth(false);
                            dispatch(
                                setPersonalInformation({
                                    ...personal_information,
                                    farm_profile: {
                                        ...personal_information.farm_profile,
                                        farm_activity: [],
                                        [e.target.name]: e.target.value, // Dynamically set the updated field
                                    },
                                })
                            );
                            // dispatch(
                            //     setForm({
                            //         ...form,
                            //         [e.target.name]: e.target.value,
                            //         farm_activity: [],
                            //     })
                            // );
                        }}
                        className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                        htmlFor="farmer"
                        className="ml-2 mr-5 block text-md text-gray-700"
                    >
                        Farmer
                    </label>

                    <input
                        type="checkbox"
                        name="main_livelihood"
                        value="FarmWorker"
                        checked={isFarmWorker}
                        onClick={(e) => {
                            setIsFarmer(false);
                            setIsFarmWorker(true);
                            setIsFisherfolk(false);
                            setIsYouth(false);
                            dispatch(
                                setPersonalInformation({
                                    ...personal_information,
                                    farm_profile: {
                                        ...personal_information.farm_profile,
                                        farm_activity: [],
                                        [e.target.name]: e.target.value, // Dynamically set the updated field
                                    },
                                })
                            );
                        }}
                        className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                        htmlFor="farmworker"
                        className="ml-2 mr-5 block text-md text-gray-700"
                    >
                        Farmworker/Laborer
                    </label>

                    <input
                        type="checkbox"
                        name="main_livelihood"
                        value="Fisherfolk"
                        checked={isFisherfolk}
                        onClick={(e) => {
                            setIsFarmer(false);
                            setIsFarmWorker(false);
                            setIsFisherfolk(true);
                            setIsYouth(false);
                            dispatch(
                                setPersonalInformation({
                                    ...personal_information,
                                    farm_profile: {
                                        ...personal_information.farm_profile,
                                        farm_activity: [],
                                        [e.target.name]: e.target.value, // Dynamically set the updated field
                                    },
                                })
                            );
                        }}
                        className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                        htmlFor="fisherfolk"
                        className="ml-2 mr-5 block text-md text-gray-700"
                    >
                        Fisherfolk
                    </label>

                    <input
                        type="checkbox"
                        name="main_livelihood"
                        value="Agri Youth"
                        checked={isYouth}
                        onClick={(e) => {
                            setIsFarmer(false);
                            setIsFarmWorker(false);
                            setIsFisherfolk(false);
                            setIsYouth(true);
                            dispatch(
                                setPersonalInformation({
                                    ...personal_information,
                                    farm_profile: {
                                        ...personal_information.farm_profile,
                                        farm_activity: [],
                                        [e.target.name]: e.target.value, // Dynamically set the updated field
                                    },
                                })
                            );
                        }}
                        className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                        htmlFor="agri_youth"
                        className="ml-2 mr-5 block text-md text-gray-700"
                    >
                        Agri Youth
                    </label>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                {isFarmer && (
                    <>
                        <FarmActivityComponent />
                    </>
                )}
                {isFarmWorker && (
                    <>
                        <FarmersWorkComponent />
                    </>
                )}
                {isFisherfolk && (
                    <>
                        <FishingActivityComponent />
                    </>
                )}
                {isYouth && (
                    <>
                        <YouthInvolvementComponent />
                    </>
                )}

                <div className="sm:col-span-12 border-t border-gray-900/20">
                    <div className="gap-y-4 font-medium mt-10">
                        <div className="grid grid-cols-12 items-center">
                            <h2 className="col-span-2 text-lg font-semibold text-gray-800">
                                Gross Annual Income Last Year:
                            </h2>

                            <div className="col-span-8 ml-3">
                                <input
                                    name="annual_income"
                                    type="number"
                                    onChange={(e) =>
                                        dispatch(
                                            setPersonalInformation({
                                                ...personal_information,
                                                farm_profile: {
                                                    ...personal_information.farm_profile,
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
        </form>
    );
}

export default FarmProfileComponent;
