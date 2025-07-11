import React from "react";
import StatsSection from "../../dashboard/sections/stats-section";
import GenderComponent from "../../dashboard/components/gender-component";
import AgeBracketComponent from "../../dashboard/components/age-bracket-component";
import IncomeComponent from "../../dashboard/components/income-component";
import { PrinterIcon } from "@heroicons/react/20/solid";
import LivelihoodComponent from "../../dashboard/components/livelihood-component";
import BrgyActiveAgriworkerComponent from "../components/brgy-active-agriworker-component";
import GraphSection from "../../dashboard/sections/graph-section";
import { router } from "@inertiajs/react";
import { BARANGAYS } from "@/app/constants/general";

export default function BrgyReportSection() {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");
    console.log(search); // Output: "Bairan" if the URL is /administrator/reports/brgy?search=Bairan

    const handlePrint = () => {
        window.print();
    };
    return (
        <div>
            <div className="sm:col-span-12">
                <select
                    id="barangay"
                    name="barangay"
                    placeholder="Barangay"
                    value={search}
                    onChange={(e) =>
                        router.visit('/administrator/reports/brgy?search=' + e.target.value)
                    }
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 mb-3 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                >
                    <option value="" disabled selected>
                        -- Select a Barangay --
                    </option>
                    {BARANGAYS.map((barangay) => (
                        <option key={barangay} value={barangay}>
                            {barangay}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex justify-between">
                <h3 className="text-base font-semibold text-gray-900">
                    Barangay (Name of Barangay Here) Overall Report
                </h3>
                <button
                    type="button"
                    onClick={handlePrint}
                    className="rounded-full bg-green-600 p-3 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    <PrinterIcon aria-hidden="true" className="size-5" />
                </button>
            </div>

            {/* <StatsSection />
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <GenderComponent />
                <AgeBracketComponent />
                <LivelihoodComponent />
                <IncomeComponent />
            </div>*/}
            <StatsSection />
            <GraphSection />
            <BrgyActiveAgriworkerComponent />
        </div>
    );
}
