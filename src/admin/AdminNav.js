import { HashLink } from "react-router-hash-link";
import LoginButton from "../components/Auth/LoginButton";
import LogoutButton from "../components/Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function AdminNav() {
    const { isAuthenticated } = useAuth0();

    return (
        <nav id="nav" className="flex justify">
            <div className="inner-nav flex align">
                <div className="logo" />

                <div className="nav-links flex">
                    <HashLink className="link" to="/admin">
                        Home
                    </HashLink>
                    {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </div>
            </div>
        </nav>
    );
}
