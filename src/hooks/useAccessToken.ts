import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const useAccessToken = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchToken = async () => {
            setIsLoading(true);
            try {
                const tokenResponse = await getAccessTokenSilently();
                setToken(tokenResponse);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
                setToken(null);
                setIsLoading(false);
            }
        };

        if (!isAuthenticated) {
            setToken(null);
        } else if (token === null) {
            fetchToken();
        }
    }, [isAuthenticated, getAccessTokenSilently, token]);

    return {
        token,
        isLoading
    };
}