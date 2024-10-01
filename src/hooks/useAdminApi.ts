import { useAuth0 } from "@auth0/auth0-react";
import { fetchAdminCourses } from "../api/Courses";
import { useCallback } from "react";

const authorizationParams = {
    scope: "admin"
}

export const useAdminApi = () => {
    const { getAccessTokenSilently } = useAuth0();

    const fetchCourses = useCallback(async () => {
        const token = await getAccessTokenSilently({
            authorizationParams: authorizationParams
        });

        return await fetchAdminCourses(token);
    }, [getAccessTokenSilently])

    return {
        fetchCourses
    }
}