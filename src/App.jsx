import React from 'react'
import Navbar from './components/Navbar';
import Intro from './components/Intro'
import HorizontalScroll from './components/HorizontalScroll';
import IntroAbout from './components/IntroAbout';
import Footer from './components/Footer';
import Slider from './components/Slider';


const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Intro/>
    <HorizontalScroll></HorizontalScroll>
    <Slider></Slider>
    <IntroAbout></IntroAbout>
    <Footer></Footer>
    
    </>
  )
}

export default App