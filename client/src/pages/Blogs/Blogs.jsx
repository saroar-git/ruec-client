import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import Container from "../../components/Container";

const Blogs = () => {
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
          <Helmet><title>Blogs | RUEC</title></Helmet>
          <Container>
              <div className="py-16 md:h-[46.5vh]">

                <div className='flex items-center justify-center text-3xl font-bold'>
                  <h2>Blogs are coming soon..</h2>
                </div>

            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Blogs;