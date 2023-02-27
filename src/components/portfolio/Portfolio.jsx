import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portafolio1.png'
import IMG2 from '../../assets/portafolio2.png'
import IMG3 from '../../assets/portafolio3.png'
import IMG4 from '../../assets/portafolio4.png'
import IMG5 from '../../assets/portafolio5.png'
import IMG6 from '../../assets/portafolio6.png'

const data = [
  {
    id: 1,
    img: IMG1,
    title: 'Landing page - Curso básico de formación de pan de masa madre',
    // github: 'https://github.com/',
    demo: 'https://turbonegocios.store/pan-de-masa-madre-sin-gluten/'
  },
  {
    id: 2,
    img: IMG2,
    title: 'Landing page - Auditoría SEO & extructuración de contenido',    
    demo: 'https://veterinaria.zbrain.es/cursos-de-veterinaria/curso-de-auxiliar-de-clinica-veterinaria/'
  },
  {
    id: 3,
    img: IMG3,
    title: 'Website - Cursos de formación para emprendedores',    
    demo: 'https://turbonegocios.store/'
  },
  {
    id: 4,
    img: IMG4,
    title: 'Formularios - Asociación de empleados',    
    demo: 'https://fondesa.co/'
  },
  {
    id: 5,
    img: IMG5,
    title: 'Website - Estructuración de taxonomías y contenidos',    
    demo: 'https://formacion-sanidad.es/'
  },
  {
    id: 6,
    img: IMG6,
    title: 'Website - Nicho para portenciar la busqueda de trabajo',    
    demo: 'https://bifurca.site/'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo reciente</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, img, title, github, demo}) => {
            return (
              <article keu={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">                                   
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live Demo</a>
                </div>
              </article>
            )
          })
        }        
      </div>
    </section>
  )
}

export default Portfolio