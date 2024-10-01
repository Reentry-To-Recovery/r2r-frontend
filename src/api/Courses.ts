import axios from "axios";

export const fetchAdminCourses = async (token: string) => {
    const response = await axios.get(
        "http://localhost:5272/admin/courses",
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
};