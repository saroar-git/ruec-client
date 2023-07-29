import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import logo from '/logo.png';
import Container from '../../../components/Container';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const AddBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false)

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const { data: blogs = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('https://ruec-server.vercel.app/blogs');
    return res.json();
  });

  const handleApprove = item => {
    setLoading(true);
    fetch(`https://ruec-server.vercel.app/blogs/${item._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          toast.success('Blog Approved');
          setIsLoading(false);
        }
      })
      .catch(error => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleRemove = blog => {
    setDeleting(true);

    fetch(`https://ruec-server.vercel.app/blogs/${blog._id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 1) {
          setDeleting(false);
          refetch();
          toast.success('Blog has been removed');
        }
      })
      .catch(error => {
        setDeleting(false);
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
            <Helmet><title>Add Blogs</title></Helmet>
            <Container>
              <div className="pt-28">
                <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  <img src={logo} alt="" width={50} />
                  <h1 className='md:text-3xl text-xl font-bold text-center uppercase text-[#136734]'>Add Blogs</h1>
                </div>
              </div>

              <div className='pt-8 pb-16'>
                {
                  blogs.map(item => {
                    return (
                      <div key={item._id} className="card w-full md:card-side bg-base-100 shadow-xl relative">
                        <figure className='w-72 m-auto'><img src={item.image} alt="Movie" /></figure>
                        <div className="card-body w-full">
                          <h2 className="card-title text-3xl">{item.heading}</h2>
                          <div className='flex flex-col items-start'>
                            <div className='flex items-center gap-4'>
                              <p className=' flex items-center gap-2'>{item.name}</p> |
                              <small className='text-xs flex items-center gap-2 mt-1'> {item.date}</small>
                            </div>
                            <p className='mt-8 text-justify'>{item.text}</p>
                          </div>
                          <button className='absolute top-0 right-0 px-2 py-1 border-[1px] rounded-lg bg-green-600 hover:scale-105 hover:bg-green-700 text-white font-semibold duration-500 hover:duration-500'
                            onClick={() => handleApprove(item)}>
                            {loading ? 'Wait..' :
                              'Approve'
                            }
                          </button>
                          <button className='absolute top-9 right-0 px-2 py-1 border-[1px] rounded-lg bg-red-600 hover:scale-105 hover:bg-red-700 text-white font-semibold duration-500 hover:duration-500'
                            onClick={() => handleRemove(item)}>
                            {deleting ? 'Wait..' :
                              'Remove'
                            }
                          </button>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </Container>
        </>
      )}
    </>
  );
};

export default AddBlogs;