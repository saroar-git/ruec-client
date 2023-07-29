import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import logo from '/logo.png';
import { toast } from 'react-hot-toast';
import Container from '../../components/Container';

const AddFeatures = () => {
  const [loading, setLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const heading = form.heading.value;
    const text = form.text.value;
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

        const saveUser = { name, image: imageUrl, heading, date, text, status: 'pending' };
        fetch('https://ruec-server.vercel.app/blogs', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              toast.success('Data Submitted!');
              form.reset();
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
          <Helmet><title>Make Blog</title></Helmet>
          <Container>
            <div className="py-8">
              <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <img src={logo} alt="" width={50} />
                <h1 className='md:text-3xl text-xl font-bold text-center uppercase text-[#136734]'>Add Your Blog</h1>
              </div>
            </div>

            <div className="divide-y divide-gray-200 border border-green-700 p-10 rounded-md mb-14 md:mb-24">
              <form className="text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Newspaper"
                      required />

                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      name="date"
                      type="date"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Date and Time"
                      required />

                    <label
                      htmlFor="date"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Post Date
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <input
                      name="heading"
                      type="text"
                      className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Heading"
                      required />

                    <label
                      htmlFor="heading"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Heading
                    </label>
                  </div>

                  <div className='relative'>
                    <label className="text-sm absolute left-0 top-1 px-6 py-0.5 text-white rounded bg-green-600">Add Image</label>
                    <input type="file" name="image" className="file-input border-[#04431d] file-input-xs max-w-xs" />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="text"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="News"
                    required />

                  <label
                    htmlFor="subHeading"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Blog Text
                  </label>
                </div>

                <div className="text-center">
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

export default AddFeatures;