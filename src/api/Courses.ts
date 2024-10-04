import axios from "axios";
import { SearchPayload } from "../types/search";
import { SearchCoursesFilters, SearchCoursesSort } from "../types/courses";
import { ApiPayload } from "../types/api";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchAdminCourses = async (token: string, payload: SearchPayload<SearchCoursesFilters, SearchCoursesSort>) => {
    const data: ApiPayload<{}, SearchPayload<SearchCoursesFilters, SearchCoursesSort>> = {
        meta: {},
        data: payload
    };
    const response = await axios.post(
        `${apiUrl}/admin/courses/search`,
        data,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
};