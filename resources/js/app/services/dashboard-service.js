import axios from "axios";

export async function get_admin_dashboard_service() {
    const res = await axios.get("/api/admin_dashboard");
    return res;
}