import { HashLink } from "react-router-hash-link";
import LoginButton from "../components/Auth/LoginButton";
import LogoutButton from "../components/Auth/LogoutButton";

export default function AdminNav({ useState, setShowModal, isAuthenticated }) {
    const [navDropDown, setNavDropDown] = useState(false);

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
                {/* end .nav-links */}
            </div>
        </nav>
    );
}
