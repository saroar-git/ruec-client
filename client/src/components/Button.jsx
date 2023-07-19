import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-hot-toast';

const Button = ({ setClick }) => {
  const { user, logout } = useAuth();
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    logout()
      .then(() => { toast.success('Logout Successful!'); })
      .catch(error => toast.error(error.message));
  };

  return (
    <>
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
            <span className="relative" onClick={closeMobileMenu}>Logout</span>
          </button>
        </> : <>
          <Link to="/login" className="hidden md:block rounded px-4 py-1.5 md:m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#59BB4D] text-[#136734]">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#59BB4D] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#136734] transition duration-300 group-hover:text-white ease animate-pulse">Join Us</span>
          </Link>

          <Link to="/login" className="md:hidden px-4 py-1.5 relative rounded group font-medium text-white inline-block">
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#59BB4D] to-[#136734]"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#59BB4D] to-[#136734]"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#59BB4D] from-[#136734]"></span>
              <span className="relative" onClick={closeMobileMenu}>Join Us</span>
          </Link> </>
      }
    </>
  );
};

export default Button;