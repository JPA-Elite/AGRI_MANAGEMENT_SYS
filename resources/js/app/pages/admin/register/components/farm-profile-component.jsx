import { useState } from "react";

function FarmProfileComponent() {
    const [selected, setSelected] = useState("");

    const handleCheckboxChange = (value) => {
        setSelected(value);
    };

    return (
        <form>
            <div className="flex flex-col gap-y-4 font-medium mt-2">
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
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                        htmlFor="agri_youth"
                        className="ml-2 mr-5 block text-md text-gray-700"
                    >
                        Agri Youth
                    </label>
                </div>
            </div>
        </form>
    );
}

export default FarmProfileComponent;
