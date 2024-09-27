import { useAuth0 } from "@auth0/auth0-react";
import { useUserRole, UserRole } from "../../hooks/useUserRole";

export default function LogoutButton() {
  const { logout } = useAuth0();
  const { userRole } = useUserRole();

  return (
    <button
      onClick={() => {
        localStorage.setItem("userRole", "");
        logout({ logoutParams: { returnTo: userRole === UserRole.Admin ? window.location.origin + "/admin" : window.location.origin } });
      }}
    >
      Log Out
    </button >
  );
}
