import React from "react";
import { FaPersonHalfDress } from "react-icons/fa6";
import ApexCharts from "react-apexcharts";

export default function GenderComponent() {
    const options = {
        chart: {
            id: "bar-chart",
            toolbar: {
                show: false, // Hides the toolbar
            },
        },

        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // x-axis categories
        },
        plotOptions: {
            bar: {
                horizontal: true, // Set to false to create a vertical bar chart
                columnWidth: "60%", // Adjust width of bars
            },
        },
        title: {
            text: "Monthly Sales",
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
        colors: ["#FF5733"], // Customize the bar color if desired
    };

    const series = [
        {
            name: "Sales",
            data: [30, 40, 35, 50, 49, 60, 70], // Data corresponding to each category
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
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
}
