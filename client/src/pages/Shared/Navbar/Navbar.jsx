import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import logo from '/logo.png';
import NavLinks from "./NavLinks";
import Button from "../../../components/Button";
import { BiMenu, BiXCircle } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <nav className="bg-white border-b-[1px] shadow-sm fixed w-full z-10 px-4 md:px-0">
      <Container>
        <div className="flex items-center font-medium justify-between py-2 pr-2">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to='/'>
              <img src={logo} alt="logo" width={65} />
            </Link>

            <div onClick={() => setClick(!click)} className="md:hidden">
              {click ? <BiXCircle size={30} /> : <BiMenu size={30} />}
            </div>
          </div>

          <ul className="md:flex hidden items-center gap-6">
            <NavLinks />
            <Button />
          </ul>

          {/* Mobile device */}
          <ul className={`md:hidden bg-white absolute w-full h-[calc(100vh-70px)] left-0 top-20 pt-10 pb-20 pl-10 space-y-6 duration-500 ${click ? "left-0" : "left-[-100%]"}`}>
            <NavLinks setClick={setClick} />
            <Button setClick={setClick} />
          </ul>
        </div>
      </Container>

    </nav>
  );
};

export default Navbar;