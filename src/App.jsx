import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import HorizontalScroll from './components/HorizontalScroll';
import IntroAbout from './components/IntroAbout';
import Footer from './components/Footer';
import Slider from './components/Slider';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the animation duration as needed
      once: true, // Whether animation should only happen once
    });
  }, []);

  return (
    <>
      <Navbar />
      <Intro />
      <HorizontalScroll />
      <Slider />
      <IntroAbout />
      <Footer />
    </>
  );
};

export default App;
