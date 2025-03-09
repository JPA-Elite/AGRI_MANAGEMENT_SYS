import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

export default function IncomeComponent() {
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
                "Below 5K",
                "5K-10K",
                "10K-20K",
                "21K-30K",
                "31K-40K",
                "Above 40K",
            ], // x-axis categories
        },
        plotOptions: {
            bar: {
                horizontal: false, // Set to false to create a vertical bar chart
                columnWidth: "60%", // Adjust width of bars
            },
        },
        title: {
            text: "Monthly Income Graph",
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
            name: "Monthly Income Count",
            data: [dashboard?.income_below_5k, dashboard?.income_5k, dashboard?.income_11k, dashboard?.income_21k, dashboard?.income_31k, dashboard?.income_above],
        },
    ];

    return (
        <div className="sm:col-span-2">
            <div className="bg-gray-200/20 shadow-md p-4 gap-4">
                <div className="flex flex-row">
                    <FaMoneyBillTrendUp className="size-6 text-green-500 mr-2" />
                    Monthly Income Bracket
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
