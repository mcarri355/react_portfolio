import React, { useState, useEffect } from 'react';
import '../Styles/css/intro.css';
import Blob from '../images/blob.svg'

const Intro = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Developer", "Designer", "Innovator"];
  const [displayText, setDisplayText] = useState(texts[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = texts[textIndex];
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => {
          setIsDeleting(true);
          setTimeout(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setIsDeleting(false);
          }, 1000);
        }, 1000);
      } else {
        if (isDeleting) {
          setDisplayText((prevText) => prevText.substring(0, prevText.length - 1));
        } else {
          setDisplayText((prevText) => currentText.substring(0, prevText.length + 1));
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <>
      <div className='introFlex'>
        <div className='introText'>
          Hello,
          <br />
          My Name Is
          <br />
          <span className='textGradient'>Matthew Carrillo</span>
          <br />
          I Am A{' '}
          <span className='textGradient'>
            {displayText}
          </span>
          <br />
          <div className='introBtn'>
            <button className='btnGradient'>About Me</button>
            <button>Contact</button>
          </div>
        </div>
          <div className='introImg'>
            <img src={Blob} alt="" className='blobSvg'/>
            <div className='introCircle'>
            <div className='outerCircle'>
                <div className='middleCircle'>
                    <div className='innerCircle'></div>
                </div>
            </div>
            </div>
        </div>


      </div>
    </>
  );
};

export default Intro;
