import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Foods from '../../Components/Foods/Foods';
import Services from '../../Components/Services/Services';
import Footer from '../../Components/Footer/Footer';
import Menu from '../../Components/Menu/Menu';

function Home() {
  return (
    <>
      <Banner />
      <Menu />
      <Foods />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
