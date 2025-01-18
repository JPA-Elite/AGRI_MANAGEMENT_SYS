import { useState } from "react";
import FarmActivityComponent from "./farm-activity-component";
import FarmersWorkComponent from "./farmers-work-component";
import FishingActivityComponent from "./fishing-activity-component";
import YouthInvolvementComponent from "./youth-involvement-component";

function FarmProfileComponent() {
    const [selected, setSelected] = useState("");

    const handleCheckboxChange = (value) => {
        setSelected(value);
    };

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
                        checked={selected === "Farmer"}
                        onChange={() => handleCheckboxChange("Farmer")}
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
                        id="farmworker"
                        name="main_livelihood"
                        value="Farmworker/Laborer"
                        checked={selected === "Farmworker/Laborer"}
                        onChange={() =>
                            handleCheckboxChange("Farmworker/Laborer")
                        }
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
                        id="fisherfolk"
                        name="main_livelihood"
                        value="Fisherfolk"
                        checked={selected === "Fisherfolk"}
                        onChange={() => handleCheckboxChange("Fisherfolk")}
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
                        id="agri_youth"
                        name="main_livelihood"
                        value="Agri Youth"
                        checked={selected === "Agri Youth"}
                        onChange={() => handleCheckboxChange("Agri Youth")}
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
                <FarmActivityComponent />

                <FarmersWorkComponent />

                <FishingActivityComponent />

                <YouthInvolvementComponent />

                <div className="sm:col-span-12 border-t border-gray-900/20">
                    <div className="gap-y-4 font-medium mt-10">
                        <div className="grid grid-cols-12 items-center">
                            <h2 className="col-span-2 text-lg font-semibold text-gray-800">
                                Gross Annual Income Last Year:
                            </h2>

                            <div className="col-span-8 ml-3">
                                <input
                                    id="number"
                                    name="number"
                                    type="number"
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
