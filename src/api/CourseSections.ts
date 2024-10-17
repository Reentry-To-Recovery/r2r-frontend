import { FetchCourseSectionsResponse } from "../types/courseSection";
import { ApiPayload } from "../types/api";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const adminFetchCourseSections = async (token: string, courseId: string): Promise<ApiPayload<{}, FetchCourseSectionsResponse>> => {
    const response = await axios.get<ApiPayload<{}, FetchCourseSectionsResponse>>(
        `${apiUrl}/admin/courses/${courseId}/sections`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
};
