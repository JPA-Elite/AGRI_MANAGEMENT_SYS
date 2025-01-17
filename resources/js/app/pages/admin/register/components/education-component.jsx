import React from 'react'

export default function EducationComponent() {
  return (
    <div>
        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                Education
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                Use a permanent address where you can receive
                                mail.
                            </p>

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
                                            id="education"
                                            name="education"
                                            autoComplete="education"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option value="" disabled selected>
                                                -- Select Highest Formal Education --
                                            </option>
                                            <option>Pre-school</option>
                                            <option>Elementary</option>
                                            <option>High School (Non K-12)</option>
                                            <option>Junior High School (K-12)</option>
                                            <option>Senior High School (K-12)</option>
                                            <option>College</option>
                                            <option>Vocational</option>
                                            <option>Post-graduate</option>
                                            <option>None</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}
