import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ScaleLoader } from "react-spinners";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <>
          <Helmet><title>About | RUEC</title></Helmet>
          <Container>
            <div className="pt-28 pb-16">
              <h1 className="text-2xl md:text-5xl font-extrabold text-center text-[#136734] mb-5" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                Welcome to the Rajshahi University Education Club!
              </h1>
              <p className="font-semibold md:text-center text-justify" data-aos="fade-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                At Rajshahi University Education Club, we are passionate about education and dedicated to creating a transformable learning experience for students. As the first club at Rajshahi University solely focused on education, we strive to cultivate a vibrant community where students can thrive academically, foster innovation, and engage in meaningful research.
              </p>

              <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <h3 className="mt-10 md:text-2xl text-xl font-bold text-[#59BB4D] text-center" >Our Mission</h3>
                <p className="md:text-lg font-semibold text-justify md:text-center">Our mission is to provide a platform that fosters a dynamic learning environment, promoting education, innovation, and research among students. We believe that education is not limited to textbooks and classrooms; it is a lifelong journey of exploration, discovery, and personal growth. Through our club, we aim to inspire and empower students to embrace education as a catalyst for positive change in their lives and society.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
                <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  <h3 className="mt-5 md:mt-0 md:text-2xl text-xl font-bold text-[#59BB4D] text-center">Our Values</h3>
                  <p className="md:text-lg font-semibold text-justify mt-1"><span className="md:text-xl font-extrabold">Education:</span> We believe that education is the key to unlocking potential. We strive to cultivate a love for learning, critical thinking, and intellectual curiosity among our members. By offering a diverse range of educational activities, including workshops, seminars, and guest lectures, we aim to enhance academic excellence and nurture well-rounded individuals.</p>

                  <p className="md:text-lg font-semibold text-justify my-3"> <span className="md:text-xl font-extrabold">Innovation:</span> We recognize the power of innovation in education. We embrace innovative teaching methodologies, technology-driven learning approaches, and creative problem-solving techniques. Our club encourages members to think outside the box, explore new ideas, and develop innovative solutions to educational challenges.</p>

                  <p className="md:text-lg font-semibold text-justify"><span className="md:text-xl font-extrabold">Research:</span> We promote a culture of research and scholarly inquiry. Through research-oriented activities, we provide opportunities for students to engage in independent and collaborative research projects. We believe that research expands knowledge, sharpens analytical skills, and fosters a deeper understanding of the subjects we study.</p>
                </div>

                <div data-aos="fade-left" data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  <h3 className="mt-5 md:mt-0 md:text-2xl text-xl font-bold text-[#59BB4D] text-center">What We Offer?</h3>
                  <p className="md:text-lg font-semibold text-justify mt-1"><span className="md:text-xl font-extrabold">Engaging Workshops: </span>We organize interactive workshops led by experts in various fields to enhance academic skills, promote personal development, and foster critical thinking among our members.</p>

                  <p className="md:text-lg font-semibold text-justify my-3"><span className="md:text-xl font-extrabold">Thought-Provoking Seminars:</span> Our seminars feature renowned speakers who share their expertise, insights, and experiences to inspire and broaden our members' horizons.</p>

                  <p className="md:text-lg font-semibold text-justify mb-3"><span className="md:text-xl font-extrabold">Collaborative Research Opportunities:</span> We facilitate research collaborations, connecting students with similar research interests and providing guidance and resources to undertake meaningful research projects.</p>

                  <p className="md:text-lg font-semibold text-justify"><span className="md:text-xl font-extrabold">Community and Networking:</span> We provide a supportive community where members can connect, share ideas, and collaborate on educational initiatives. Networking opportunities with like-minded individuals and professionals in various fields open doors to new opportunities and perspectives.</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <h3 className="md:text-2xl text-2xl font-bold text-[#59BB4D] text-center">Join Us</h3>
                <p className="md:text-lg font-semibold md:text-center text-justify">Whether you are a passionate learner, an aspiring researcher, or simply someone who believes in the power of education, we invite you to become a part of the Rajshahi University Education Club. Join us on this exciting journey of personal and academic growth, as we together strive to make a positive impact through education. Embrace the power of education, ignite your innovative spirit, and embark on a path of discovery with the RUEC.</p>
              </div>
            </div>

            <div className="text-center mb-16" data-aos="fade-up" data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">

              <p className="md:text-lg font-semibold text-center my-4"> Together, let's create a brighter future through education, innovation, and research.</p>

              <Link to='/login' className="relative inline-flex items-center justify-start py-2 pl-3 pr-8 overflow-hidden font-semibold text-[#136734] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#136734] group-hover:h-full"></span>
                <span className="absolute right-0 pr-2 duration-200 ease-out group-hover:translate-x-12">
                  <svg className="w-4 h-4 text-[#59BB4D] " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute left-0 pl-2 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white animate-pulse">Apply Now</span>
              </Link>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default About;