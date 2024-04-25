import React from 'react'
import fblaImg from '../images/fblaImg.jpg'

const IntroAbout = () => {
  return (
    <>
        <div className='aboutFlex'>
            <img src={fblaImg} alt="" className='aboutImg'/>
            <div className='aboutText'>
                <h1 className='aboutTitle'>About Me</h1>
                <p className='aboutSubtext'>Welcome! I'm passionate about exploring the intersections of technology, creativity, and human connection. With a background in coding, I've always been drawn to the endless possibilities that emerge when we blend innovation with imagination. Whether it's delving into the intricacies of code, crafting compelling narratives, or unraveling the mysteries of the human psyche, I find joy in the journey of discovery. Join me as we navigate through the ever-evolving landscape of ideas, learning, and growth.</p>
                <br />
                <div className='aboutBtn'>
                    <a href="/about"><button>Learn More</button></a>     
                    <a href="https://github.com/mcarri355"><button>Github</button></a>   
                </div>
            </div>
        </div>
    </>
  )
}

export default IntroAbout