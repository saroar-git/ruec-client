import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="min-h-screen mt-8 md:mt-0 flex flex-col justify-center">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-300 to-[#6EBF61]  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative  bg-white shadow-lg sm:rounded-3xl px-10 md:px-20 py-12">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">Login to EDUC</h1>
            </div>
            <div className="divide-y divide-gray-200">

              <form className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                <div className="relative">                 
                  <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                  <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                </div>

                <div className="relative">
                  <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                  <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div className="relative">
                  <button className="bg-[#6EBF61]  text-white rounded-md px-2 py-1">Submit</button>
                </div>
                <div>
                  <div className="divider text-base mt-8">OR</div>

                  <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                    <div className="flex items-center justify-center">
                      <FcGoogle />
                      <span className="ml-4 text-base">
                        Log in with  Google</span>
                    </div>
                  </button>

                  <p className="mt-3 text-sm">Not a member? <a href="#" className="text-[#6EBF61] hover:text-blue-700 font-semibold">Create an
                    account.</a></p>
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;