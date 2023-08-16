import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import Container from "../../components/Container";
import { TfiWrite } from "react-icons/tfi";
import logo from '/logo.png';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const Blogs = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('https://ruec-server.vercel.app/blogs')
      .then(res => res.json())
      .then(data => {
        const approvedBlogs = data.filter(blog => blog.status === 'approve');
        setBlogs(approvedBlogs);
      });
  }, []);

  const [likedBlogs, setLikedBlogs] = useState([]);

  const handleLikeToggle = (blogId) => {
    if (likedBlogs.includes(blogId)) {
      setLikedBlogs(likedBlogs.filter(id => id !== blogId));
    } else {
      setLikedBlogs([...likedBlogs, blogId]);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <>
          <Helmet><title>Blogs | RUEC</title></Helmet>
          <div className='flex flex-col items-center pt-10' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <img src={logo} alt="" width={60} />
            <h1 className='md:text-3xl text-2xl font-bold text-center uppercase text-[#136734]'>Blogs</h1>
          </div>
          <Container>
            <div className='py-16 grid grid-cols-1 md:grid-cols-2'>
              {blogs.map(item => {
                const isLiked = likedBlogs.includes(item._id);
                return (
                  <div key={item._id} className="card w-full bg-base-100 shadow-xl">
                    <figure className='w-full'><img src={item.image} alt="Movie" /></figure>
                    <div className="card-body w-full">
                      <h2 className="card-title text-2xl">{item.heading}</h2>
                      <div className='flex flex-col items-start'>
                        <div className='flex items-center gap-4'>
                          <p className='flex items-center gap-2'><TfiWrite text-xl />{item.name}</p> |
                          <small className='text-xs flex items-center gap-2 mt-1'><BsFillCalendarCheckFill /> {item.date}</small>
                        </div>
                        <p className='mt-8 text-justify'>{item.text}</p>
                        <p className='mt-4 flex items-center gap-2 justify-end w-full'>Likes
                          <span onClick={() => handleLikeToggle(item._id)} className='cursor-pointer'>
                            {isLiked ? <FcLike /> : <AiOutlineHeart />}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Blogs;
