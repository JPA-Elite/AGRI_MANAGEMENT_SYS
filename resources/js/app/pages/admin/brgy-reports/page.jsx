import React, { useEffect } from "react";
import AdminLayout from "../layout";
import BrgyReportSection from "./sections/brgy-general-report-section";
import store from "@/app/store/store";
import { get_admin_dashboard_thunk } from "@/app/redux/app-thunk";

export default function BrgyReportsPage() {
    useEffect(() => {
        store.dispatch(get_admin_dashboard_thunk());
    }, []);
    return (
        <AdminLayout>
            <BrgyReportSection />
        </AdminLayout>
    );
}
