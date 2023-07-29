import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import logo from '/logo.png';
import Container from '../../../components/Container';
import { toast } from 'react-hot-toast';

const AddGallery = () => {
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

        const saveUser = { name, image: imageUrl };
        fetch('https://ruec-server.vercel.app/gallery', {
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
            <Helmet><title>Add Images</title></Helmet>
          <Container>
            <div className="pt-28">
              <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <img src={logo} alt="" width={50} />
                <h1 className='md:text-3xl text-xl font-bold text-center uppercase text-[#136734]'>Add Images</h1>
              </div>
            </div>

            <div className="divide-y divide-gray-200 w-11/12 mx-auto md:w-3/4 lg:w-1/2 border-4 border-[#136734] rounded px-4 py-8 md:mt-14 shadow-2xl">
              <form className="text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>

                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="name"
                    required />

                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Add Description*
                  </label>
                </div>
                <div className="relative">
                  <div>
                    <label className="text-sm absolute -top-5 left-0">Image*</label>
                    <input type="file" name="image" className="file-input border-[#04431d] file-input-xs max-w-xs" />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="px-3 py-1 text-white cursor-pointer hover:bg-green-600 bg-[#136734] hover:scale-95 duration-300 hover:duration-300 rounded">
                    {loading ?
                      'Processing..'
                      :
                      'Submit'
                    }
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

export default AddGallery;