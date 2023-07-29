import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import logo from '/logo.png';
import Container from '../../../components/Container';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { MdVerified } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

const AddEvents = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const link = form.link.value;
    const date = form.date.value;
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

        const saveUser = { link, image: imageUrl, date, status: 'upcoming' };
        fetch('https://ruec-server.vercel.app/events', {
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

  const { data: events = [], refetch } = useQuery(['events'], async () => {
    const res = await fetch('https://ruec-server.vercel.app/events');
    return res.json();
  });

  // make admin
  const handleComplete = event => {
    fetch(`https://ruec-server.vercel.app/events/${event._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          toast.success('Event Completed Updated');
        }
      })
      .catch(error => {
        toast.error(error.message);
        console.log(error);
      });

  };

  // delete event
  const handleDelete = event => {
    setIsDeleting(true);

    fetch(`https://ruec-server.vercel.app/events/${event._id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 1) {
          refetch();
          toast.success('Event Deleted');
          setIsDeleting(false);
        }
      })
      .catch(error => {
        setIsDeleting(false);
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
          <Helmet><title>Add Events</title></Helmet>
          <Container>
            <div className="pt-28">
              <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <img src={logo} alt="" width={50} />
                <h1 className='md:text-3xl text-xl font-bold text-center uppercase text-[#136734]'>Add Events</h1>
              </div>
            </div>

            <div className="divide-y divide-gray-200 w-11/12 mx-auto md:w-3/4 lg:w-1/2 border-4 border-[#136734] rounded px-4 py-8 md:mt-10 shadow-2xl">
              <form className="text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>

                <div className="relative">
                  <input
                    name="link"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Link"
                    required />

                  <label
                    htmlFor="link"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Link*
                  </label>
                </div>

                <input
                  name="date"
                  type="date"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Date"
                  required />

                <div className="relative">
                    <div>
                      <label className="text-sm absolute -top-5 left-0">Image (1080*720px)</label>
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

            <div className="rounded my-10">
              <div className="overflow-x-auto w-10/12 mx-auto mt-4">
                <table className="table w-11/12 mx-auto">
                  {/* head */}
                  <thead>
                    <tr className='text-white'>
                      <th className="text-[20px] bg-[#136734] text-center rounded-l">#</th>
                      <th className="text-[17px] bg-[#136734] text-center">Image</th>
                      <th className="text-[17px] bg-[#136734] text-center">Date</th>
                      <th className="text-[17px] bg-[#136734] text-center">Status</th>
                      <th className="text-[17px] bg-[#136734] text-center">Actions Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events?.map((event, index) => (
                      event.status === 'completed' ? null : (
                        <tr key={event._id} className='text-center'>
                          <th>
                            {index + 1}
                          </th>
                          <td className='text-center'>
                            <div className="avatar">
                              <div className="mask w-16">
                                <img src={event.image} alt="Avatar" className='rounded' />
                              </div>
                            </div>
                          </td>

                          <td className='text-center'>
                            {event.date}
                          </td>

                          <td className="text-center font-semibold">
                            {event.status === 'upcoming' ?
                              <span className="text-[#59BB4D] font-semibold">Upcoming</span>
                              :
                              <span className="text-green-500 font-semibold">Completed</span>
                            }
                          </td>

                          <td className="text-center flex items-center justify-center gap-2 mt-3">
                            <button
                              onClick={() => handleComplete(event)} disabled={event.status === 'completed'}
                              className="btn btn-outline text-[#136734] hover:bg-[#136734] normal-case"
                            >
                              <MdVerified className='text-[#59BB4D] hidden md:block' /> Approve
                            </button>

                            <button
                              onClick={() => handleDelete(event)}
                              className="btn btn-outline text-[#136734] hover:bg-[#136734] normal-case flex justify-center items-center"
                            >
                              <FaTrashAlt className='text-red-500 hidden md:block' /> {isDeleting ? 'Wait..' : 'Remove'}
                            </button>
                          </td>
                        </tr>
                      )
                    ))}

                  </tbody>
                </table>
              </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddEvents;