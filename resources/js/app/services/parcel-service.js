import axios from "axios";

export  async function get_parcel_service() {
    const res = await axios.get("/api/parcel");
    return res;
}

export  async function store_parcel_service(data) {
    const res = await axios.post("/api/parcel",data);
    return res;
}

export  async function delete_parcel_service(id) {
    const res = await axios.delete(`/api/parcel/${id}`);
    return res;
}

export  async function update_parcel_service(data) {
    const res = await axios.update(`/api/parcel/${data.id}`,data);
    return res;
}


export  async function get_parcel_by_id_service(id) {
    const res = await axios.get(`/api/parcel/${id}`);
    return res;
}

