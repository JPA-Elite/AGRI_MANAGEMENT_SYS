import axios from "axios";

export  async function get_land_farmer_service() {
    const res = await axios.get("/api/land_farmer");
    return res;
}

export  async function store_land_farmer_service(data) {
    const res = await axios.post("/api/land_farmer",data);
    return res;
}

export  async function delete_land_farmer_service(id) {
    const res = await axios.delete(`/api/land_farmer/${id}`);
    return res;
}

export  async function update_land_farmer_service(data) {
    const res = await axios.update(`/api/land_farmer/${data.id}`,data);
    return res;
}


export  async function get_land_farmer_by_id_service(id) {
    const res = await axios.get(`/api/land_farmer/${id}`);
    return res;
}

