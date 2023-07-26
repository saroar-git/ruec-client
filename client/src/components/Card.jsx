import { IoIosCall, IoMdMail } from "react-icons/io";
import { FaLinkedin, FaSchoolFlag } from "react-icons/fa6";
import IconButton from "./IconButton";
import { BsFacebook } from "react-icons/bs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ content }) => {
  const { name, image, phone, email, department, designation, facebook, linkedin } = content;

  return (
    <div className="w-full relative mt-16 bg-base-200 rounded-xl pt-16 text-center p-6">
      <div className="bg-base-200 w-32 h-32 rounded-full p-2 overflow-hidden absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LazyLoadImage effect="blur" loading='lazy'
          src={image}
          alt=""
          className="w-full aspect-square object-cover rounded-full object-center"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-2">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral">
            {name}
          </h1>
          <p className="flex items-center gap-2">{designation}</p>
        </div>

        <p className="flex items-center gap-2"><FaSchoolFlag className="text-[#136734]" /> {department}</p>

        <div className="font-semibold my-3">
          <p className="flex items-center gap-2"><IoMdMail className="text-[#136734]" />{email}</p>
          <p className="flex items-center gap-2"><IoIosCall className="text-[#136734]" /> {phone}</p>
        </div>

      </div>
      {facebook && linkedin &&

        <div className="menu menu-horizontal text-right gap-3 text-lg mt-2">
          {facebook && <a href={linkedin} target='_blank' rel='noopener noreferrer'>
            <IconButton text="linkedin" color='bg-[#0A66C2]'>
              <FaLinkedin size={25} />
            </IconButton>
          </a>}

          {linkedin && <a href={facebook} target='_blank' rel='noopener noreferrer'>
            <IconButton text="Facebook" color='bg-[#1877F2]'>
              <BsFacebook size={25} />
            </IconButton>
          </a>}
        </div>
      }
    </div>
  );
};

export default Card;