import logo from '/logo.png';
import Marquee from 'react-fast-marquee';
import one from '../../assets/images/collab/a1.png';
import two from '../../assets/images/collab/a2.png';
import three from '../../assets/images/collab/a3.jpg';
import four from '../../assets/images/collab/a4.png';
import five from '../../assets/images/collab/a5.png';
import six from '../../assets/images/collab/a6.png';
import seven from '../../assets/images/collab/a7.png';
import eight from '../../assets/images/collab/a8.png';

const Collaboration = () => {
  return (
    <>
      <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
        <img src={logo} alt="" width={60} />
        <h1 className='md:text-4xl text-2xl font-bold text-center uppercase text-[#136734]'>We've collaborated with</h1>
      </div>
      <div className='mb-24 mt-14' >
        <Marquee>
          <div className='px-3 py-2 border-4 rounded-xl shadow-2xl'>
            <img src={one} alt="" width={230} />
          </div>

          <div className='mx-10 px-3 py-2 border-4 rounded-xl shadow-2xl'>
            <img src={two} alt="" width={230} />
          </div>

          <div className='px-3 py-2 border-4 rounded-xl shadow-2xl'>
            <img src={three} alt="" width={220} />
          </div>

          <div className='mx-10 px-3 py-2 border-4 rounded-xl shadow-2xl'>
            <img src={four} alt="" width={230} />
          </div>

          <div className='px-3 py-2 border-4 rounded-xl shadow-2xl'>
            <img src={five} alt="" width={230} />
          </div>

          <div className='mx-10 px-3 py-2 border-4 rounded-xl shadow-2xl'>
            <img src={six} alt="" width={230} />
          </div>

          <div className='px-3 py-2 border-4 rounded-xl shadow-2xl'>
            <img src={seven} alt="" width={230} />
          </div>

          <div className='mx-10 px-3 py-2 border-4 rounded-xl shadow-2xl'>
            <img src={eight} alt="" width={180} />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Collaboration;