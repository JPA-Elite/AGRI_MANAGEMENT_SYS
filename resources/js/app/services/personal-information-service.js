import axios from "axios";

export async function get_personal_information_service() {
    const res = await axios.get("/api/personal_information");
    return res;
}

export async function store_personal_information_service(data) {
    const res = await axios.post("/api/personal_information",data);
    return res;
}

export async function delete_personal_information_service(id) {
    const res = await axios.delete(`/api/personal_information/${id}`);
    return res;
}

export async function update_personal_information_service(data) {
    const res = await axios.update(`/api/personal_information/${data.id}`,data);
    return res;
}


export async function get_personal_information_by_id_service(id) {
    const res = await axios.get(`/api/personal_information/${id}`);
    return res;
}

