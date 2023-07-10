import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/Container';
import { BiMenuAltLeft, BiXCircle } from "react-icons/bi";

const Navbar = () => {
  let [open, setOpen] = useState(false)

  let Links = [
    { name: "Home", link: "/" },
    { name: "Gallery", link: "/" },
    { name: "Events", link: "/" },
    { name: "About Us", link: "/" },
  ];

  return (
    <div className='shadow-sm w-full fixed top-0 left-0 md:overflow-hidden border-b-[1px] z-10'>
      <Container>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-6'>
          <div className='font-bold text-2xl cursor-pointer flex items-center'>
            <Link to='/'>Logo</Link>
          </div>

          <div onClick={()=>setOpen(!open)}
            className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
            {open ? <BiXCircle /> : <BiMenuAltLeft />}
          </div>

          <ul className={`md:flex md:items-center pb-6 md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
            {
              Links.map((link, index) => (
                <li key={index} className='md:mr-8 text-lg my-5 md:my-0'>
                  <Link to={link.link} className='hover:text-[#6EBF61] duration-500 font-semibold'>
                    {link.name}
                  </Link>
                </li>
              ))
            }
            <Link to="/" className="hidden md:block rounded-md px-3.5 py-2 md:m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#6EBF61] text-[#6EBF61]">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#6EBF61] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-[#6EBF61] transition duration-300 group-hover:text-white ease">Apply Now</span>
            </Link>

            <Link to="/" className="md:hidden px-3 py-2 relative rounded group font-medium text-white inline-block">
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#6EBF61] to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#6EBF61] to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#6EBF61] to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#6EBF61] from-blue-500"></span>
              <span className="relative">Button Text</span>
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
