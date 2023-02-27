import React from 'react'
import './footer.css'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo'>MOSVEL</a>
      <ul className='permalink'>
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">Sobre</a></li>
        <li><a href="/#experience">Experiencia</a></li>
        <li><a href="/#services">Servicios</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#testimonials">Testimonios</a></li>
        <li><a href="/#contact">Contacto</a></li>   
      </ul>

      <div className="footer__socials">
        <a href="/#" target='_blank' rel='noreferrer noopener'><BsTwitter /></a>
        <a href="https://www.instagram.com/ericmosvel/" target='_blank' rel='noreferrer noopener'><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/ericmosquera/" target='_blank' rel='noreferrer noopener'><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mosvel portfolio. All rights reserved.</small>      
      </div>  
    </footer>
  )
}

export default Footer