import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import logo from '/logo.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from "../../components/Container";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MdAddLink } from 'react-icons/md';
import { BsFillAlarmFill } from 'react-icons/bs';

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('https://ruec-server.vercel.app/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const completedEvents = events.filter((event) => event.status === 'completed');
  const upcomingEvents = events.filter((event) => event.status === 'upcoming');
  const completed = completedEvents.slice(0, 20)

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <>
          <Helmet><title>Events | RUEC</title></Helmet>
            <div className='flex flex-col items-center pt-10' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
              <img src={logo} alt="" width={60} />
              <h1 className='md:text-3xl text-2xl font-bold text-center uppercase text-[#136734]'>Events</h1>
            </div>

          <Container>
              <div className='py-16 text-center'>
                <Tabs>
                  <TabList className="text-green-700 font-semibold mb-8 bg-base-200 rounded">
                    <Tab>Upcoming</Tab>
                    <Tab>Recent</Tab>
                  </TabList>

                  <TabPanel>
                    <section className="container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {upcomingEvents.map((item) => (
                        <div key={item._id}>
                          <div className="relative md:w-96 shadow-xl image-full rounded">
                            <LazyLoadImage effect="blur" loading='lazy' src={item.image} alt="image" className='rounded-t-xl' />

                            <div className="absolute -bottom-7 w-full">
                              <div className='flex items-center justify-between rounded-xl'>
                                <h2 className="flex items-center gap-2 p-1 bg-white text-center rounded-b-xl text-sm font-semibold shadow-xl"> <BsFillAlarmFill className='text-base text-green-600 animate-pulse' />  {item.date}</h2>

                                <a href={item.link} target='_blank' rel='noopener noreferrer' className='flex items-center gap-1 font-semibold p-1 bg-white text-center rounded-b-xl text-sm shadow-xl'>
                                  <MdAddLink className='text-xl text-green-600' /> Event  Detail
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </section>
                  </TabPanel>

                  <TabPanel>
                    <section className="container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {completed.map((item) => (
                        <div key={item._id}>
                          <div className="relative md:w-96 shadow-xl image-full rounded">
                            <LazyLoadImage effect="blur" loading='lazy' src={item.image} alt="image" className='rounded-t-xl' />

                            <div className="absolute -bottom-7 w-full">
                              <div className='flex items-center justify-between  rounded-xl'>
                                <h2 className="flex items-center gap-2 p-1 bg-white text-center rounded-b-xl text-sm font-semibold"> <BsFillAlarmFill className='text-base text-green-600 animate-pulse shadow-xl' />  {item.date}</h2>

                                <a href={item.link} target='_blank' rel='noopener noreferrer' className='flex items-center gap-1 font-semibold p-1 bg-white text-center rounded-b-xl text-sm shadow-xl'>
                                  <MdAddLink className='text-xl text-green-600' /> Event  Detail
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </section>
                  </TabPanel>
                </Tabs>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Events;
