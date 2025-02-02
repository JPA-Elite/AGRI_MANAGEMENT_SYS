import React from "react";
import PersonalInformationComponent from "../components/personal-information-component";
import AddressInformationComponent from "../components/address-information-component";
import EducationComponent from "../components/education-component";
import GovernmentAffiliationComponent from "../components/government-affiliation-component";

export default function FirstFormSection() {
    return (
        <div>
            <div className="mt-4">
                <form>
                    <div className="space-y-12">
                        <PersonalInformationComponent />
                        <AddressInformationComponent />
                        <EducationComponent />
                        <GovernmentAffiliationComponent />
                    </div>
                </form>
            </div>
        </div>
    );
}
