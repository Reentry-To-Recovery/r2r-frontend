import { useAuth0 } from "@auth0/auth0-react";
import { UserRole } from "../../hooks/useUserRole";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => { loginWithRedirect(); localStorage.setItem("userRole", UserRole.Admin) }}>Log In</button>;
}
