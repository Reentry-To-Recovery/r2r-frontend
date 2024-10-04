import { useAuth0 } from "@auth0/auth0-react";
import { fetchAdminCourses } from "../api/courses";
import { useCallback } from "react";
import { SearchCoursesFilters, SearchCoursesSort } from "../types/courses";
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

    return {
        fetchCourses
    }
}