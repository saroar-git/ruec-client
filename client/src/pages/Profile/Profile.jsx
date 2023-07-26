import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ScaleLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { IoIosCalendar, IoIosCall, IoMdMail } from "react-icons/io";
import { FaSchoolFlag } from "react-icons/fa6";

const Profile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const { data: item = {} } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/member/${user?.email}`);
      return res.json();
    }
  });

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="purple" size={50} />
        </div>
      ) : (
          <div className='mt-8 md:mb-24 mb-14 w-full mx-auto'>
            <Helmet><title>Profile | Collegia</title></Helmet>

            <h1 className="text-xl md:text-3xl font-semibold text-center uppercase text-purple-600 mb-32">My Profile</h1>

            <section className="md:w-1/2 mx-auto">
              <div key={item._id} className="w-full relative mt-16 bg-base-200 rounded-xl pt-16 text-center p-6">
                <div className="bg-base-200 w-32 h-32 rounded-full p-2 overflow-hidden absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={item?.photo}
                    alt=""
                    className="w-full aspect-square object-cover rounded-full object-center"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center mb-4">
                    <h1 className="text-xl lg:text-3xl font-bold text-neutral">
                      {item.name}
                    </h1>
                    <p className="flex items-center gap-2">{item.role}</p>
                  </div>

                  <p className="flex items-center gap-2"><IoMdMail className="text-[#136734]" />{item.email}</p>
                  <p className="flex items-center gap-2"><IoIosCall className="text-[#136734]" /> {item.phone}</p>

                  <div className="flex items-center gap-4 font-semibold my-4"><p className="flex items-center gap-2"><FaSchoolFlag className="text-[#136734]" />  {item.department}</p>
                    <p className="flex items-center gap-2"><IoIosCalendar className="text-[#136734]" /> {item.session}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
      )}
    </>
  );
};

export default Profile;