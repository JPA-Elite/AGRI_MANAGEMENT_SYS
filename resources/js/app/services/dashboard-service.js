import axios from "axios";

export async function get_admin_dashboard_service() {
    const res = await axios.get("/api/admin_dashboard"+window.location.search);
    return res;
}


export async function get_verifier_dashboard_service() {
    const res = await axios.get("/api/verifier_dashboard");
    return res;
}


