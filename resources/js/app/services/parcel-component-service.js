import axios from "axios";

export  async function get_parcel_component_service() {
    const res = await axios.get("/api/parcel_component");
    return res;
}

export  async function store_parcel_component_service(data) {
    const res = await axios.post("/api/parcel_component",data);
    return res;
}

export  async function delete_parcel_component_service(id) {
    const res = await axios.delete(`/api/parcel_component/${id}`);
    return res;
}

export  async function update_parcel_component_service(data) {
    const res = await axios.update(`/api/parcel_component/${data.id}`,data);
    return res;
}


export  async function get_parcel_component_by_id_service(id) {
    const res = await axios.get(`/api/parcel_component/${id}`);
    return res;
}

