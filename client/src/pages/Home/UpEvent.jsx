import logo from '/logo.png';
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

const UpEvent = () => {
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://ruec-server.vercel.app/events')
      .then(res => res.json())
      .then(data => {
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setEvents(data);
      });
  }, []);

  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModel(true);
  };

  // Filter upcoming events (status === 'upcoming')
  const upcomingEvents = events.filter(item => item.status === 'upcoming');

  return (
    <>
      <div className='flex flex-col items-center mb-12' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <img src={logo} alt="" width={60} />
        <h1 className='md:text-4xl text-2xl font-bold text-center uppercase text-[#136734]'>upcoming events</h1>
        <p className='text-[#136734] opacity-70 text-center'>Date, time, and place could be changed by the decision of the RUEC authority.</p>
      </div>

      <div className={model ? 'model open' : 'model'}>
        <img src={tempImg} alt="" />
        <div className="close-icon" onClick={() => setModel(false)}>
          <GrClose className='rounded-full p-2 bg-slate-200' />
        </div>
      </div>

      <div className='mb-24 mt-14'>
        <Marquee pauseOnHover>
          {upcomingEvents.map((item) => (
            <div className='md:mx-14 mx-4 my-0 py-0 overflow-y-hidden overflow-x-hidden' key={item._id}>
              <div className='relative'>
                <p className="absolute top-1 right-1 px-3 rounded-bl-xl bg-white border-2 z-10">
                  <Link to={item.link} className='animate-pulse duration-500 font-semibold text-red-800'>Link</Link>
                </p>
                <div
                  onClick={() => getImg(item.image)}
                  className='rounded shadow-xl border-4 w-72 md:w-96'
                >
                  <LazyLoadImage effect="blur" loading='lazy' src={item.image} alt="" className="w-full h-full object-cover cursor-pointer hover:scale-105 hover:duration-500 duration-500" />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default UpEvent;
