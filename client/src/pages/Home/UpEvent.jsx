import logo from '/logo.png';
import { Link } from 'react-router-dom';

const UpEvent = () => {
  return (
    <>
      <div className='flex flex-col items-center mb-12' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
        <img src={logo} alt="" width={60} />
        <h1 className='md:text-4xl text-2xl font-bold text-center uppercase text-[#136734]'>upcoming events</h1>
        <p className='text-[#136734] opacity-70 text-center'>Date, time, and place could be change by the decision of the RUEC authority.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 mb-24'>
        <div className='w-full mx-auto'>
          <div className='indicator'>
            <p className="indicator-item badge border-2 border-[#59BB4D]"><span className='animate-pulse duration-500 font-semibold text-red-700'>new</span></p>
            <Link to='https://fb.me/e/SvPyPTJf' target='_blank' title='Education Fest 2022'>
              <img src='https://i.ibb.co/rbzX36s/img1.jpg' alt="" className='rounded shadow-xl border-4 border-[#59BB4D] md:w-[400px] w-[320px]' />
            </Link>
          </div>
        </div>

        <div className='w-full mx-auto my-10 md:my-0'>
          <div className='indicator'>
            <p className="indicator-item badge border-2 border-[#59BB4D]"><span className='animate-pulse duration-500 font-semibold text-red-700'>new</span></p>
            <Link to='https://fb.me/e/SvPyPTJf' target='_blank' title='Education Fest 2022'>
              <img src='https://i.ibb.co/rbzX36s/img1.jpg' alt="" className='rounded shadow-xl border-4 border-[#59BB4D] md:w-[400px] w-[320px]' />
            </Link>
          </div>
        </div>

        <div className='w-full mx-auto'>
          <div className='indicator'>
            <p className="indicator-item badge border-2 border-[#59BB4D]"><span className='animate-pulse duration-500 font-semibold text-red-700'>new</span></p>
            <Link to='https://fb.me/e/SvPyPTJf' target='_blank' title='Education Fest 2022'>
              <img src='https://i.ibb.co/rbzX36s/img1.jpg' alt="" className='rounded shadow-xl border-4 border-[#59BB4D] md:w-[400px] w-[320px]' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpEvent;