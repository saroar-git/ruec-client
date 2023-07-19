import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const NavLinks = ({ setClick }) => {
  const closeMobileMenu = () => setClick(false);
  const [toggle, setToggle] = useState("");
  const {user}=useAuth()

  const Links = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blogs" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
    { name: "Features", link: "/features" },
    {
      name: "Community", link: "/community", submenu: true, subLinks: [
        { name: "Advisories", link: "/advisories" },
        { name: "Executive Committee", link: "/committee" },
      ]
    },
    { name: "About Us", link: "/about" },
  ];

  {
    user &&     
      Links.push({ name: "Profile", link: "/profile" },)
  }

  return (
    <>
      {Links.map((link, index) => (
        <div key={index} >
          <div className='text-lg nav group'>
            <NavLink to={link.link} className='hover:text-[#59BB4D] duration-500 font-semibold' onClick={closeMobileMenu} onClickCapture={() => toggle !== link.name ? setToggle(link.name) : setToggle("")}>
              {link.name}
            </NavLink>
            {link.subLinks && (
              <div>
                <div className="absolute top-14 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3  absolute mt-1 bg-white border-l border-t border-[#59BB4D] rotate-45"></div>
                  </div>
                  <div className="bg-white p-3 border-t border-[#59BB4D]">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <NavLink to={subLink.link} className="hover:text-[#59BB4D] ">
                          ● {subLink.name}
                        </NavLink>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile device */}
          <div className={` space-y-3 mt-3 ml-5
          ${toggle === link.name ? "md:hidden" : "hidden"}
          `}>
            {link?.subLinks?.map((subLink, subIndex) => (
              <li key={subIndex}>
                <NavLink to={subLink.link} className="hover:text-[#59BB4D]">
                ●  {subLink.name}
                </NavLink>
              </li>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;