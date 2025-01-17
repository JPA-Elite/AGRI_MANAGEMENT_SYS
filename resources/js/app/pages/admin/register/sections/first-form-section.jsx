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
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                Profile
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                This information will be displayed publicly so
                                be careful what you share.
                            </p>
                        </div>

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
