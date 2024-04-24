import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import '../Styles/css/Footer.css';

const Footer = () => {
   return (
    <footer className="footer">
      <div className="footer__container bd-container">
        <h2 className="footer__title">Matthew Carrillo</h2>
        <p className="footer__description">I am Matthew Carrillo and this is my portfolio</p>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/matthew-carrillo-8690902b8/" className="footer__link"><FaLinkedin /></a>
          <a href="https://github.com/mcarri355" className="footer__link"><FaGithub /></a>
          <a href="https://www.instagram.com/matthewcarrillo23/" className="footer__link"><FaInstagram /></a>
        </div>
        <p className="footer__copy">&#169; 2024 Matthew Carrillo. All rights are mine</p>
      </div>
    </footer>
  );
}

export default Footer;
