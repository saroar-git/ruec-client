import Navbar from "../pages/Shared/Navbar/Navbar";
import Container from "../components/Container";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import Footer from "../pages/Shared/Footer/Footer";
import { animateScroll as scroll } from 'react-scroll';
import { BsRocketFill } from "react-icons/bs";

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
        <div className="min-h-screen overflow-hidden font-nunito relative">
          <ScrollRestoration />
          <Navbar />
          <div className="min-h-[calc(100vh-250px)]">
            <Container>
                <Outlet />
              </Container>
              <Footer />
              <button onClick={handleSmoothScroll} className="absolute bottom-20 md:bottom-4 right-4 font-bold flex flex-col items-center">
                <BsRocketFill className="animate-bounce"/>
                Jump to Top
              </button>
          </div>          
        </div>
      )}
    </>
  );
};

export default Main;
