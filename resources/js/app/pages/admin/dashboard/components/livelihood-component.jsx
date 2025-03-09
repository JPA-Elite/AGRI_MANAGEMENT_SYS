import React from "react";
import { FaPersonDigging } from "react-icons/fa6";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

export default function LivelihoodComponent() {

    const { dashboard } = useSelector((state) => state.app)
    const options = {
        chart: {
            id: "bar-chart",
            toolbar: {
                show: false, // Hides the toolbar
            },
        },

        xaxis: {
            categories: [
                "Farmers",
                "Fisherfolks",
                "Farm Workers/Laborer",
                "Agri-Youth",
            ], // x-axis categories
        },
        plotOptions: {
            bar: {
                horizontal: false, // Set to false to create a vertical bar chart
                columnWidth: "60%", // Adjust width of bars
            },
        },
        title: {
            text: "Main Livelihood Graph",
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
            name: "Main Livelihood Count",
            data: [dashboard?.farmerWorker ?? 0, dashboard?.fisherfolk ?? 0, dashboard?.laborer ?? 0, dashboard?.agri_youth ?? 0], // Data corresponding to each category
        },
    ];
    return (
        <div className="sm:col-span-2">
            <div className="bg-gray-200/20 shadow-md p-4 gap-4">
                <div className="flex flex-row">
                    <FaPersonDigging className="size-6 text-green-500 mr-2" />
                    Livelihood
                </div>
                <div
                    className="chart-container"
                    style={{ maxWidth: "650px", margin: "0 auto" }}
                >
                    <ApexCharts
                        options={options}
                        series={series}
                        type="bar"
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}
