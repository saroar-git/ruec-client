import { Link } from 'react-router-dom';
import logo from '/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={logo} alt="" width={70} />
          <p className='font-bold'>Rajshahi University Education Club</p>
          <span>Providing reliable tech since 2019</span>
        </div>

        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>

        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>

        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
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