import axios from "axios";

export  async function get_organization_service() {
    const res = await axios.get("/api/organization");
    return res.data;
}

export  async function store_organization_service(data) {
    const res = await axios.post("/api/organization",data);
    return res;
}

export  async function delete_organization_service(id) {
    const res = await axios.delete(`/api/organization/${id}`);
    return res;
}

export  async function update_organization_service(data) {
    const res = await axios.update(`/api/organization/${data.id}`,data);
    return res;
}


export  async function get_organization_by_id_service(id) {
    const res = await axios.get(`/api/organization/${id}`);
    return res;
}

