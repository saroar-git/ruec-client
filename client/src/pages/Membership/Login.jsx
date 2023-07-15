import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { ScaleLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const Login = () => {
  const { login } = useAuth;
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
      })
      .then(error => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
          <Helmet><title>Login | RUEC</title></Helmet>
          <div className="min-h-screen mt-8 md:mt-0 flex flex-col justify-center">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#59BB4D] to-[#136734]   shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"> </div>
              <div className="relative  bg-white shadow-lg sm:rounded-3xl px-10 md:px-20 py-12">
                <div className="max-w-md mx-auto" data-aos="fade-right" data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  <div>
                    <h1 className="text-2xl font-semibold text-center">Login to RUEC</h1>
                  </div>
                  <div className="divide-y divide-gray-200">

                    <form className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>

                      <div className="relative">
                        <input
                          name="email"
                          type="text"
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

                      <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <div className="divider text-base mt-8">OR</div>

                        <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                          <div className="flex items-center justify-center">
                            <FcGoogle />
                            <span className="ml-4 text-base">
                              Log in with  Google</span>
                          </div>
                        </button>

                        <p className="mt-3 text-sm">
                          Not a member?
                            <span className="text-[#6EBF61]  hover:text-[#136734] font-semibold cursor-pointer" onClick={() => window.my_modal_5.showModal()}> Create an account.</span>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">

                <form className="p-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>
                  <div>
                    <h1 className="text-2xl font-semibold text-center">Register to RUEC</h1>
                  </div>

                <div>
                  <label
                    htmlFor="name"
                    className="left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Full Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    className="peer placeholder-transparent w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Full Name"
                    required />
                  </div>
                  
                <div>
                  <label
                    htmlFor="email"
                    className="left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Email Address
                  </label>

                  <input
                    name="email"
                    type="text"
                    className="peer placeholder-transparent w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    required />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Password
                  </label>

                  <input
                    name="password"
                    type="password"
                    className="peer placeholder-transparent w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    required />
                </div>

                <div>
                    <input type="submit" value="Submit" className="px-3 py-1 text-white cursor-pointer bg-[#207f46] hover:bg-[#04431d] hover:scale-95 duration-300 hover:duration-300  rounded" />
                </div>

                <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  <div className="divider text-base mt-8">OR</div>

                  <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                    <div className="flex items-center justify-center">
                      <FcGoogle />
                      <span className="ml-4 text-base">
                        Log in with  Google</span>
                    </div>
                  </button>
                </div>
              </form>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>X</button>
              </form>
          </dialog>

          <div className="divider lg:divider-horizontal text-[#136734] text-3xl md:my-20">●</div>

        </div>
      )}
    </>
  );
};

export default Login;