import React from "react";
import { Pagination } from "antd";
import { useSelector } from "react-redux";
import { router } from "@inertiajs/react";

export default function PaginationSection() {
    const { personal_informations } = useSelector(
        (store) => store.personal_information
    );
    const path = window.location.pathname;
    const url = path + window.location.search;

    const getQueryParam = (url, paramName) => {
        const searchParams = new URLSearchParams(url.split("?")[1]);
        return searchParams.get(paramName);
    };

    const page = getQueryParam(url, "page");
    const status = getQueryParam(url, "status");
    const currentPage = page ? parseInt(page, 10) : 1;

    function page_handler(params) {
        const newUrl = path + "?page=" + params+"&status="+status;
        router.visit(newUrl);
    }
    console.log('personal_informations',personal_informations)
    return (
        <div className="w-full flex items-end justify-end my-5">
            <Pagination 
            onChange={page_handler}
            defaultCurrent={currentPage} 
            total={personal_informations.total} />
        </div>
    );
}
