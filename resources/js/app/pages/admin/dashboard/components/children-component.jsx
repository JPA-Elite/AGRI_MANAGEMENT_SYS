import React from "react";
import { FaBaby } from "react-icons/fa6";

export default function ChildrenComponent() {
    return (
        <div className="sm:col-span-2">
            <div className="bg-gray-200/20 shadow-md p-4 gap-4">
                <div className="flex flex-row">
                    <FaBaby className="size-6 text-green-500 mr-2" />
                    Children
                </div>
            </div>
        </div>
    );
}
