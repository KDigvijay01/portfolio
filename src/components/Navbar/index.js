import React, { useState } from 'react';
import "./Navbar.styles.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
        <nav className='container'>
            <a className='title' href='/'>Portfolio</a>
            <div className='navbar_menu'>
            <img 
            src= {menuOpen ? "assets/nav/closeIcon.png": "assets/nav/menuIcon.png"}
                alt="menuBtn"
              className='menuBtn'

                onClick={()=>setMenuOpen(!menuOpen)}
              />
            <ul className={`content ${menuOpen && "menuOpen"}`}
                onClick={()=>setMenuOpen(false)}
            >
                <li className='contentItem'>
                    <a href='#about'>About</a>
                </li>

                <li className='contentItem'>
                    <a href='#experience'>Experience</a>
                </li>
                <li className='contentItem'>
                    <a href='#projects'>Projects</a>
                </li>
                <li className='contentItem'>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            </div>
           
        </nav>
  )
}

export default Navbar