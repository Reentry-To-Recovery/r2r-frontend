import React, { useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../pages/App/App";

export default function AuthProviderWithRouter() {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <Auth0Provider
            domain="dev-tmrxuwvilohijcnk.us.auth0.com"
            clientId="Mf26NaPLdxuLJ1D0JxJnAfJG9dWikIQ2"
            useRefreshTokens={true}
            cacheLocation="localstorage"
            authorizationParams={{
                redirect_uri: window.location.origin,
                scope: isAdmin ? "admin" : undefined
            }}
        >
            <Router>
                <App isAdmin={isAdmin} setIsAdmin={(isAdmin) => { setIsAdmin(isAdmin); }} />
            </Router>
        </Auth0Provider>
    );
}
