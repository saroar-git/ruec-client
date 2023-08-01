import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import logo from '/logo.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from "../../components/Container";
import Card from '../../components/Card';

const Advisories = () => {
  const [advisories, setAdvisories] = useState([]);
  useEffect(() => {
    fetch('https://ruec-server.vercel.app/advisory')
      .then(res => res.json())
      .then(data => setAdvisories(data));
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const teachers = advisories.filter((advisory) => advisory.type === 'Teachers');
  const students = advisories.filter((advisory) => advisory.type === 'Students');

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <>
          <Helmet><title>Advisories | RUEC</title></Helmet>
          <div className='flex flex-col items-center pt-10' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <img src={logo} alt="" width={60} />
            <h1 className='md:text-3xl text-2xl font-bold text-center uppercase text-[#136734]'>our honorable advisories</h1>
          </div>

          <Container>
            <div className='py-16 text-center'>
              <Tabs>
                <TabList className="text-green-700 font-semibold mb-8 bg-base-200 rounded-xl">
                  <Tab>Teachers</Tab>
                  <Tab>Students</Tab>
                </TabList>

                <TabPanel>
                  <section className="container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teachers?.map((item) => (
                      <Card content={item} key={item._id} />
                    ))}
                  </section>
                </TabPanel>

                  <TabPanel>
                    <section className="container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {students?.map((item) => (
                        <Card content={item} key={item._id} />
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

export default Advisories;