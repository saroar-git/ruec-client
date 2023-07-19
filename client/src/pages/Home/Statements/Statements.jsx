import logo from '/logo.png';
import first from '../../../assets/images/statement/president.jpg';
import IconButton from '../../../components/IconButton';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Statements = () => {
  return (
    <>
      <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
        <img src={logo} alt="" width={60} />
        <h1 className='md:text-4xl text-2xl font-bold text-center uppercase text-[#136734]'>Statements</h1>
      </div>

      <div className='mb-24 mt-14 md:flex items-center justify-between'>
        <div className='flex flex-col items-center mt-2 space-y-2' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img src={first} alt="" className='h-52 w-52 shadow-sm rounded' />
          <h1 className='text-xl md:text-2xl font-bold'>Fuad Pablo</h1>
          <p className='font-semibold'>President and Founder</p>
          <small className='font-semibold'>Rajshahi University Education Club</small>
        </div>

        <div className="divider lg:divider-horizontal text-[#136734] text-3xl md:pl-10 py-10 md:py-0">●</div>

        <div className='md:w-[75%] w-full mx-auto text-justify space-y-2' data-aos="slide-left" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h2 className='md:text-3xl text-xl font-bold pb-2 md:pb-4 text-center md:text-start'>Message from President</h2>
          <p>I am honored to address you as the Founder and President of the Rajshahi University Education Club. It fills me with immense joy and pride to witness the growth and progress we have achieved together since the establishment of our esteemed club. Today, I want to extend my gratitude and appreciation to each one of you for your unwavering dedication and commitment to our shared vision.</p>

          <p> Our club's motto, "Education, Innovation, Research," encapsulates the core principles that guide our endeavors. </p>

          <p>Education is not merely the acquisition of knowledge; it is the key that unlocks doors to personal and societal growth. By fostering a culture of learning and providing opportunities for intellectual development, we empower individuals to realize their full potential and become catalysts for positive change...  <Link to='/president' className='link text-[#136734]'>Read More</Link></p>

          <div className='flex items-center gap-4 pt-5'>
            <p>Reach out with:-</p>
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

            <a href='https://www.linkedin.com/in/saroar-in/' target='_blank' rel='noopener noreferrer'>
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


      <div className='mb-24 mt-14 md:flex items-center justify-between'>
        <div className='md:w-[75%] w-full mx-auto text-justify space-y-2' data-aos="slide-right" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h2 className='md:text-3xl text-xl font-bold pb-2 md:pb-4 text-center md:text-start'>Message from Secretary</h2>
          <p>I am honored to address you as the Founder and President of the Rajshahi University Education Club. It fills me with immense joy and pride to witness the growth and progress we have achieved together since the establishment of our esteemed club. Today, I want to extend my gratitude and appreciation to each one of you for your unwavering dedication and commitment to our shared vision.</p>

          <p> Our club's motto, "Education, Innovation, Research," encapsulates the core principles that guide our endeavors. </p>

          <p>Education is not merely the acquisition of knowledge; it is the key that unlocks doors to personal and societal growth. By fostering a culture of learning and providing opportunities for intellectual development, we empower individuals to realize their full potential and become catalysts for positive change...  <Link to='/secretary' className='link text-[#136734]'>Read More</Link></p>

          <div className='flex items-center gap-4 pt-5'>
            <p>Reach out with:-</p>
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

            <a href='https://www.linkedin.com/in/saroar-in/' target='_blank' rel='noopener noreferrer'>
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

        <div className="divider lg:divider-horizontal text-[#136734] text-3xl md:pr-10 py-10 md:py-0">●</div>

        <div className='flex flex-col items-center mt-2 space-y-2' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img src={first} alt="" className='h-52 w-52 shadow-sm rounded' />
          <h1 className='text-xl md:text-2xl font-bold'>Fuad Pablo</h1>
          <p className='font-semibold'>President and Founder</p>
          <small className='font-semibold'>Rajshahi University Education Club</small>
        </div>
      </div>
    </>
  );
};

export default Statements;