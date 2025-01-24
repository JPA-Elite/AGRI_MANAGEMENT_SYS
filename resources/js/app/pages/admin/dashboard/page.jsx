import React from "react";
import AdminLayout from "../layout";
import StatsSection from "./sections/stats-section";
import GraphSection from "./sections/graph-section";

const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',    // Full year (e.g., 2025)
  month: 'long',      // Full month name (e.g., January)
  day: 'numeric',     // Numeric day (e.g., 23)
});

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AdminDashboardPage() {
    return (
        <AdminLayout>
            <h3 className="text-base font-semibold text-gray-900">
                Current Data as of {currentDate}
            </h3>
            <StatsSection />
            <GraphSection />
        </AdminLayout>
    );
}
