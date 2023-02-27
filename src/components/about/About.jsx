import React from 'react'
import './about.css';
import Me from '../../assets/me-about.jpg'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { GiNetworkBars } from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Entérate</h5>
      <h2>Sobre mi</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about_me-image'>
            <img src={Me} alt="eric" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <AiFillSafetyCertificate className='about__icon'/>
              <h5>Experiencia</h5>
              <small>4+ Años</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>11+ Global</small>
            </article>
            <article className='about__card'>
              <GiNetworkBars className='about__icon'/>
              <h5>Proyectos</h5>
              <small>7+ Completados</small>
            </article>
          </div>
          <p>
          ¡Hola! mi nombre es Eric, soy desarrollador front-end con 4 años de experiencia en programación Javascript. Soy competente en el uso de los frameworks ReactJS y NextJS, así como WordPress y Elementor Pro. Mis principales intereses son la optimización web a través de SEO y diseño web, incluida la creación de páginas de destino y sitios web de captura de clientes potenciales. También soy un desarrollador apasionado que siempre está buscando nuevos desafíos y oportunidades para mejorar sus habilidades.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>            
      </div>
    </section>
  )
}

export default About

