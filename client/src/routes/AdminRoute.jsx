import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ScaleLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading && isAdminLoading) {
    return <div className="flex items-center justify-center h-screen">
      <ScaleLoader color="#136734" size={150} />
    </div>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;