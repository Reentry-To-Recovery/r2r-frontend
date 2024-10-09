import { useAuth0 } from "@auth0/auth0-react";
import { fetchAdminCourses, adminAddCourse } from "../api/courses";
import { useCallback } from "react";
import { SearchCoursesFilters, SearchCoursesSort, AddCoursePayload } from "../types/courses";
import { SearchPayload } from "../types/search";

const authorizationParams = {
    scope: "admin"
}

export const useAdminApi = () => {
    const { getAccessTokenSilently } = useAuth0();

    const fetchCourses = useCallback(async (payload: SearchPayload<SearchCoursesFilters, SearchCoursesSort>) => {
        const token = await getAccessTokenSilently({
            authorizationParams: authorizationParams
        });

        return await fetchAdminCourses(token, payload);
    }, [getAccessTokenSilently])

    const addCourse = useCallback(async (payload: AddCoursePayload) => {
        const token = await getAccessTokenSilently({
            authorizationParams: authorizationParams
        });

        return await adminAddCourse(token, payload);
    }, [getAccessTokenSilently])

    return {
        fetchCourses,
        addCourse
    }
}
