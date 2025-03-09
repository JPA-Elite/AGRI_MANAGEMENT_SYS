import React from "react";
import { FaArrowUp91 } from "react-icons/fa6";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

export default function AgeBracketComponent() {
    const { dashboard } = useSelector((state) => state.app);

    const eighteen_24 = dashboard?.eighteen_24 || 0;
    const twentyfive_39 = dashboard?.twentyfive_39 || 0;
    const forty_59 = dashboard?.forty_59 || 0;
    const above_60 = dashboard?.above_60 || 0;

    const labels = [
        `18-24: ${eighteen_24}`,
        `25-39: ${twentyfive_39}`,
        `40-59: ${forty_59}`,
        `60 and Above: ${above_60}`,
    ];

    const series = [eighteen_24, twentyfive_39, forty_59, above_60];

    const options = {
        chart: {
            id: "donut-chart",
            toolbar: {
                show: false,
            },
        },
        labels: labels,
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
