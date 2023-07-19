import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ScaleLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import logo from '/logo.png';
import { useLocation, useNavigate } from "react-router-dom";
import { BiSolidDownArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";
import Container from "../../components/Container";
import Register from "./Register";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setIsSubmitting(true);
        toast.success('Login Successful!');
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => toast.error(error.message));
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
          <Container>
            <div className="flex flex-col gap-10 md:flex-row items-center justify-between space-y-20 pt-36 md:pt-20 pb-24">
              <Helmet><title>Login | RUEC</title></Helmet>

              {/* Login form */}
              <>
                <div className="relative py-6 sm:max-w-xl sm:mx-auto group md:mt-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#59BB4D] to-[#136734]  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 group-hover:rotate-2 hover:duration-500 duration-500 sm:rounded-3xl"> </div>
                  <div className="relative border-[1px] border-[#136734] bg-white shadow-lg sm:rounded-3xl px-20 py-8">
                    <div className="max-w-md w-full mx-auto" data-aos="fade-right" data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000">
                      <div className="flex flex-col items-center">
                        <img src={logo} alt="" width={50} />
                        <h1 className="text-2xl font-semibold text-center">Login to RUEC</h1>
                      </div>

                      <div className="divide-y divide-gray-200">
                        <form className="pt-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>

                          <div className="relative">
                            <input
                              name="email"
                              type="email"
                              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                              placeholder="Email address"
                              required />

                            <label
                              htmlFor="email"
                              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                              Email Address
                            </label>
                          </div>

                          <div className="relative">
                            <input
                              name="password"
                              type="password"
                              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                              placeholder="Password"
                              required />

                            <label
                              htmlFor="password"
                              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                              Password
                            </label>
                          </div>

                          {isSubmitting ? (
                            <span className="animate-spin">Processing...</span>
                          ) : (
                              <div className="relative">
                                <button
                                  type="submit"
                                  className="relative px-3 py-1 font-medium text-white group">
                                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#59BB4D]   group-hover:bg-[#136734] group-hover:skew-x-12"></span>
                                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#136734] group-hover:bg-[#59BB4D]   group-hover:-skew-x-12"></span>
                                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-green-600 -rotate-12"></span>
                                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-green-400 -rotate-12"></span>
                                  <span className="relative">Submit</span>
                                </button>
                              </div>
                          )}
                          <p className="pt-3 md:flex items-center gap-1">
                            Not a member?
                            <span className="text-red-600 text-base animate-pulse  hover:text-[#136734] font-semibold cursor-pointer flex items-center gap-1"> Apply now
                              <BiSolidRightArrowCircle className="hidden md:block" />
                              <BiSolidDownArrowCircle className="md:hidden"/>
                            </span>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>

              <div className="divider lg:divider-horizontal text-[#136734] text-3xl">●</div>
              <Register/>
            </div>
          </Container>
      )}
    </>
  );
};

export default Login;