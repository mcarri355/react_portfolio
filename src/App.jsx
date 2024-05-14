import React, { useEffect, useRef } from 'react';
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
      duration: 1000,
      once: true,
    });

    // Scroll to the slider element on component mount
    const sliderElement = document.getElementById('slider');
    if (sliderElement) {
      sliderElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Intro />
      <HorizontalScroll />
      <div id="slider">
        <Slider />
      </div>
      <IntroAbout />
      <Footer />
    </>
  );
};

export default App;
