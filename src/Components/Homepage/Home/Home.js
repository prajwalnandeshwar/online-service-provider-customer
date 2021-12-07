import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
  return (
    <section className='home-bg bg-watermark'>
      <Navbar />
      <div className='fs-1 mt-5 pt-5 container-fluid ms-5 ps-4'>
        <p className='pt-4'>
          {' '}
          No <br /> More <br /> Excuses
        </p>
      </div>
      <div className='service-section-height'>
        <Services />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
