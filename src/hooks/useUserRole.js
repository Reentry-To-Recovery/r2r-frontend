import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserRole = {
    Admin: "admin",
    User: "user"
};

export const useUserRole = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userRole, setUserRole] = useState();

    useEffect(() => {
        if (isAuthenticated) {

            const fetchToken = async () => {
                try {
                    const tokenResponse = await getAccessTokenSilently();
                    const decodedToken = jwtDecode(tokenResponse);

                    if (decodedToken["https://r2r-claims.com/roles"].includes(UserRole.Admin)) {
                        setUserRole(UserRole.Admin);
                    } else {
                        setUserRole(UserRole.User);
                    }
                } catch (e) {
                    console.log(e);
                }
            };
            fetchToken();
        } else if (window.location.href.includes("admin")) {
            setUserRole(UserRole.Admin);
        } else if (localStorage.getItem('userRole') === UserRole.Admin) {
            setUserRole(UserRole.Admin);
        } else {
            setUserRole(UserRole.User);
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    return {
        userRole
    };
};