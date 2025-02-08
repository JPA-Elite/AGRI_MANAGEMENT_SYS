import {
    delete_personal_information_service,
    get_personal_information_by_id_service,
    get_personal_information_service,
    store_personal_information_service,
    update_personal_information_service,
} from "../services/personal-information-service";

export function get_personal_information_thunk() {
    return async function (dispatch, getState) {
        const res = await get_personal_information_service();
        return res.data;
    };
}

export  function store_personal_information_thunk(data) {
    return async function (dispatch, getState) {
        const res = await store_personal_information_service(data);
        return res.data;
    };
}

export function delete_personal_information_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_personal_information_service();
        return res.data;
    };
}

export function update_personal_information_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_personal_information_service();
        return res.data;
    };
}

export function get_personal_information_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_personal_information_by_id_service();
        return res.data;
    };
}
