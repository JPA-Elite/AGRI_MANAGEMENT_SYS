import axios from "axios";

export  async function get_cash_assistance_event_service() {
    const res = await axios.get("/api/cash_assistance_event"+window.location.search);
    return res;
}

export  async function store_cash_assistance_event_service(data) {
    const res = await axios.post("/api/cash_assistance_event",data);
    return res;
}

export  async function delete_cash_assistance_event_service(id) {
    const res = await axios.delete(`/api/cash_assistance_event/${id}`);
    return res;
}

export async function update_cash_assistance_event_service(data) {
    const res = await axios.put(`/api/cash_assistance_event/${data.id}`,data);
    return res;
}


export  async function get_cash_assistance_event_by_id_service(id) {
    const res = await axios.get(`/api/cash_assistance_event/${id}`);
    return res;
}

