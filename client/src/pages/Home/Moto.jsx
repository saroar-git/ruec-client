import education from '../../assets/logo/education.png'
import innovation from '../../assets/logo/puzzle.png'
import research from '../../assets/logo/analytics.png'
import logo from '/logo.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

const Moto = () => {
  return (
    <>
      <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
        <LazyLoadImage effect="blur" loading='lazy'  src={logo} alt="" width={60} />
        <h1 className='md:text-4xl text-2xl font-bold text-center uppercase text-[#136734]'>We work on</h1>
      </div>
      <div className='mb-24 mt-14 grid grid-cols-1 md:grid-cols-3 md:gap-10' >
        
        <div className='flex flex-col items-center gap-4 group' data-aos="fade-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
          <div className='mask mask-hexagon bg-slate-200 p-8'>
            <LazyLoadImage effect="blur" loading='lazy'  src={education} alt="" width={100} className='group-hover:scale-110 hover:duration-500 duration-500' />
          </div>
          <h2 className='md:text-3xl text-xl font-semibold'>Education</h2>
          <p className='text-justify' >We believe in the power of education to transform lives. We aim to promote a love for learning, critical thinking, and intellectual curiosity among our members. Through various educational activities, workshops, and seminars, we aim to create an enriching educational experience that goes beyond the confines of traditional classrooms.</p>
        </div>

        <div className='flex flex-col items-center gap-4 my-16 md:my-0 group' data-aos="fade-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <div className='mask mask-hexagon bg-slate-200 p-8'>
            <LazyLoadImage effect="blur" loading='lazy'  src={innovation} alt="" width={100} className='group-hover:scale-110 hover:duration-500 duration-500' />
          </div>
          <h2 className='md:text-3xl text-xl font-semibold'>Innovation</h2>
          <p className='text-justify'>We recognize the importance of innovation in education. Our club is committed to embracing innovative teaching methodologies, technologies, and approaches to enhance the learning process. We encourage our members to think outside the box, explore new ideas, and seek creative solutions to educational challenges.</p>
        </div>

        <div className='flex flex-col items-center gap-4 group' data-aos="fade-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="3000">
          <div className='mask mask-hexagon bg-slate-200 p-8'>
            <LazyLoadImage effect="blur" loading='lazy'  src={research} alt="" width={100} className='group-hover:scale-105 hover:duration-500 duration-500' />
          </div>
          <h2 className='md:text-3xl text-xl font-semibold'>Research</h2>
          <p className='text-justify'>We encourage the culture of research and believe that research is essential for deepening knowledge and understanding in any field. Through research-oriented activities, we aim to cultivate a spirit of inquiry, provide opportunities for collaborative research projects, and empower students to contribute to their discipline.</p>
        </div>
      </div>
    </>
  );
};

export default Moto;