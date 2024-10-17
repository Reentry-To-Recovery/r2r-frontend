import { useAuth0 } from "@auth0/auth0-react";
import { fetchAdminCourses, adminAddCourse, adminEditCourse, adminFetchCourse, adminDeleteCourse } from "../api/Courses";
import { useCallback } from "react";
import { SearchCoursesFilters, SearchCoursesSort, AddEditCoursePayload, SearchCoursesResponseData, Course } from "../types/Courses";
import { SearchPayload, SearchResponseMeta } from "../types/search";
import { ApiPayload } from "../types/api";
import { adminFetchCourseSections } from "../api/CourseSections";

const authorizationParams = {
    scope: "admin"
}

export const useAdminApi = () => {
    const { getAccessTokenSilently } = useAuth0();

    const fetchCourses = useCallback(async (payload: SearchPayload<SearchCoursesFilters, SearchCoursesSort>): Promise<ApiPayload<SearchResponseMeta, SearchCoursesResponseData>> => {
        const token = await getAccessTokenSilently({
            authorizationParams: authorizationParams
        });

        return await fetchAdminCourses(token, payload);
    }, [getAccessTokenSilently]);

    const addCourse = useCallback(async (payload: AddEditCoursePayload): Promise<ApiPayload<{}, Course>> => {
        const token = await getAccessTokenSilently({
            authorizationParams: authorizationParams
        });

        return await adminAddCourse(token, payload);
    }, [getAccessTokenSilently]);

    const editCourse = useCallback(async (courseId: string, payload: AddEditCoursePayload): Promise<ApiPayload<{}, Course>> => {
        const token = await getAccessTokenSilently({
            authorizationParams: authorizationParams
        });

        return await adminEditCourse(token, courseId, payload);
    }, [getAccessTokenSilently]);

    const fetchCourse = useCallback(async (courseId: string): Promise<ApiPayload<{}, Course>> => {
        const token = await getAccessTokenSilently({
            authorizationParams: authorizationParams
        });

        return await adminFetchCourse(token, courseId);
    }, [getAccessTokenSilently]);

    const deleteCourse = useCallback(async (courseId: string) => {
        const token = await getAccessTokenSilently({
            authorizationParams: authorizationParams
        });

        return await adminDeleteCourse(token, courseId);
    }, [getAccessTokenSilently]);

    const fetchCourseSections = useCallback(async (courseId: string) => {
        const token = await getAccessTokenSilently({
            authorizationParams: authorizationParams
        });

        return await adminFetchCourseSections(token, courseId);
    }, [getAccessTokenSilently]);

    return {
        fetchCourses,
        addCourse,
        editCourse,
        fetchCourse,
        deleteCourse,
        fetchCourseSections
    };
}
