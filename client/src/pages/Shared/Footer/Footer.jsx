import { Link } from 'react-router-dom';
import logo from '/logo.png'
import { BiLogoFacebookCircle,  BiLogoLinkedin, BiLogoYoutube, BiMailSend, BiPhone } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={logo} alt="" width={70} />
          <p className='font-bold'>Rajshahi University Education Club</p>
          <span>Since 2019.</span>
        </div>

        <div>
          <h2 className="footer-title">Contact</h2>

          <div className='flex items-start gap-2'>
            <FaLocationDot className='text-lg text-[#FF182C] mx-1 md:mx-0' />
            <p target='_blank' className='hover:link'>
              Rajshahi University, <br /> Rajshahi, Bangladesh.
            </p>
          </div>

          <div className='flex items-center gap-2'>
            <BiMailSend className='text-lg text-purple-600 mx-1 md:mx-0' />
            <p target="_blank" className='hover:link'>
              ruec@gmail.com
            </p>
          </div>

          <div className='flex items-center gap-2'>
            <BiPhone className='text-xl text-green-700 mx-1 md:mx-0' />
            <p className='hover:link'>
            +880 1600-000000
            </p>
          </div>
        </div>

        <div>
          <h2 className="footer-title">Social Links</h2>

          <div className='flex items-start gap-2'>
            <BiLogoFacebookCircle className='text-xl text-[#1877F2] mx-1 md:mx-0' />
            <p className='hover:link'>
              Facebook Page
            </p>
          </div>

          <div className='flex items-start gap-2'>
            <BiLogoLinkedin className='text-xl text-[#0A66C2] mx-1 md:mx-0' />
            <p className='hover:link'>
              LinkedIn Page
            </p>
          </div>

          <div className='flex items-start gap-2'>
            <IoLogoWhatsapp className='text-lg text-[#25D366] mx-1 md:mx-0' />
            <p className='hover:link'>
              WhatsApp Now
            </p>
          </div>

          <div className='flex items-start gap-2'>
            <BiLogoYoutube className='text-xl text-[#FF0000] mx-1 md:mx-0' />
            <p className='hover:link'>
              Youtube Channel
            </p>
          </div>
        </div>

        <div>
          <div className="footer-title">Community</div>
          <Link to="/community/advisories" className='hover:link'>
          ●  Advisories
          </Link>
          <Link to="/community/executive-committee" className='hover:link'>
          ●  Executive Committee
          </Link>
          <Link to="/member" className='hover:link'>
          ●  Club Members
          </Link>
        </div>
      </footer>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">

        <div>
          <p>© 2023 - RUEC |  All right reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;