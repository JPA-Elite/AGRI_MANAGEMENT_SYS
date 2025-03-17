import React, { useEffect } from "react";
import StatsSection from "./sections/stats-section";
import GraphSection from "./sections/graph-section";
import VerifierLayout from "../layout";
import { get_verifier_dashboard_thunk } from "@/app/redux/app-thunk";
import store from "@/app/store/store";

const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',    // Full year (e.g., 2025)
  month: 'long',      // Full month name (e.g., January)
  day: 'numeric',     // Numeric day (e.g., 23)
});

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AdminDashboardPage() {

    useEffect(()=>{
        store.dispatch(get_verifier_dashboard_thunk())
    },[])
    return (
        <VerifierLayout>
            <h3 className="text-base font-semibold text-gray-900">
                Current Data as of {currentDate}
            </h3>
            <StatsSection />
            <GraphSection />
        </VerifierLayout>
    );
}
