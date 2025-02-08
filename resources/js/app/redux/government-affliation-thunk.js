import axios from "axios";
import { delete_government_affiliation_service, get_government_affiliation_by_id_service, get_government_affiliation_service, store_government_affiliation_service, update_government_affiliation_service } from "../services/government-affiliation-service";


export function get_government_affiliation_thunk() {
     return async function (dispatch, getState) {
       const res=  await  get_government_affiliation_service()
       return res.data
    };
}

export function store_government_affiliation_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await store_government_affiliation_service()
        return res.data
     };
}


export function delete_government_affiliation_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await delete_government_affiliation_service()
        return res.data
     };
}

export function update_government_affiliation_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await update_government_affiliation_service()
        return res.data
     };
}


export function get_government_affiliation_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await get_government_affiliation_by_id_service()
        return res.data
     };
}

