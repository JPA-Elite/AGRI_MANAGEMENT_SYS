import { setForm } from "@/app/redux/register-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FarmersWorkComponent() {
    const { form } = useSelector((store) => store.register);
    const dispatch = useDispatch();
    return (
        <div className="sm:col-span-3">
            <div className="border border-green-900/80 border- rounded-md px-3 py-4">
                <div className="text-center text-md font-medium text-gray-700">
                    <p>For Farmworkers</p>

                    <p className="text-left mt-2 text-sm">Kind of Work:</p>
                </div>
                <div className="space-y-5 mt-5">
                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    name="farm_activity"
                                    type="checkbox"
                                    value="Land Preparation"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        const updatedFarmActivity = e.target
                                            .checked
                                            ? [...form.farm_activity, newValue] // Add the value if checked
                                            : form.farm_activity.filter(
                                                  (activity) =>
                                                      activity !== newValue
                                              ); // Remove the value if unchecked

                                        dispatch(
                                            setForm({
                                                ...form,
                                                farm_activity:
                                                    updatedFarmActivity,
                                            })
                                        );
                                    }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="landpreparation"
                                className="font-medium text-gray-900"
                            >
                                Land Preparation
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    name="farm_activity"
                                    type="checkbox"
                                    value="Planting/Transplanting"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        const updatedFarmActivity = e.target
                                            .checked
                                            ? [...form.farm_activity, newValue] // Add the value if checked
                                            : form.farm_activity.filter(
                                                  (activity) =>
                                                      activity !== newValue
                                              ); // Remove the value if unchecked

                                        dispatch(
                                            setForm({
                                                ...form,
                                                farm_activity:
                                                    updatedFarmActivity,
                                            })
                                        );
                                    }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="planting"
                                className="font-medium text-gray-900"
                            >
                                Planting/Transplanting
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    name="farm_activity"
                                    type="checkbox"
                                    value="Cultivation"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        const updatedFarmActivity = e.target
                                            .checked
                                            ? [...form.farm_activity, newValue] // Add the value if checked
                                            : form.farm_activity.filter(
                                                  (activity) =>
                                                      activity !== newValue
                                              ); // Remove the value if unchecked

                                        dispatch(
                                            setForm({
                                                ...form,
                                                farm_activity:
                                                    updatedFarmActivity,
                                            })
                                        );
                                    }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="cultivation"
                                className="font-medium text-gray-900"
                            >
                                Cultivation
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    name="farm_activity"
                                    type="checkbox"
                                    value="Harvesting"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        const updatedFarmActivity = e.target
                                            .checked
                                            ? [...form.farm_activity, newValue] // Add the value if checked
                                            : form.farm_activity.filter(
                                                  (activity) =>
                                                      activity !== newValue
                                              ); // Remove the value if unchecked

                                        dispatch(
                                            setForm({
                                                ...form,
                                                farm_activity:
                                                    updatedFarmActivity,
                                            })
                                        );
                                    }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="harvesting"
                                className="font-medium text-gray-900"
                            >
                                Harvesting
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                   name="farm_activity"
                                   type="checkbox"
                                   value="Others"
                                   onChange={(e) => {
                                       const newValue = e.target.value;
                                       const updatedFarmActivity = e.target
                                           .checked
                                           ? [...form.farm_activity, newValue] // Add the value if checked
                                           : form.farm_activity.filter(
                                                 (activity) =>
                                                     activity !== newValue
                                             ); // Remove the value if unchecked

                                       dispatch(
                                           setForm({
                                               ...form,
                                               farm_activity:
                                                   updatedFarmActivity,
                                           })
                                       );
                                   }}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-green-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-green-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor="others"
                                className="font-medium text-gray-900"
                            >
                                Others
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
