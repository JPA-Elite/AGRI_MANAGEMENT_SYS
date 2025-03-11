import {
    delete_cash_assistance_event_service,
    get_cash_assistance_event_by_id_service,
    get_cash_assistance_event_service,
    store_cash_assistance_event_service,
    update_cash_assistance_event_service,
} from "../services/cash-assistance-event";
import { cashAssistanceSlice } from "./cash-assistance-slice";

export function get_cash_assistance_thunk() {
    return async function (dispatch, getState) {
        const res = await get_cash_assistance_event_service();
        dispatch(cashAssistanceSlice.actions.setCashAssistances(res.data));
        return res.data;
    };
}

export function store_cash_assistance_thunk(data) {
    return async function (dispatch, getState) {
        const res = await store_cash_assistance_event_service(data);
        return res.data;
    };
}

export function delete_cash_assistance_thunk(id) {
    return async function (dispatch, getState) {
        const res = await delete_cash_assistance_event_service(id);
        return res.data;
    };
}

export function update_cash_assistance_thunk(data) {
    return async function (dispatch, getState) {
        const res = await update_cash_assistance_event_service(data);
        return res.data;
    };
}

export function get_cash_assistance_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_cash_assistance_event_by_id_service(id);
        dispatch(cashAssistanceSlice.actions.setCashAssistance(res.data));
    };
}
