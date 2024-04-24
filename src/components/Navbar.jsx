import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='navFlex'>
            <div className='navLogo'>
                MC.
            </div>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/projects'>Projects</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
                <button>
                    Hello 
                </button>
            </ul>
        </nav>
    </>
  )
}

export default Navbar