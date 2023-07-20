import logo from '/logo.png';
import Marquee from 'react-fast-marquee';
import zero from '../../assets/images/feature/zero.jpeg';
import one from '../../assets/images/feature/one.png';
import two from '../../assets/images/feature/two.jpg';
import three from '../../assets/images/feature/three.png';
import four from '../../assets/images/feature/four.jpeg';
import five from '../../assets/images/feature/five.png';
import six from '../../assets/images/feature/six.png';
import seven from '../../assets/images/feature/seven.png';
import eight from '../../assets/images/feature/eight.png';
import nine from '../../assets/images/feature/nine.png';
import ten from '../../assets/images/feature/ten.png';

const Feature = () => {
  return (
    <>
      <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
        <img src={logo} alt="" width={60} />
        <h1 className='md:text-4xl text-2xl font-bold text-center uppercase text-[#136734]'>We've been featured on</h1>
      </div>
      <div className='mb-24 mt-14' >
        <Marquee gradient>
          <div className='mx-10'>
            <img src={one} alt="" width={230}/>
          </div>

          <div>
            <img src={zero} alt="" width={230}/>
          </div>

          <div className='mx-10'>
            <img src={two} alt="" width={230} />
          </div>

          <div>
            <img src={three} alt="" width={220} />
          </div>

          <div className='mx-10'>
            <img src={four} alt="" width={230} />
          </div>

          <div>
            <img src={five} alt="" width={230} />
          </div>

          <div className='mx-10'>
            <img src={six} alt="" width={230} />
          </div>

          <div>
            <img src={seven} alt="" width={230} />
          </div>

          <div className='mx-10'>
            <img src={eight} alt="" width={180} />
          </div>

          <div>
            <img src={nine} alt="" width={180} />
          </div>
          
          <div className='ml-10'>
            <img src={ten} alt="" width={230} />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Feature;