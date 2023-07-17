import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import Banner from "./Banner";
import Moto from "./Moto";
import UpEvent from "./UpEvent";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import Feature from "./Feature";


const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

return (
  <>
    {loading ? (
      <div className="flex items-center justify-center h-screen">
        <ScaleLoader color="#136734" size={150} />
      </div>
    ) : (
      <>
        <Helmet><title>Events | RUEC</title></Helmet>
        <div>
          <Helmet><title>Home | RUEC</title></Helmet>
          <Banner />
          <Container>
            <Moto />
            <UpEvent />
            </Container>
            <Feature />
        </div>
      </>
    )}
  </>
);
};

export default Home;