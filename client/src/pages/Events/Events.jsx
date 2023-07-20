import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import Container from "../../components/Container";

const Events = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
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
          <Container>
              <div className="py-16">

            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Events;