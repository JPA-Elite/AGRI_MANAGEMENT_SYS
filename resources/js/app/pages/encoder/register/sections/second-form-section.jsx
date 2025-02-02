import React from "react";
import FarmProfileComponent from "../components/farm-profile-component";

export default function SecondFormSection() {
    return (
        <div>
            <div className="mt-4">
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                II. Farm Profile
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                This information will be displayed publicly so
                                be careful what you share.
                            </p>
                        </div>
                        
                        <div className="border-b border-gray-900/10 pb-12">
                            <FarmProfileComponent />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
