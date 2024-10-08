import { useAuth0 } from "@auth0/auth0-react";
import { useUserRole } from "../../hooks/useUserRole";
import StudentDash from "../../components/Dashboards/StudentDash";
import AdminDash from "../../components/Dashboards/AdminDash";

export default function Dashboard() {
  const { isAuthenticated } = useAuth0();
  const { userRole } = useUserRole();

  return (
    <div className="webpage dashboard flex align">
      <div className="inner-webpage">
        {isAuthenticated && userRole === "admin" ? (
          <AdminDash />
        ) : (
          <StudentDash />
        )}
      </div>
    </div>
  );
}
