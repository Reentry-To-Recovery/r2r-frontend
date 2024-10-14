import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import { useUserRole, UserRole } from "../hooks/useUserRole";

export default function Nav({ useState, setShowModal }) {
  const [navDropDown, setNavDropDown] = useState(false);
  const { isAuthenticated } = useAuth0();
  const { userRole } = useUserRole();

  return (
    <nav id="nav" className="flex justify">
      <div className="inner-nav flex align">
        <div className="logo" />

        <div className="nav-links flex">
          <NavLink
            className="link"
            to="/"
            onClick={() => {
              setNavDropDown(false);
            }}
          >
            Home
          </NavLink>

          <NavLink
            className="link about flex align"
            to="/about"
            onClick={() => {
              setNavDropDown(!navDropDown);
            }}
          >
            About
            <svg height="16px" viewBox="0 0 24 24" width="16px">
              {navDropDown ? (
                <path d="M11.2575379,7.75753788 C11.6675884,7.34748737 12.3324116,7.34748737 12.7424621,7.75753788 L18.7424621,13.7575379 C19.1525126,14.1675884 19.1525126,14.8324116 18.7424621,15.2424621 C18.3324116,15.6525126 17.6675884,15.6525126 17.2575379,15.2424621 L12,9.98492424 L6.74246212,15.2424621 C6.33241161,15.6525126 5.66758839,15.6525126 5.25753788,15.2424621 C4.84748737,14.8324116 4.84748737,14.1675884 5.25753788,13.7575379 L11.2575379,7.75753788 L11.2575379,7.75753788 Z" />
              ) : (
                <path d="M11.2575379,16.2424621 L5.25753788,10.2424621 C4.84748737,9.83241161 4.84748737,9.16758839 5.25753788,8.75753788 C5.66758839,8.34748737 6.33241161,8.34748737 6.74246212,8.75753788 L12,14.0150758 L17.2575379,8.75753788 C17.6675884,8.34748737 18.3324116,8.34748737 18.7424621,8.75753788 C19.1525126,9.16758839 19.1525126,9.83241161 18.7424621,10.2424621 L12.7424621,16.2424621 C12.3324116,16.6525126 11.6675884,16.6525126 11.2575379,16.2424621 L11.2575379,16.2424621 Z" />
              )}
            </svg>
          </NavLink>

          <ul className={`drop-down ${navDropDown ? "show" : ""}`}>
            <li
              onClick={() => {
                setShowModal("contact");
              }}
            >
              Contact Us
            </li>
            <li
              onClick={() => {
                setShowModal("refund");
              }}
            >
              Refund Policy
            </li>
          </ul>
          {/* end .link */}
          <NavLink
            onClick={() => {
              setNavDropDown(false);
            }}
            className="link"
            to="/certificate"
          >
            Certificate
          </NavLink>
          {isAuthenticated && userRole === UserRole.Admin ?
            <NavLink
              onClick={() => {
                setNavDropDown(false);
              }}
              className="link"
              to="/courses"
            >
              Courses
            </NavLink> :
            <HashLink
              onClick={() => {
                setNavDropDown(false);
              }}
              className="link"
              smooth
              to="/#courses"
            >
              Courses
            </HashLink>
          }

          {isAuthenticated ? (
            <>
              <NavLink
                className="link"
                onClick={() => {
                  setNavDropDown(false);
                }}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
        {/* end .nav-links */}
      </div>
    </nav>
  );
}
