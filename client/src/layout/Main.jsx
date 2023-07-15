import Navbar from "../pages/Shared/Navbar/Navbar";
import Container from "../components/Container";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import Footer from "../pages/Shared/Footer/Footer";
import { animateScroll as scroll } from 'react-scroll';

const Main = () => {
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
        <div className="min-h-screen overflow-hidden font-nunito">
          <Navbar />
          <ScrollRestoration />
          <div className="min-h-[calc(100vh-250px)]">
            <Container>
              <Outlet />
              </Container>
              <button onClick={handleSmoothScroll} className="scroll-to-top-button text-right w-full">
                Jump to Top
              </button>
            <Footer />
          </div>          
        </div>
      )}
    </>
  );
};

export default Main;
