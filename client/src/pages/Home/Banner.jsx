import React, { useState, useEffect, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Banner = () => {
      const slides = [
            {
                  url: 'https://i.ibb.co/rbzX36s/img1.jpg',
            },
            {
                  url: 'https://i.ibb.co/s5G78kP/img2.png',
            },
            {
                  url: 'https://i.ibb.co/HYXwC13/img3.png',
            },
            {
                  url: 'https://i.ibb.co/mFtLyCF/img4.png',
            },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);
      const autoplayRef = useRef(null);

      const nextSlide = () => {
            setCurrentIndex((currentIndex) =>
                  currentIndex === slides.length - 1 ? 0 : currentIndex + 1
            );
      };

      const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex);
      };

      useEffect(() => {
            const startAutoplay = () => {
                  autoplayRef.current = setInterval(() => {
                        nextSlide();
                  }, 3500);
            };

            startAutoplay();

            const stopAutoplay = () => {
                  clearInterval(autoplayRef.current);
            };

            return () => {
                  stopAutoplay();
            };
      }, []); 

      return (
            <div
                  className="h-[500px] md:h-[580px] w-full mx-auto relative my-24"
                  data-aos="zoom-out" data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='w-full h-full rounded bg-center bg-cover object-cover duration-500 shadow-2xl'
                  >
                        <div className="absolute rounded flex justify-center md:justify-start p-4 w-full h-full left-0 top-0 inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-90 text-start">

                              <div className='text-white space-y-8 md:space-y-9 py-12 md:px-12 md:py-20 md:w-[70%]'>
                                    <h2 className='md:text-5xl text-2xl font-bold'>Rajshahi University Education Club (RUEC)</h2>

                                    <p className="text-sm md:text-lg md:w-11/12 text-gray-300">The Rajshahi University Education Club is the pioneering education club in Bangladesh, dedicated to advancing education, fostering innovation, and promoting research. Our mission is to empower students and contribute to the development of a knowledgeable and progressive society. Join us on this transformable journey of learning and exploration.</p>

                                    <div className="text-center md:text-start">
                                    <Link to='/about' className="relative inline-flex items-center justify-start py-2 md:py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#136734] group-hover:h-full"></span>
                                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                </span>
                                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                </span>
                                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white md:font-bold">About Us</span>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div className='flex top-4 justify-center py-2'>
                        {slides.map((slide, slideIndex) => (
                              <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className='text-2xl cursor-pointer'
                              >
                                    <RxDotFilled />
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default Banner;