import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Accordion from '../components/Accordion';
import ProgressBar from '../components/ProgressBar';
import '../Styles/css/About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { gsap } from 'gsap';

const About = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className='aboutContainer'>
        <div className='aboutTop'>
          <div className='containerImg'>
            <Accordion className='accordionHeight'/>
          </div>
          <div className='containerInfo'>
            <div className='containerText'>
              <div className='containerTitle'>More About Me</div>
              <div className='containerSub'>               
                Greetings! I am deeply passionate about delving into uncharted territories and unveiling the latent potentials that lie within. With an insatiable curiosity and an unwavering pursuit of excellence, I am invigorated by challenges and continually seek out opportunities for personal and professional growth. I firmly believe in the transformative power of human connection and the immense value of collaboration. I am driven not only to inspire those around me but also to be inspired by their unique perspectives and experiences. My journey is characterized by an unrelenting thirst for knowledge, driven by a profound belief in the endless possibilities that learning affords. I am committed to continuously expanding my horizons, both intellectually and experientially, in order to broaden my understanding of the world and deepen my impact within it.
              </div>
            </div>
            <div className='containerSocials'>
              <a href="https://github.com/mcarri355" className='containerIcon'><FaGithub /></a>
              <a href="https://linkedin.com/in/yourusername" className='containerIcon'><FaLinkedin /></a>
              <button className='socialBtn'>Contact</button>
              <a href="https://twitter.com/yourusername" className='containerIcon'><FaTwitter /></a>
              <a href="https://instagram.com/yourusername" className='containerIcon'><FaInstagram /></a>
            </div>
          </div>
        </div>
        <br />
        <div className='aboutBottom'>
          <h1 className='skillsTitle'>Skills</h1>
          <div className='progressBars'>
            <ProgressBar></ProgressBar>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
