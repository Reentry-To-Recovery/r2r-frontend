import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AdminApp from "./AdminApp";
import CustomerApp from "./CustomerApp";

export default function App(props) {
  const { isAdmin, setIsAdmin } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes("login")) {
      if (pathname.includes("admin")) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [pathname]);

  return (
    isAdmin ? <AdminApp /> : <CustomerApp />
  );
}
