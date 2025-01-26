import React from "react";
import { FaArrowUp91 } from "react-icons/fa6";
import ApexCharts from "react-apexcharts";

export default function AgeBracketComponent() {
    const options = {
        chart: {
            id: "donut-chart",
            toolbar: {
                show: false, // Hide the toolbar
            },
        },
        labels: ["18-24: 120", "25-39: 503", "40-59: 462", "60 and Above: 210"], // Labels for the slices
        title: {
            text: "Age Percentage",
            align: "center",
            style: {
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "60%", // Size of the donut hole
                },
            },
        },
        colors: ["#FF5733", "#0099ff", "#009933", "#ff6600"], // Custom slice colors
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        width: "100%", // Responsive width for smaller screens
                    },
                },
            },
        ],
    };

    const series = [120, 503, 462, 210];
    return (
        <div className="sm:col-span-2">
            <div className="bg-gray-200/20 shadow-md p-4 gap-4">
                <div className="flex flex-row">
                    <FaArrowUp91 className="size-6 text-green-500 mr-2" />
                    Age Bracket
                </div>
                <div
                    className="chart-container"
                    style={{ maxWidth: "497px", margin: "0 auto" }}
                >
                    <ApexCharts
                        options={options}
                        series={series}
                        type="donut"
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
}
