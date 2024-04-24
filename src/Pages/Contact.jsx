import React, { useState } from 'react';
import '../Styles/css/Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

function Contact() {
  const [focus, setFocus] = useState({}); // State to track focused input fields

  const handleFocus = (e) => {
    setFocus({ ...focus, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocus({ ...focus, [e.target.name]: false });
    }
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Thank you for considering reaching out to me. Please fill out the form below, or contact me through my socials and I'll get back to you as soon as possible. Looking forward to connecting!
          </p>

          <div className="info">
            <div className="information">
              <FaMapMarkerAlt className="icon" />
              <p>1234 Street St, OH 1234</p>
            </div>
            <div className="information">
              <FaEnvelope className="icon" />
              <p>goofy@goober.com</p>
            </div>
            <div className="information">
              <FaPhone className="icon" />
              <p>(555)-555-5555</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with me :</p>
            <div className="social-icons">
              <a href="#">
                <AiFillFacebook className='svgImg'/>
              </a>
              <a href="#">
                <AiOutlineTwitter className='svgImg'/>
              </a>
              <a href="#">
                <AiFillInstagram className='svgImg'/>
              </a>
              <a href="#">
                <AiFillLinkedin className='svgImg'/>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact Me</h3>
            <div className={`input-container ${focus.name ? 'focus' : ''}`}>
              <input type="text" name="name" className="input" onFocus={handleFocus} onBlur={handleBlur} />
              <label>Name</label>
              <span>Name</span>
            </div>
            <div className={`input-container ${focus.email ? 'focus' : ''}`}>
              <input type="email" name="email" className="input" onFocus={handleFocus} onBlur={handleBlur} />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className={`input-container ${focus.phone ? 'focus' : ''}`}>
              <input type="tel" name="phone" className="input" onFocus={handleFocus} onBlur={handleBlur} />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className={`input-container textarea ${focus.message ? 'focus' : ''}`}>
              <textarea name="message" className="input" onFocus={handleFocus} onBlur={handleBlur}></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
