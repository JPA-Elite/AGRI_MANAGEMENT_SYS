import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

export default function OrganizationComponent() {
    const { dashboard } = useSelector((state) => state.app);

    // Ensure the top_organizations data is available
    const topOrganizations = dashboard?.top_organizations || [];

    // Extract organization names and their corresponding member counts
    const organizationNames = topOrganizations.map(org => org.organization_name);
    const memberCounts = topOrganizations.map(org => org.member_count);

    const options = {
        chart: {
            id: "bar-chart",
            toolbar: {
                show: false, // Hide the toolbar
            },
        },
        xaxis: {
            categories: organizationNames, // Dynamic x-axis categories
        },
        plotOptions: {
            bar: {
                horizontal: true, // Horizontal bar chart
                columnWidth: "60%", // Adjust width of bars
            },
        },
        title: {
            text: "Top 5 Organizations by Member Count",
            align: "center",
            style: {
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
            },
        },
        grid: {
            borderColor: "#e7e7e7",
        },
        colors: ["#009933"], // Custom bar color
    };

    const series = [
        {
            name: "Members Count",
            data: memberCounts, // Dynamic data from API response
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
                    {topOrganizations.length > 0 ? (
                        <ApexCharts
                            options={options}
                            series={series}
                            type="bar"
                            height={300}
                        />
                    ) : (
                        <p className="text-center text-gray-500">No data available</p>
                    )}
                </div>
            </div>
        </div>
    );
}
