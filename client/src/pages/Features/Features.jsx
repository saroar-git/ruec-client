import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import Container from "../../components/Container";
import { BsBookHalf } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FcOvertime } from "react-icons/fc";
import { FaNewspaper } from "react-icons/fa";
import logo from '/logo.png';
import { useQuery } from '@tanstack/react-query';

const Features = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const { data: data = [] } = useQuery(['Features'], async () => {
    const res = await fetch('https://ruec-server.vercel.app/features');
    const features = await res.json();
    features.sort((a, b) => new Date(b.date) - new Date(a.date));
    return features;
  });

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <>
            <Helmet><title>Features | RUEC</title></Helmet>
            <div className='flex flex-col items-center pt-10' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
              <img src={logo} alt="" width={60} />
              <h1 className='md:text-3xl text-2xl font-bold text-center uppercase text-[#136734]'>Get Up to Date</h1>
            </div>
          <Container>
              <div className="py-16 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  data.map(item => {
                    return (
                      <div key={item._id} className="card md:w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="feature" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{item.heading}</h2>
                          <p className='text-left text-sm font-semibold my-2 flex items-center gap-2'><BsBookHalf />{item.subHeading}</p>

                          <small className='text-justify'>
                            {item.text} ...
                            <Link to={item.link} target='_blank' className='text-green-700 font-bold'>Read More</Link>
                          </small>
                          <div className="card-actions justify-between items-center  mt-6">
                            <small className='flex items-center gap-2'> <FcOvertime className='text-lg' />{item.date}</small>
                            <small className='flex items-center gap-2'>
                              <FaNewspaper className='text-lg text-green-700' />{item.newspaper}
                            </small>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Features;