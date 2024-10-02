import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchAdminCourses = async (token: string) => {
    const response = await axios.get(
        `${apiUrl}/admin/courses`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
};