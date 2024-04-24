import React from 'react';
import "./Contact.styles.css";


export const Contact = () => {

  return (
        <footer className='contactContainer' id="contact">
            <div className='left'>
                <h2 className='contactTitle'>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>

            <ul className='contactLinks'>
                <li className='contactLink'>
                    <img src="assets/contact/emailIcon.png" alt="emailIcon"/>
                    <a href="mailto:kumardigvijay01@gmail.com">kumardigvijay01</a>
                </li>

                <li className='contactLink'>
                    <img src="assets/contact/linkedinIcon.png" alt="linkedinIcon"/>
                    <a href="https://www.linkedin.com/in/digvijay-kumar-0310421b0/" target="_blank" rel="noreferrer">my LinkedIn</a>
                </li>

                <li className='contactLink'>
                    <img src="assets/contact/githubIcon.png" alt="githubIcon"/>
                    <a href="https://github.com/KDigvijay01" target="_blank" rel="noreferrer">KDigvijay01</a>
                </li>
            </ul>
        </footer>
  )
}
