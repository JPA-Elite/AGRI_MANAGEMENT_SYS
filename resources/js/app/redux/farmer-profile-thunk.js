import axios from "axios";
import { delete_farm_profile_service, get_farm_profile_by_id_service, get_farm_profile_service, store_farm_profile_service, update_farm_profile_service } from "../services/farm-profile-services";


export function get_farm_profile_thunk() {
     return async function (dispatch, getState) {
       const res=  await  get_farm_profile_service()
       return res.data
    };
}

export function store_farm_profile_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await store_farm_profile_service()
        return res.data
     };
}


export function delete_farm_profile_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await delete_farm_profile_service()
        return res.data
     };
}

export function update_farm_profile_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await update_farm_profile_service()
        return res.data
     };
}


export function get_farm_profile_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await get_farm_profile_by_id_service()
        return res.data
     };
}

