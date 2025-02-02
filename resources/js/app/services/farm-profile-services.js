import axios from "axios";

export async function get_farm_profile_service() {
    const res = await axios.get("/api/farm_profile");
    return res;
}

export async function store_farm_profile_service(data) {
    const res = await axios.post("/api/farm_profile",data);
    return res;
}


export async function delete_farm_profile_service(id) {
    const res = await axios.delete(`/api/farm_profile/${id}`);
    return res;
}

export async function update_farm_profile_service(data) {
    const res = await axios.update(`/api/farm_profile/${data.id}`,data);
    return res;
}


export async function get_farm_profile_by_id_service(id) {
    const res = await axios.get(`/api/farm_profile/${id}`);
    return res;
}

