import { useEffect, useState } from 'react';
import first from '../../../assets/images/statement/president.jpg';
import IconButton from '../../../components/IconButton';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { ScaleLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

const President = () => {
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
        <div className='mb-20 mt-28 md:flex items-start justify-between'>
            <div className='relative' data-aos="slide-right" data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <div className='flex flex-col items-center mt-2 space-y-2'>
                <LazyLoadImage effect="blur" loading='lazy' src={first} alt="" className='h-52 w-52 shadow-sm rounded' />
              <h1 className='text-xl md:text-2xl font-bold'>Fuad Pablo</h1>
                <p className='font-semibold'>Founder and President </p>
              <small className='font-semibold'>Rajshahi University Education Club</small>
              <div className='flex items-center gap-4 pt-5 md:absolute md:-bottom-14'>
                <a href="https://web.facebook.com/fuadpablu" target='_blank' rel='noopener noreferrer'>
                  <IconButton text="Facebook" color='bg-[#1877F2]'>
                    <BsFacebook size={25} />
                  </IconButton>
                </a>

                <a href="mailto:fuadpablo.ru@gmail.com" target='_blank' rel='noopener noreferrer'>
                  <IconButton text="Email" color='bg-gradient-to-bl from-[#EA4335] to-[#34A853]'>
                    <SiGmail size={25} />
                  </IconButton>
                </a>

                  <a href='https://www.linkedin.com/in/fuad-pablo-003a081a6/' target='_blank' rel='noopener noreferrer'>
                  <IconButton text="LinkedIn" color='bg-[#0A66C2]'>
                    <FaLinkedin size={25} />
                  </IconButton>
                </a>

                <a href="https://wa.me/01600248401" target='_blank' rel='noopener noreferrer'>
                  <IconButton text="WhatsApp" color='bg-[#25D366]'>
                    <BsWhatsapp size={25} />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>

          <div className="divider lg:divider-horizontal text-[#136734] text-3xl md:pl-10 py-10 md:py-0">●</div>

            <div className='md:w-[75%] w-full mx-auto text-justify space-y-2 px-3 md:px-0' data-aos="fade-up" data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <h2 className='md:text-3xl text-xl font-bold pb-2 md:pb-4 text-center md:text-start'>Message from President</h2>
            <p>I am honored to address you as the Founder and President of the Rajshahi University Education Club. It fills me with immense joy and pride to witness the growth and progress we have achieved together since the establishment of our esteemed club. Today, I want to extend my gratitude and appreciation to each one of you for your unwavering dedication and commitment to our shared vision.</p>

            <p> Our club's motto, "Education, Innovation, Research," encapsulates the core principles that guide our endeavors. </p>

            <p>Education is not merely the acquisition of knowledge; it is the key that unlocks doors to personal and societal growth. By fostering a culture of learning and providing opportunities for intellectual development, we empower individuals to realize their full potential and become catalysts for positive change.</p>

            <p> Innovation is the driving force behind progress. We believe in embracing new ideas, challenging conventional wisdom, and fostering a spirit of creativity. Through our club, we aim to create an environment that nurtures innovative thinking and encourages members to explore uncharted territories, pushing the boundaries of knowledge and transforming ideas into reality.</p>

            <p>Research, the cornerstone of academic advancement, forms an integral part of our club's pursuits. We are committed to promoting a culture of research excellence, where members can engage in meaningful investigations and contribute to the body of knowledge in their respective fields. By fostering an environment conducive to research, we aim to cultivate critical thinking, analytical skills, and a passion for discovery among our members.</p>

            <p className='pt-4'>As the Founder and President, my vision for the Rajshahi University Education Club has always been to create a platform where like-minded individuals can come together, exchange ideas, collaborate, and collectively strive for excellence. I am proud to see our club grow into a community that encourages intellectual curiosity, fosters personal growth, and cultivates lifelong friendships.</p>

            <p> I extend my heartfelt thanks to each member and supporter of the Rajshahi University Education Club for their unwavering dedication and contributions. Together, we can shape a brighter future for ourselves and generations to come.</p>

            <p className='pt-4'>
              <small>With warmest regards,</small> <br />
              <span className='text-xl font-semibold'>FUAD PABLO</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default President;