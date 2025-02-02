import axios from "axios";

export  async function get_household_service() {
    const res = await axios.get("/api/household");
    return res;
}

export  async function store_household_service(data) {
    const res = await axios.post("/api/household",data);
    return res;
}

export  async function delete_household_service(id) {
    const res = await axios.delete(`/api/household/${id}`);
    return res;
}

export  async function update_household_service(data) {
    const res = await axios.update(`/api/household/${data.id}`,data);
    return res;
}


export  async function get_household_by_id_service(id) {
    const res = await axios.get(`/api/household/${id}`);
    return res;
}

