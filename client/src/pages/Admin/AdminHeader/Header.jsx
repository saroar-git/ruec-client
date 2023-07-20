import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../../../components/Container';
import { BiMenuAltLeft, BiXCircle } from "react-icons/bi";
import logo from '/logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/addblogs" },
    { name: "Gallery", link: "/addgallery" },
    { name: "Events", link: "/addevents" },
    { name: "Advisory", link: "/addAdvisory" },
    { name: "Committee", link: "/addCommittee" },
    { name: "Features", link: "/addfeatures" },
  ];

  return (
    <div className='shadow-sm w-full fixed top-0 left-0 md:overflow-hidden border-b-[1px] z-10'>
      <Container>
        <div className='md:flex items-center justify-between bg-white py-1 md:px-10 px-6'>
          <div className='font-bold text-2xl cursor-pointer flex items-center'>
            <Link to='/' >
              <img src={logo} width={65} alt="" />
            </Link>
          </div>

          <div onClick={() => setOpen(!open)}
            className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
            {open ? <BiXCircle /> : <BiMenuAltLeft />}
          </div>

          <ul className={`md:flex md:items-center pb-6 md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
            {
              Links.map((link, index) => (
                <li key={index} className='md:mr-6 text-lg my-4 md:my-0 nav'>
                  <NavLink to={link.link} className='hover:text-[#59BB4D] duration-500 font-semibold' onClick={handleClose}>
                    {link.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
