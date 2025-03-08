import {
    delete_user_service,
    get_user_by_id_service,
    get_user_service,
    get_users_service,
    store_user_service,
    update_user_service,
} from "../services/user-service";
import { appSlice } from "./app-slice";
import { userSlice } from "./user-slice";

export function get_user_thunk() {
    return async function (dispatch, getState) {
        const res = await get_user_service();
        dispatch(appSlice.actions.setUser(res.data));
        return res.data;
    };
}

export function get_users_thunk() {
    return async function (dispatch, getState) {
        const res = await get_users_service();
        dispatch(userSlice.actions.setUsers(res));
        return res.data;
    };
}

export function store_user_thunk(data) {
    return async function (dispatch, getState) {
        const res = await store_user_service();
        return res.data;
    };
}

export function delete_user_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_user_service();
        return res.data;
    };
}

export function update_user_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_user_service();
        return res.data;
    };
}

export function get_user_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_user_by_id_service();
        return res.data;
    };
}
