import React from "react";
import { FaArrowUp91 } from "react-icons/fa6";

export default function AgeBracketComponent() {
    return (
        <div className="sm:col-span-2">
            <div className="bg-gray-200/20 shadow-md p-4 gap-4">
                <div className="flex flex-row">
                    <FaArrowUp91 className="size-6 text-green-500 mr-2" />
                    Age Bracket
                </div>
            </div>
        </div>
    );
}
