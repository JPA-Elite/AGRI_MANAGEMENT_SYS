import React, { useEffect } from "react";
import AdminLayout from "../layout";
import StatsSection from "./sections/stats-section";
import GraphSection from "./sections/graph-section";
import store from "@/app/store/store";
import { get_admin_dashboard_thunk } from "@/app/redux/app-thunk";
import BrgyActiveAgriworkerComponent from "../brgy-reports/components/brgy-active-agriworker-component";

const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric", // Full year (e.g., 2025)
    month: "long", // Full month name (e.g., January)
    day: "numeric", // Numeric day (e.g., 23)
});


export default function AdminDashboardPage() {
    const dashboard=window.location.pathname.split('/')[2]
    useEffect(() => {
        store.dispatch(get_admin_dashboard_thunk());
    }, []);
    return (
        <AdminLayout>
            <h3 className="text-base font-semibold text-gray-900">
                Current Data as of {currentDate}
            </h3>
            <StatsSection />
            <GraphSection />
            {dashboard != 'dashboard' && <BrgyActiveAgriworkerComponent />}
        </AdminLayout>
    );
}
