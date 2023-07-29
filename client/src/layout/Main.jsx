import Navbar from "../pages/Shared/Navbar/Navbar";
import Container from "../components/Container";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import Footer from "../pages/Shared/Footer/Footer";
import { BsRocketFill } from "react-icons/bs";

const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const [hideScrollTopBtn, setHideScrollTopBtn] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setHideScrollTopBtn(document.documentElement.scrollTop < 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <button
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                className={`fixed bottom-3 right-3 btn bg-[#59BB4D] btn-square btn-circle z-20 text-xl disabled:opacity-0 ${hideScrollTopBtn ? "hidden" : ""
                  }`}
              >
                <BsRocketFill className="animate-bounce text-white" />
              </button>
          </div>          
        </div>
      )}
    </>
  );
};

export default Main;
