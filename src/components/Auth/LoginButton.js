import { useAuth0 } from "@auth0/auth0-react";
import { UserRole, useUserRole } from "../../hooks/useUserRole";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  const { userRole } = useUserRole();

  return (
    <button onClick={() => {
      loginWithRedirect({ authorizationParams: { scope: userRole === UserRole.Admin ? "admin" : undefined } });
      localStorage.setItem("userRole", userRole);
    }}
    >
      Log In
    </button>
  );
}
