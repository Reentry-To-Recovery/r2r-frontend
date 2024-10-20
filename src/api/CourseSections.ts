import { FetchCourseSectionsResponse, OrderCourseSectionsPayload, CourseSection } from "../types/courseSection";
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

export const adminOrderCourseSections = async (token: string, courseId: string, payload: string[]): Promise<ApiPayload<{}, FetchCourseSectionsResponse>> => {
    const data: ApiPayload<{}, OrderCourseSectionsPayload> = {
        meta: {},
        data: {
            orderedSectionIds: payload
        }
    };

    const response = await axios.put<ApiPayload<{}, FetchCourseSectionsResponse>>(
        `${apiUrl}/admin/courses/${courseId}/sections/order`,
        data,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
}

export const adminFetchCourseSection = async (token: string, courseId: string, sectionId: string): Promise<ApiPayload<{}, CourseSection>> => {
    const response = await axios.get<ApiPayload<{}, CourseSection>>(
        `${apiUrl}/admin/courses/${courseId}/sections/${sectionId}`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
}
