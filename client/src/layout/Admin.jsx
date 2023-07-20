import Container from "../components/Container";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { animateScroll as scroll } from 'react-scroll';
import { BsRocketFill } from "react-icons/bs";
import Header from "../pages/Admin/AdminHeader/Header";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const handleSmoothScroll = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

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
            <button onClick={handleSmoothScroll} className="absolute bottom-20 md:bottom-4 right-4 font-bold flex flex-col items-center">
              <BsRocketFill className="animate-bounce" />
              Jump to Top
            </button>
        </div>
      )}
    </>
  );
};

export default Admin;
