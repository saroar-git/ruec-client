import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScaleLoader } from 'react-spinners';
import Container from '../../components/Container';
import { GrClose } from "react-icons/gr";

import img1 from '../../assets/images/img0.jpg';
import img13 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img19 from '../../assets/images/img3.jpg';
import img3 from '../../assets/images/img4.jpg';
import img18 from '../../assets/images/img5.jpg';
import img4 from '../../assets/images/img6.jpg';
import img17 from '../../assets/images/img7.jpg';
import img5 from '../../assets/images/img8.jpg';
import img16 from '../../assets/images/img9.jpg';
import img21 from '../../assets/images/img10.jpg';
import img15 from '../../assets/images/img11.jpg';
import img7 from '../../assets/images/img12.jpg';
import img14 from '../../assets/images/img13.jpg';
import img8 from '../../assets/images/img14.jpg';
import img6 from '../../assets/images/img15.jpg';
import img9 from '../../assets/images/img16.jpg';
import img12 from '../../assets/images/img17.jpg';
import img10 from '../../assets/images/img18.jpg';
import img11 from '../../assets/images/img19.jpg';
import img20 from '../../assets/images/img20.jpg';

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  let data = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
    { id: 5, imgSrc: img5 },
    { id: 6, imgSrc: img6 },
    { id: 7, imgSrc: img7 },
    { id: 8, imgSrc: img8 },
    { id: 9, imgSrc: img9 },
    { id: 10, imgSrc: img10 },
    { id: 11, imgSrc: img11 },
    { id: 12, imgSrc: img12 },
    { id: 13, imgSrc: img13 },
    { id: 14, imgSrc: img14 },
    { id: 15, imgSrc: img15 },
    { id: 16, imgSrc: img16 },
    { id: 17, imgSrc: img17 },
    { id: 18, imgSrc: img18 },
    { id: 19, imgSrc: img19 },
    { id: 20, imgSrc: img20 },
    { id: 21, imgSrc: img21 },
  ];

  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState('');

  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
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
          <Container>
            <div className="pt-28 pb-16">
                <div className={model ? "model open" : "model"}>
                  <img src={tempImg} alt="" />
                  <div className="close-icon" onClick={() => setModel(false)}>
                    <GrClose className='rounded-full p-2 bg-slate-200' />
                  </div>
                </div>
                
              <div className='gallery'>
                {
                  data.map((item) => {
                    return (
                      <div className='pics' key={item.id} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" className='border-8 rounded' data-aos="fade-up" data-aos-easing="ease-out-cubic"
                          data-aos-duration="1000" />
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