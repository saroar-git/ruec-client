import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import logo from '/logo.png';
import Container from "../../components/Container";
import Cards from '../../components/Cards';

const Committee = () => {
  const [committee, setCommittee] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/committee')
      .then(res => res.json())
      .then(data => setCommittee(data));
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const sortedCommittee = committee.sort((a, b) => a.id - b.id);
  const presidentAndGeneralSecretary = sortedCommittee.filter(
    (item) => item.position === 'President' || item.position === 'General Secretary'
  );
  const vicePresident = sortedCommittee.filter(
    (item) => item.position === 'Vice President'
  );
  const jointSecretary = sortedCommittee.filter(
    (item) => item.position === 'Joint Secretary'
  );
  const others = sortedCommittee.filter(
    (item) => item.position !== 'Joint Secretary' && item.position !== 'Vice President' && item.position !== 'President' && item.position !== 'General Secretary'
  );

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <>
          <Helmet><title>Executive Committee | RUEC</title></Helmet>
          <div className='flex flex-col items-center pt-10' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <img src={logo} alt="" width={60} />
            <h1 className='md:text-3xl text-2xl font-bold text-center uppercase text-[#136734]'>our executive committee</h1>
          </div>

            <Container>
              <div className='md:pt-8 pb-16'>
                <div>
                  {presidentAndGeneralSecretary &&
                    <section className="container my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {presidentAndGeneralSecretary.map((item) => (
                        <Cards key={item._id} content={item} />
                      ))}
                    </section>
                  }
                </div>
                <hr className='border-2 border-green-600'/>
                <div>
                  {vicePresident &&
                    <section className="container my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {vicePresident.map((item) => (
                        <Cards key={item._id} content={item} />
                      ))}
                    </section>
                  }
                </div>
                <hr className='border-2 border-green-600' />
                <div>
                  {jointSecretary &&
                    <section className="container my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {jointSecretary.map((item) => (
                        <Cards key={item._id} content={item} />
                      ))}
                    </section>
                  }
                </div>
                <hr className='border-2 border-green-600' />

                <div>
                  {others &&
                    <section className="container my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {others.map((item) => (
                        <Cards key={item._id} content={item} />
                      ))}
                    </section>
                  }
                </div>
              </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Committee;
