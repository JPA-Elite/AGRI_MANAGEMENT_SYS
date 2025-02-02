import axios from "axios";
import { delete_land_farmer_service, get_land_farmer_by_id_service, get_land_farmer_service, store_land_farmer_service, update_land_farmer_service } from "../services/land-farmer-service";


export async function get_land_farmer_thunk() {
     return async function (dispatch, getState) {
       const res=  await  get_land_farmer_service()
       return res.data
    };
}

export async function store_land_farmer_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await store_land_farmer_service()
        return res.data
     };
}


export async function delete_land_farmer_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await delete_land_farmer_service()
        return res.data
     };
}

export async function update_land_farmer_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await update_land_farmer_service()
        return res.data
     };
}


export async function get_land_farmer_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await get_land_farmer_by_id_service()
        return res.data
     };
}

