import axios from "axios";
import {
    delete_lgu_profile_service,
    get_lgu_profile_by_id_service,
    get_lgu_profile_service,
    store_lgu_profile_service,
    update_lgu_profile_service,
} from "../services/lgu-profile-service";
import { lguProfileSlice } from "./lgu-profile-slice";

export function get_lgu_profile_thunk() {
    return async function (dispatch, getState) {
        const res = await get_lgu_profile_service();
        return res.data;
    };
}

export function store_lgu_profile_thunk(data) {
    return async function (dispatch, getState) {
        const res = await store_lgu_profile_service(data);
        return res.data;
    };
}

export function delete_lgu_profile_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_lgu_profile_service();
        return res.data;
    };
}

export function update_lgu_profile_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_lgu_profile_service();
        return res.data;
    };
}

export function get_lgu_profile_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_lgu_profile_by_id_service(id);
        dispatch(lguProfileSlice.actions.setProfile(res.data));
        return res.data;
    };
}
