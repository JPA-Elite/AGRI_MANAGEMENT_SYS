import axios from "axios";

export  async function get_users_service() {
    const res = await axios.get("/api/accounts"+window.location.search);
    return res;
}

export  async function store_user_service(data) {
    const res = await axios.post("/api/accounts",data);
    return res;
}

export  async function delete_user_service(id) {
    const res = await axios.delete(`/api/accounts/${id}`);
    return res;
}

export  async function update_user_service(data) {
    const res = await axios.update(`/api/accounts/${data.id}`,data);
    return res;
}


export  async function get_user_by_id_service(id) {
    const res = await axios.get(`/api/accounts/${id}`);
    return res;
}

