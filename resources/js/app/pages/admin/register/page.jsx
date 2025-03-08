import React, { useEffect } from "react";
import AdminLayout from "../layout";
import RegistrationStepperSection from "./sections/registration-stepper-section";
import store from "@/app/store/store";
import { get_organization_thunk } from "@/app/redux/organization-thunk";




export default function RegisterPage() {

    useEffect(()=>{
        store.dispatch(get_organization_thunk())
    },[])
    return (
        <AdminLayout>
            <RegistrationStepperSection/>
        </AdminLayout>
    );
}
