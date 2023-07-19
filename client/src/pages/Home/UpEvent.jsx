import logo from '/logo.png';
import Marquee from 'react-fast-marquee';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import img1 from '../../assets/images/img2.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img2.jpg';

const UpEvent = () => {
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState('');

  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModel(true);
  };

  let data = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
  ];

  return (
    <>
      <div className='flex flex-col items-center mb-12' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <img src={logo} alt="" width={60} />
        <h1 className='md:text-4xl text-2xl font-bold text-center uppercase text-[#136734]'>upcoming events</h1>
        <p className='text-[#136734] opacity-70 text-center'>Date, time, and place could be change by the decision of the RUEC authority.</p>
      </div>

      <div className={model ? 'model open' : 'model'}>
        <img src={tempImg} alt="" />
        <div className="close-icon" onClick={() => setModel(false)}>
          <GrClose className='rounded-full p-2 bg-slate-200' />
        </div>
      </div>

      <div className='mb-24 mt-14'>
        <Marquee pauseOnHover>
          {data.map((item) => (
            <div className='md:mx-14 mx-4 my-0 py-0' key={item.id}>
                <div className='relative'>
                  <p className="absolute top-1 right-1 px-3 rounded-bl-xl bg-white border-2">
                    <span className='animate-pulse duration-500 font-semibold text-red-700'>new</span>
                  </p>
                  <div
                    onClick={() => getImg(item.imgSrc)}
                    className='rounded shadow-xl border-4 w-72 md:w-96'
                  >
                    <img src={item.imgSrc} alt="" className="w-full h-full object-cover cursor-pointer" />
                  </div>
                </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default UpEvent;