import AdminApp from "./AdminApp";
import CustomerApp from "./CustomerApp";
import { useUserRole, UserRole } from "../../hooks/useUserRole";

export default function App() {
  const { userRole } = useUserRole();

  return (
    userRole === UserRole.Admin ? <AdminApp /> : <CustomerApp />
  );
}
