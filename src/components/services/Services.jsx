import React from 'react'
import './services.css'
import { BsCheck } from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>Qué ofrezco</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="serivece__head">
            <h3>Search Engine Optimization (SEO)</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Servicios de optimización web mediante técnicas SEO.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Maquetación de contenidos por taxonomias.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Auditorías de sitios web para identificar problemas técnicos.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Investigación de palabras clave para identificar potenciales keywords relevantes.</p>
            </li>                      
          </ul>
        </article>
      {/* END OF UI/UX */}

      <article className='service'>
          <div className="serivece__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Construcción de landing pages y sitios web orientados a la captación de leads.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Construcción rápida de website's usando Wordpress o Elementor Pro.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Servicios de soporte y mantenimiento de sitios web</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Servicios de desarrollo web utilizando frameworks ReactJS y NextJS.</p>
            </li>           
          </ul>
        </article>
      {/* END OF WEB DEVELOPER */}

      <article className='service'>
          <div className="serivece__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Desarrollar una estrategia de contenido que se alinee con el negocio.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Revisar y editar el contenido para garantizar la precisión, la claridad y la coherencia.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Desarrollo de contenido atractivo y compartible para plataformas de redes sociales.</p>
            </li>                    
          </ul>
        </article>
      {/* END OF CONTEN CREATION */}
      </div>
    </section>
  )
}

export default Services