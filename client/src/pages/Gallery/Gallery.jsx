import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import Container from '../../components/Container';
import { GrClose } from "react-icons/gr";
import logo from '/logo.png';
import { useQuery } from '@tanstack/react-query';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const { data: data = [] } = useQuery(['Images'], async () => {
    const res = await fetch('http://localhost:5000/gallery');
    return res.json();
  })

  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState('');

  const getImg = (image) => {
    setTempImg(image);
    setModel(true);
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <>
            <Helmet><title>Gallery | RUEC</title></Helmet>
            <div className='flex flex-col items-center pt-10' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              <img src={logo} alt="" width={60} />
              <h1 className='md:text-3xl text-2xl font-bold text-center uppercase text-[#136734]'>Memories are here</h1>
            </div>

          <Container>
            <div className="py-16">
                <div className={model ? "model open" : "model"}>
                  <LazyLoadImage effect="blur" loading='lazy' src={tempImg} alt="" className='hover:scale-110 hover:duration-500 duration-500 cursor-pointer' />
                  <div className="close-icon" onClick={() => setModel(false)}>
                    <GrClose className='rounded-full p-2 bg-slate-200' />
                  </div>
                </div>
                
              <div className='gallery'>
                {
                  data.map((item) => {
                    return (
                      <div className='pics' key={item._id} onClick={() => getImg(item.image)} data-aos="fade-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <LazyLoadImage effect="blur" loading='lazy' src={item.image} alt="" className='border-8 rounded' title={item.name} />
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Gallery;