import React from "react";

export default function ProfileEducationInfoSection() {
    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl/7 font-semibold text-gray-900 mt-3">
                    <span className="block w-full rounded-full bg-gray-200 px-4 py-2">
                        III. Education
                    </span>
                </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                <div className="sm:col-span-12">
                    <label
                        htmlFor="education"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Highest Formal Education
                    </label>
                    <div className="mt-2">
                        <select
                            disabled
                            name="education"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm/6"
                        >
                            <option value="" disabled>
                                -- Select Highest Formal Education --
                            </option>
                            <option>Pre-school</option>
                            <option>Elementary</option>
                            <option>High School (Non K-12)</option>
                            <option>Junior High School (K-12)</option>
                            <option>Senior High School (K-12)</option>
                            <option selected>College</option>
                            <option>Vocational</option>
                            <option>Post-graduate</option>
                            <option>None</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
