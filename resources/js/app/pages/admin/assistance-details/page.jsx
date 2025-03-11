import React, { useEffect } from "react";
import AdminLayout from "../layout";
import DetailsModalSection from "./sections/details-modal-section";
import store from "@/app/store/store";
import { get_cash_assistance_by_id_thunk } from "@/app/redux/cash-assistance-thunk";

export default function AssistanceDetailsPage() {
    const id = window.location.pathname.split("/")[3];
    useEffect(() => {
        store.dispatch(get_cash_assistance_by_id_thunk(id));
    }, []);
    return (
        <AdminLayout>
            <DetailsModalSection />
        </AdminLayout>
    );
}
