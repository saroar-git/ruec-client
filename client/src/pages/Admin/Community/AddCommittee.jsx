import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import logo from '/logo.png';
import Container from '../../../components/Container';
import { toast } from 'react-hot-toast';

const Blogs = () => {
  const [loading, setLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const position = form.position.value;
    const email = form.email.value;
    const department = form.department.value;
    const session = form.session.value;
    const facebook = form.facebook.value;
    const linkedin = form.linkedin.value;
    const image = form.image.files[0];

    // image handle
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_hosting}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const imageUrl = imageData.data.display_url;

        const saveUser = { id:parseInt(id), name, image: imageUrl, phone, email, department, session, position, facebook, linkedin, };
        fetch('http://localhost:5000/committee', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              toast.success('Data Submitted!');
              // form.reset();
            }
            setLoading(false);
          });
      })
      .catch(error => {
        setLoading(false);
        toast.error(error.message);
      });

  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <>
          <Helmet><title>Add Committee</title></Helmet>
          <Container>
            <div className="pt-28 md:pb-8">
              <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <img src={logo} alt="" width={50} />
                <h1 className='md:text-3xl text-xl font-bold text-center uppercase text-[#136734]'>Add Committee</h1>
              </div>
            </div>

            <div className="divide-y divide-gray-200 border border-green-700 p-10 rounded-md">
              <form className="text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Full Name"
                      required />

                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Full Name*
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      name="phone"
                      type="number"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="+880"
                      required />

                    <label
                      htmlFor="phone"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Phone Number*
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      name="position"
                      type="text"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Position"
                      required />

                    <label
                      htmlFor="position"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Position*
                    </label>
                  </div>


                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email"
                      required />

                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Email*
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      name="department"
                      type="text"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Department/Institute"
                      required />

                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Department*
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      name="session"
                      type="text"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Session or Year"
                      required />

                    <label
                      htmlFor="session"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Session/Year*
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      name="facebook"
                      type="text"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Facebook Link"
                      required />

                    <label
                      htmlFor="facebook"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Facebook Link*
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      name="linkedin"
                      type="text"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="LinkedIn"
                      required />

                    <label
                      htmlFor="linkedin"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      LinkedIn Link*
                    </label>
                  </div>
                </div>

                <div className="md:flex md:justify-between items-center text-center  pt-7">
                  <div className="relative pb-7 md:flex items-center gap-6">
                    <div>
                      <label className="text-sm absolute -top-5 left-0">Image*</label>
                      <input type="file" name="image" className="file-input border-[#04431d] file-input-xs max-w-xs" />
                    </div>

                    <div className="relative mt-4">
                      <input
                        name="id"
                        type="number"
                        className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="id"
                        required />

                      <label
                        htmlFor="id"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        ID*
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="px-3 py-1 text-white cursor-pointer bg-[#207f46] hover:bg-[#04431d] hover:scale-95 duration-300 hover:duration-300  rounded">
                    {loading ? (
                      'Processing..'
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Blogs;