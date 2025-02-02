import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import ApexCharts from "react-apexcharts";

export default function OrganizationComponent() {
    const options = {
        chart: {
            id: "bar-chart",
            toolbar: {
                show: false, // Hides the toolbar
            },
        },

        xaxis: {
            categories: [
                "Cabanglay Farmers Association",
                "Gagmay Mananagat sa Looc",
                "Baybay Pu-an Fisherfolks Association",
                "Macapso Active Farmers Association",
                "Bagawines Anglers Association",
            ], // x-axis categories
        },
        plotOptions: {
            bar: {
                horizontal: true, // Set to false to create a vertical bar chart
                columnWidth: "60%", // Adjust width of bars
            },
        },
        title: {
            text: "Organization Graph",
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
            name: "Members Count",
            data: [182, 54, 90, 95, 128], // Data corresponding to each category
        },
    ];
    return (
        <div className="sm:col-span-2">
            <div className="bg-gray-200/20 shadow-md p-4 gap-4">
                <div className="flex flex-row">
                    <FaPeopleGroup className="size-6 text-green-500 mr-2" />
                    Organization
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
