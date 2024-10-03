import { useAuth0 } from "@auth0/auth0-react";
import { useUserRole, UserRole } from "../../hooks/useUserRole";
import { HashLink } from "react-router-hash-link";

export default function LogoutButton() {
  const { logout } = useAuth0();
  const { userRole } = useUserRole();

  return (
    <HashLink
      className="link"
      onClick={() => {
        localStorage.setItem("userRole", "");
        logout({
          logoutParams: {
            returnTo:
              userRole === UserRole.Admin
                ? window.location.origin + "/"
                : window.location.origin,
          },
        });
      }}
    >
      Log Out
    </HashLink>
  );
}
