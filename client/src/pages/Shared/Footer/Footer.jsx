import { Link } from 'react-router-dom';
import logo from '/logo.png'
import { BiCurrentLocation, BiLogoFacebookCircle, BiLogoGmail, BiLogoWhatsapp, BiLogoYoutube, BiMobile } from "react-icons/bi";

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

          <div className='flex items-start  gap-2'>
            <BiCurrentLocation className='text-xl' />
            <Link to='https://www.google.com/maps/dir/?api=1&destination=24.368570316306%2C88.639755&fbclid=IwAR2HpvS3kz4g0R72sl9RyE5x9ZAbFNcXNUx8cB6MXdsl7UV9kUS2fUIxlrE' target='_blank' className='hover:link'>
              Room No - 205, 2nd Floor, <br /> RUCSU building, Rajshahi University, <br /> Rajshahi, Bangladesh.
            </Link>
          </div>

          <div className='flex items-center  gap-2'>
            <BiLogoGmail className='text-lg' />
            <Link to="mailto:rueducationclub@gmail.com" target="_blank" className='hover:link'>
              rueducationclub@gmail.com
            </Link>
          </div>

          {/* <div className='flex items-center  gap-2'>
            <BiMobile className='text-xl' />
            <Link to="mailto:rueducationclub@gmail.com" target="_blank" className='hover:link'>
              01600-248401
            </Link>
          </div> */}
        </div>

        <div>
          <h2 className="footer-title">Social Links</h2>

          <div className='flex items-start  gap-2'>
            <BiLogoFacebookCircle className='text-xl' />
            <Link to='https://www.facebook.com/rueduclub' target='_blank' className='hover:link'>
              Facebook Page
            </Link>
          </div>

          <div className='flex items-start  gap-2'>
            <BiLogoWhatsapp className='text-lg' />
            <Link to="https://wa.me/01600248401" target="_blank" className='hover:link'>
              WhatsApp
            </Link>
          </div>

          <div className='flex items-start  gap-2'>
            <BiLogoYoutube className='text-xl' />
            <Link to="https://www.youtube.com/@rajshahiuniversityeducatio3505" target="_blank" className='hover:link'>
              Youtube Channel
            </Link>
          </div>
        </div>

        <div>
          <div className="footer-title">Community</div>
          <Link to="" target="_blank" className='hover:link'>
          ●  Advisories
          </Link>
          <Link to="" target="_blank" className='hover:link'>
          ●  Executive Committee
          </Link>
          <Link to="" target="_blank" className='hover:link'>
          ●  Club Members
          </Link>
        </div>

        <div>
          <div className="footer-title">Collaboration</div>
          <Link to="" target="_blank" className='hover:link'>
          ●  American Corner
          </Link>
          <Link to="" target="_blank" className='hover:link'>
          ●  Education USA
          </Link>
          <Link to="" target="_blank" className='hover:link'>
          ●  Erasmus Mundus 
          </Link>
        </div>
      </footer>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">

        <div>
          <p>© 2023 - RUEC |  All right reserved.</p>
          <small>Developed by <Link className='link font-bold' to="https://www.linkedin.com/in/saroar-in/" target='_blank'>Saroar Jahan</Link></small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;