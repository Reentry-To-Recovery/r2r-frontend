import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserRole = {
    Admin: "admin",
    Customer: "customer"
};

export const useUserRole = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userRole, setUserRole] = useState();

    useEffect(() => {
        if (isAuthenticated) {

            const fetchToken = async () => {
                const tokenResponse = await getAccessTokenSilently();
                const decodedToken = jwtDecode(tokenResponse);

                if (decodedToken.permissions.includes(UserRole.Admin)) {
                    setUserRole(UserRole.Admin);
                } else {
                    setUserRole(UserRole.Customer);
                }
            };
            fetchToken();
        } else if (window.location.href.includes("admin")) {
            setUserRole(UserRole.Admin);
        } else if (localStorage.getItem('userRole') === UserRole.Admin) {
            setUserRole(UserRole.Admin);
        } else {
            setUserRole(UserRole.Customer);
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    return {
        userRole
    };
};