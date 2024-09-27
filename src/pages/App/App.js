import AdminApp from "./AdminApp";
import CustomerApp from "./CustomerApp";
import { useUserRole, UserRole } from "../../hooks/useUserRole";
import React from "react";

export default function App() {
  const { userRole } = useUserRole();

  return (
    userRole === undefined
      ? <></>
      : (userRole === UserRole.Admin ? <AdminApp /> : <CustomerApp />)
  );
}
