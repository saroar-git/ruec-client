import Container from "../components/Container";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import Header from "../pages/Admin/AdminHeader/Header";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <div className="min-h-screen overflow-hidden font-nunito relative">
          <Header />
          <ScrollRestoration />
            <Container>
              <div className="min-h-[calc(100vh-290px)]">
                <Outlet />
            </div>
            </Container>
        </div>
      )}
    </>
  );
};

export default Admin;
