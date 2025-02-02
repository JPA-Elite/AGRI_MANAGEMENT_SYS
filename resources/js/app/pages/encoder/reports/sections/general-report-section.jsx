import React from "react";
import StatsSection from "../../dashboard/sections/stats-section";
import GenderComponent from "../../dashboard/components/gender-component";
import AgeBracketComponent from "../../dashboard/components/age-bracket-component";
import IncomeComponent from "../../dashboard/components/income-component";
import ActiveAgriworkerComponent from "../components/active-agriworker-component";
import { PrinterIcon } from "@heroicons/react/20/solid";
import LivelihoodComponent from "../../dashboard/components/livelihood-component";

export default function GeneralReportSection() {
    const handlePrint = () => {
        window.print();
    };
    return (
        <div>
            <div className="flex justify-between">
                <h3 className="text-base font-semibold text-gray-900">
                    Overall Report
                </h3>
                <button
                    type="button"
                    onClick={handlePrint}
                    className="rounded-full bg-green-600 p-3 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    <PrinterIcon aria-hidden="true" className="size-5" />
                </button>
            </div>

            <StatsSection />
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <GenderComponent />
                <AgeBracketComponent />
                <LivelihoodComponent />
                <IncomeComponent />
            </div>
            <ActiveAgriworkerComponent />
        </div>
    );
}
