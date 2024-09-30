import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./reset.css";
import "./style.css";
import App from "./pages/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-tmrxuwvilohijcnk.us.auth0.com"
    clientId="Mf26NaPLdxuLJ1D0JxJnAfJG9dWikIQ2"
    useRefreshTokens={true}
    useRefreshTokensFallback
    cacheLocation="localstorage"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>
);
