import React from "react";
import { FaChildReaching, FaFishFins, FaPersonDigging, FaWheatAwn } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function StatsSection() {
    const { dashboard } = useSelector((store) => store.app)
    console.log(dashboard)
    const stats = [
        {
            id: 1,
            name: "Total No. of Farmers",
            stat: dashboard?.total_farmer ?? 0,
            icon: FaWheatAwn,
            // change: "122",
            // changeType: "increase",
        },
        {
            id: 2,
            name: "Total No. of Farmworkers/Laborer",
            stat: dashboard?.total_workers ?? 0,
            icon: FaPersonDigging,
            // change: "5.4%",
            // changeType: "increase",
        },
        {
            id: 3,
            name: "Total No. of Fisherfolks",
            stat: dashboard?.total_fisherfolks ?? 0,
            icon: FaFishFins,
            // change: "3.2%",
            // changeType: "decrease",
        },
        {
            id: 4,
            name: "Total No. of Agri-Youth",
            stat: dashboard?.total_agri_youth ?? 0,
            icon: FaChildReaching,
            // change: "3.2%",
            // changeType: "decrease",
        },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    return (
        <div>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg bg-gray-100 px-4 pb-3 pt-5 shadow-lg sm:px-6 sm:pt-6"
                    >
                        <dt>
                            <div className="absolute rounded-md bg-green-500 p-3">
                                <item.icon
                                    aria-hidden="true"
                                    className="size-6 text-white"
                                />
                            </div>
                            <p className="ml-16 truncate text-sm font-medium text-gray-500">
                                {item.name}
                            </p>
                        </dt>
                        <div className="ml-16 flex items-baseline pb-6 sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">
                                {item.stat}
                            </p>
                            {/* <p
                                className={classNames(
                                    item.changeType === "increase"
                                        ? "text-green-600"
                                        : "text-red-600",
                                    "ml-2 flex items-baseline text-sm font-semibold"
                                )}
                            >
                                {item.changeType === "increase" ? (
                                    <ArrowUpIcon
                                        aria-hidden="true"
                                        className="size-5 shrink-0 self-center text-green-500"
                                    />
                                ) : (
                                    <ArrowDownIcon
                                        aria-hidden="true"
                                        className="size-5 shrink-0 self-center text-red-500"
                                    />
                                )}

                                <span className="sr-only">
                                    {" "}
                                    {item.changeType === "increase"
                                        ? "Increased"
                                        : "Decreased"}{" "}
                                    by{" "}
                                </span>
                                {item.change}
                            </p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
