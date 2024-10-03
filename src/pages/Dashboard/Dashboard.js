import { useAuth0 } from "@auth0/auth0-react";
import { useUserRole, UserRole } from "../../hooks/useUserRole";
import AdminDash from "../../components/Dashboards/AdminDash";
import StudentDash from "../../components/Dashboards/StudentDash";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
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
