import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery(
    ['isAdmin', user?.email],
    async () => {
      const res = await fetch(`https://ruec-server.vercel.app/admin/${user?.email}`);
      const data = await res.json();
      return data.admin;
    }
  );

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
