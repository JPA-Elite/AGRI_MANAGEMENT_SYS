import axios from "axios";
import { delete_organization_service, get_organization_by_id_service, get_organization_service, store_organization_service, update_organization_service } from "../services/organization-service";


export async function get_organization_thunk() {
     return async function (dispatch, getState) {
       const res=  await  get_organization_service()
       return res.data
    };
}

export async function store_organization_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await store_organization_service()
        return res.data
     };
}


export async function delete_organization_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await delete_organization_service()
        return res.data
     };
}

export async function update_organization_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await update_organization_service()
        return res.data
     };
}


export async function get_organization_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await get_organization_by_id_service()
        return res.data
     };
}

