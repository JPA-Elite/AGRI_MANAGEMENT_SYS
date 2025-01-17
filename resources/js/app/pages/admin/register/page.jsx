import React from "react";
import AdminLayout from "../layout";
import RegistrationStepperSection from "./sections/registration-stepper-section";




export default function RegisterPage() {
    return (
        <AdminLayout>
            <RegistrationStepperSection/>
        </AdminLayout>
    );
}
