import React from "react";
import { FaPerson, FaPersonDress, FaPersonHalfDress } from "react-icons/fa6";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

export default function GenderComponent() {
    
    const {dashboard}=useSelector((store)=>store.app)
    const options = {
        chart: {
            id: "bar-chart",
            toolbar: {
                show: false, // Hides the toolbar
            },
        },

        xaxis: {
            categories: ["MALE", "FEMALE"], // x-axis categories
        },
        plotOptions: {
            bar: {
                horizontal: true, // Set to false to create a vertical bar chart
                columnWidth: "60%", // Adjust width of bars
            },
        },
        title: {
            text: "Gender Count",
            align: "center",
            style: {
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
            },
        },
        grid: {
            borderColor: "#e7e7e7", // Lighter grid border
        },
        colors: ["#009933"], // Customize the bar color if desired
    };

    const series = [
        {
            name: "Gender Count",
            data: [dashboard?.total_male??0, dashboard?.total_female??0], // Data corresponding to each category
        },
    ];

    return (
        <div className="sm:col-span-2">
            <div className="bg-gray-200/20 shadow-md p-4 gap-4">
                <div className="flex flex-row">
                    <FaPersonHalfDress className="size-6 text-green-500 mr-2" />
                    Gender
                </div>
                <div
                    className="chart-container"
                    style={{ maxWidth: "650px", margin: "0 auto" }}
                >
                    <ApexCharts
                        options={options}
                        series={series}
                        type="bar"
                        height={200}
                    />
                </div>
                <div className="sm:col-span-2">
                <div className="flex flex-row gap-3">
                    <div className="divide-y divide-gray-200 overflow-hidden w-full rounded-lg bg-white shadow">
                        <div className="flex flex-row px-4 py-5 sm:px-6 bg-green-500">
                        <FaPerson className="text-white size-6"/>
                        <h3 className="text-base text-white font-medium">MALE</h3>
                        </div>
                        <div className="px-4 py-5 sm:p-6 bg-green-300">
                            <h2 className="text-3xl font-medium text-center text-gray-700">{dashboard?.total_male??0}</h2>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200 overflow-hidden w-full rounded-lg bg-white shadow">
                        <div className="flex flex-row px-4 py-5 sm:px-6 bg-green-500">
                            <FaPersonDress className="text-white size-6"/>
                            <h3 className="text-base text-white font-medium">FEMALE</h3>
                        </div>
                        <div className="px-4 py-5 sm:p-6 bg-green-300">
                        <h2 className="text-3xl font-medium text-center text-gray-700">{dashboard?.total_female??0}</h2>
                        </div>
                    </div>

                    
                </div>
                </div>
                
            </div>
        </div>
    );
}
