import React from "react";
import GenderComponent from "../components/gender-component";
import AgeBracketComponent from "../components/age-bracket-component";
import ChildrenComponent from "../components/children-component";
import IncomeComponent from "../components/income-component";
import OrganizationComponent from "../components/organization-component";
import FooterSection from "../../_sections/footer-section";

export default function GraphSection() {
    return (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <GenderComponent />
            <AgeBracketComponent />
            <ChildrenComponent />
            <IncomeComponent />
            <OrganizationComponent />
        </div>
    );
}
