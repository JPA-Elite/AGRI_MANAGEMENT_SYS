import React, { useEffect } from "react";
import RegistrationStepperSection from "./sections/registration-stepper-section";
import EncoderLayout from "../layout";
import store from "@/app/store/store";
import { get_organization_thunk } from "@/app/redux/organization-thunk";




export default function RegisterPage() {

      useEffect(()=>{
            store.dispatch(get_organization_thunk())
        },[])
    return (
        <EncoderLayout>
            <RegistrationStepperSection/>
        </EncoderLayout>
    );
}
