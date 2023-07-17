import  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../../../components/Container';
import { BiMenuAltLeft, BiXCircle } from "react-icons/bi";
import logo from '/logo.png';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
      .then(() => { toast.success('Logout Successful!'); })
      .catch(error => toast.error(error.message));
  }
  const Links = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blogs" },
    { name: "Gallery", link: "/gallery" },
    { name: "Events", link: "/events" },
    { name: "Community", link: "/community" },
    { name: "Features", link: "/features" },
    { name: "About Us", link: "/about" },
  ];

  if (user) {
    Links.push({ name: "Profile", link: "/profile" });
  }

  return (
    <div className='shadow-sm w-full fixed top-0 left-0 md:overflow-hidden border-b-[1px] z-10'>
      <Container>
        <div className='md:flex items-center justify-between bg-white py-1 md:px-10 px-6'>
          <div className='font-bold text-2xl cursor-pointer flex items-center'>
            <Link to='/' >
              <img src={logo} width={65} alt="" />
            </Link>
          </div>

          <div onClick={()=>setOpen(!open)}
            className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
            {open ? <BiXCircle /> : <BiMenuAltLeft />}
          </div>

          <ul className={`md:flex md:items-center pb-6 md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
            {
              Links.map((link, index) => (
                <li key={index} className='md:mr-6 text-lg my-4 md:my-0 nav'>
                  <NavLink to={link.link} className='hover:text-[#59BB4D] duration-500 font-semibold'>
                    {link.name}
                  </NavLink>
                </li>
              ))
            }
            {
              user ? <>
                <button onClick={handleLogout} className="hidden md:block rounded px-4 py-1.5 md:m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#59BB4D] text-[#136734]">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#59BB4D] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-[#136734] transition duration-300 group-hover:text-white ease">Logout</span>
                </button>

                <button onClick={handleLogout} className="md:hidden px-4 py-1.5 relative rounded group font-medium text-white inline-block">
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#59BB4D] to-[#136734]"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#59BB4D] to-[#136734]"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#59BB4D] from-[#136734]"></span>
                  <span className="relative">Logout</span>
                </button>
              </> :
                <>
                  <Link to="/login" className="hidden md:block rounded px-4 py-1.5 md:m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#59BB4D] text-[#136734]">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#59BB4D] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-[#136734] transition duration-300 group-hover:text-white ease animate-pulse">Join Us</span>
                  </Link>

                  <Link to="/login" className="md:hidden px-4 py-1.5 relative rounded group font-medium text-white inline-block">
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#59BB4D] to-[#136734]"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#59BB4D] to-[#136734]"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#59BB4D] from-[#136734]"></span>
                    <span className="relative">Join Us</span>
                  </Link>
                </>
            }
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
