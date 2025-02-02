import axios from "axios";

export  async function get_lgu_profile_service() {
    const res = await axios.get("/api/lgu_profile");
    return res;
}

export  async function store_lgu_profile_service(data) {
    const res = await axios.post("/api/lgu_profile",data);
    return res;
}

export  async function delete_lgu_profile_service(id) {
    const res = await axios.delete(`/api/lgu_profile/${id}`);
    return res;
}

export  async function update_lgu_profile_service(data) {
    const res = await axios.update(`/api/lgu_profile/${data.id}`,data);
    return res;
}


export  async function get_lgu_profile_by_id_service(id) {
    const res = await axios.get(`/api/lgu_profile/${id}`);
    return res;
}

