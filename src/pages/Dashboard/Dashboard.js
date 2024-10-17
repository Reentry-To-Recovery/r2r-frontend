import { useAuth0 } from "@auth0/auth0-react";
import { useUserRole, UserRole } from "../../hooks/useUserRole";
import StudentDash from "../../components/Dashboards/StudentDash";
import AdminDash from "../../components/Dashboards/AdminDash";

export default function Dashboard() {
  const { isAuthenticated } = useAuth0();
  const { userRole } = useUserRole();

  return (
    <div className={`webpage flex align dashboard`}>
      <div className="inner-webpage">
        {isAuthenticated && userRole === UserRole.Admin ? (
          <AdminDash />
        ) : (
          <StudentDash />
        )}
      </div>
    </div>
  );
}
