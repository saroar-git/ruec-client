import { useEffect, useState } from 'react';
import first from '../../../assets/images/statement/second.png';
import IconButton from '../../../components/IconButton';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { ScaleLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

const Secretary = () => {
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
        <div className='my-28 md:flex items-start justify-between'>
          <div className='relative' data-aos="slide-right" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className='flex flex-col items-center mt-2 space-y-2'>
                <LazyLoadImage effect="blur" loading='lazy' src={first} alt="" className='h-52 w-52 shadow-sm rounded' />
              <h1 className='text-xl md:text-2xl font-bold'>Tamim Al Nur</h1>
                <p className='font-semibold'>Co-Founder and General Secretary</p>
                <small className='font-semibold'>Rajshahi University Education Club</small>
                
              <div className='flex items-center gap-4 pt-5 md:absolute md:-bottom-14'>
                  <p>
                  <IconButton text="Facebook" color='bg-[#1877F2]'>
                    <BsFacebook size={25} />
                  </IconButton>
                </p>

                  <p>
                  <IconButton text="Email" color='bg-gradient-to-bl from-[#EA4335] to-[#34A853]'>
                    <SiGmail size={25} />
                  </IconButton>
                </p>

                  <p>
                  <IconButton text="LinkedIn" color='bg-[#0A66C2]'>
                    <FaLinkedin size={25} />
                  </IconButton>
                </p>

                  <p>
                  <IconButton text="WhatsApp" color='bg-[#25D366]'>
                    <BsWhatsapp size={25} />
                  </IconButton>
                </p>
              </div>
            </div>
          </div>

          <div className="divider lg:divider-horizontal text-[#136734] text-3xl md:pl-10 py-10 md:py-0">●</div>

          <div className='md:w-[75%] w-full mx-auto text-justify space-y-2 px-3 md:px-0' data-aos="fade-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h2 className='md:text-3xl text-xl font-bold pb-2 md:pb-4 text-center md:text-start'>Message from Secretary</h2>
              <p>As the General Secretary of Rajshahi University Education Club, I am honoured to serve this great club and its members.</p>

              <p>The Education Club was founded in 2019 with the goal of promoting Education, Research, and Innovation among Rajshahi University students. Over the years, the club has grown to become one of the most active and influential student organizations on campus. We offer a wide range of activities and events for our members, including Workshops, seminars, conferences, Guest Lectures (Ed Talk), and social gatherings (Education Fair). We also provide academic support and mentoring to our members.</p>

              <p>We are committed to providing our members with the resources and support they need to succeed in their studies and beyond. I would like to invite all Rajshahi University students to join the Education Club. We are a welcoming and inclusive community, and we offer something great for everyone.</p>

              <p className='pt-4'>We are a welcoming and inclusive community, and we offer something great for everyone. </p>

            <p className='pt-4'>
              <small>With warmest regards,</small> <br />
              <span className='text-xl font-semibold'>TAMIM AL NUR</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Secretary;