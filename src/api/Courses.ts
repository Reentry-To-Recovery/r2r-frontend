import axios from "axios";
import { SearchPayload, SearchResponseMeta } from "../types/search";
import { SearchCoursesFilters, SearchCoursesSort, AddEditCoursePayload, SearchCoursesResponseData, Course } from "../types/courses";
import { ApiPayload } from "../types/api";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchAdminCourses = async (token: string, payload: SearchPayload<SearchCoursesFilters, SearchCoursesSort>): Promise<ApiPayload<SearchResponseMeta, SearchCoursesResponseData>> => {
    const data: ApiPayload<{}, SearchPayload<SearchCoursesFilters, SearchCoursesSort>> = {
        meta: {},
        data: payload
    };
    const response = await axios.post<ApiPayload<SearchResponseMeta, SearchCoursesResponseData>>(
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

export const adminAddCourse = async (token: string, payload: AddEditCoursePayload): Promise<ApiPayload<{}, Course>> => {
    const data: ApiPayload<{}, AddEditCoursePayload> = {
        meta: {},
        data: payload
    };
    const response = await axios.post<ApiPayload<{}, Course>>(
        `${apiUrl}/admin/courses`,
        data,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
}

export const adminEditCourse = async (token: string, courseId: string, payload: AddEditCoursePayload): Promise<ApiPayload<{}, Course>> => {
    const data: ApiPayload<{}, AddEditCoursePayload> = {
        meta: {},
        data: payload
    };
    const response = await axios.put<ApiPayload<{}, Course>>(
        `${apiUrl}/admin/courses/${courseId}`,
        data,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
}

export const adminFetchCourse = async (token: string, courseId: string): Promise<ApiPayload<{}, Course>> => {
    const response = await axios.get<ApiPayload<{}, Course>>(
        `${apiUrl}/admin/courses/${courseId}`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
};

export const adminDeleteCourse = async (token: string, courseId: string) => {
    const response = await axios.delete(
        `${apiUrl}/admin/courses/${courseId}`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
}
