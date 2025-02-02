import axios from "axios";
import { delete_household_service, get_household_by_id_service, get_household_service, store_household_service, update_household_service } from "../services/household-service";


export async function get_household_thunk() {
     return async function (dispatch, getState) {
       const res=  await  get_household_service()
       return res.data
    };
}

export async function store_household_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await store_household_service()
        return res.data
     };
}


export async function delete_household_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await delete_household_service()
        return res.data
     };
}

export async function update_household_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await update_household_service()
        return res.data
     };
}


export async function get_household_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await get_household_by_id_service()
        return res.data
     };
}

