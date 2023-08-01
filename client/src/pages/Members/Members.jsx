import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import logo from '/logo.png';
import Container from "../../components/Container";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoIosCalendar, IoIosCall, IoMdMail } from 'react-icons/io';
import { FaSchoolFlag } from 'react-icons/fa6';

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch('https://ruec-server.vercel.app/members')
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

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
          <Helmet><title>Active Members | RUEC</title></Helmet>
          <div className='flex flex-col items-center pt-10' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <img src={logo} alt="" width={60} />
            <h1 className='md:text-3xl text-2xl font-bold text-center uppercase text-[#136734]'>Our Active Members</h1>
          </div>

          <Container>
            <div className='py-16'>
              <div>
                <section className="container my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {members?.map((item) => (
                    <div key={item._id} className="w-full relative mt-16 bg-base-200 rounded-xl pt-16 text-center p-6">
                      <div className="bg-base-200 w-32 h-32 rounded-full p-2 overflow-hidden absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <LazyLoadImage effect="blur" loading='lazy'
                          src={item.photo}
                          alt=""
                          className="w-full aspect-square object-cover rounded-full object-center"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center mb-4">
                          <h1 className="text-xl lg:text-3xl font-bold text-neutral">
                            {item.name}
                          </h1>
                          <p className="flex items-center gap-2">{item.role}</p>
                        </div>

                        <p className="flex items-center gap-2"><IoMdMail className="text-[#136734]" />{item.email}</p>
                        <p className="flex items-center gap-2"><IoIosCall className="text-[#136734]" /> {item.phone}</p>

                        <div className="flex items-center gap-4 font-semibold my-4"><p className="flex items-center gap-2"><FaSchoolFlag className="text-[#136734]" />  {item.department}</p>
                          <p className="flex items-center gap-2"><IoIosCalendar className="text-[#136734]" /> {item.session}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Members;
