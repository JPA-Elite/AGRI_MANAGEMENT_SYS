import axios from "axios";

export  async function get_government_affiliation_service() {
    const res = await axios.get("/api/government_affiliation");
    return res;
}

export  async function store_government_affiliation_service(data) {
    const res = await axios.post("/api/government_affiliation",data);
    return res;
}


export  async function delete_government_affiliation_service(id) {
    const res = await axios.delete(`/api/government_affiliation/${id}`);
    return res;
}

export  async function update_government_affiliation_service(data) {
    const res = await axios.update(`/api/government_affiliation/${data.id}`,data);
    return res;
}


export  async function get_government_affiliation_by_id_service(id) {
    const res = await axios.get(`/api/government_affiliation/${id}`);
    return res;
}

