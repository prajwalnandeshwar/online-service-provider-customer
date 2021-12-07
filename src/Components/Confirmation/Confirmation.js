import React from 'react';
import Footer from '../Homepage/Footer/Footer';
import Navbar from '../Homepage/Navbar/Navbar';

const Confirmation = () => {
  return (
    <section className='bg-watermark'>
      <Navbar />
      <div className='fs-1 mt-5 pt-5 container-fluid px-5'>
        <div className='pt-4 px-4'>
          {' '}
          <span>NO</span> <br /> <span>MORE</span> <br /> <span>EXCUSES</span>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <div>
            <lottie-player
              src='https://assets10.lottiefiles.com/temp/lf20_pRPtKN.json'
              background='transparent'
              speed='1'
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
            ></lottie-player>
            <p className='text-center'>
              Payment Succeed <br /> Thank You.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Confirmation;
