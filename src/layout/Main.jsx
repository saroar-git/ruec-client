import Navbar from "../pages/Shared/Navbar/Navbar";
import Container from "../components/Container";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <div className="min-h-[calc(100vh-250px)]" >
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default Main;