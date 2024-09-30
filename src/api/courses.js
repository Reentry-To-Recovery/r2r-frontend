import axios from "axios";

export const fetchAdminCourses = async () => {
    const response = await axios.get("https://reentrytorecoveryapi.fly.dev/admin/courses");

    return response.data;
};