import React from 'react'
import './testimonials.css'
import AVAT1 from '../../assets/avat1.png'
import AVAT2 from '../../assets/avat2.png'
import AVAT3 from '../../assets/avat3.png'
import AVAT4 from '../../assets/avat4.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVAT1,
    name: 'Gillermo Rodriguez',
    review: 'Luchábamos para que nuestro sitio web obtuviera una clasificación más alta en las páginas de resultados de los motores de búsqueda, pero después de trabajar con Eric, vimos una mejora significativa en la visibilidad de nuestro sitio web. Su conocimiento de las mejores prácticas de SEO nos ayudó a optimizar nuestro sitio web y generar más tráfico orgánico a nuestro sitio.',
  },
  {
    avatar: AVAT2,
    name: 'Luis Enrique',
    review: 'Eric hizo un trabajo excepcional al crear una sección de formularios para nuestro website . Su conocimiento de WordPress nos ayudó a plasmar nuestra idea en digital. Respondió a nuestras necesidades y brindó soporte y mantenimiento continuos para garantizar que nuestro sitio web estuviera siempre actualizado. Recomendamos encarecidamente sus servicios a cualquiera que busque crear un sitio web de comercio electrónico.',    
  },
  {
    avatar: AVAT3,
    name: 'Esteban T.',
    review: 'Contratamos a Eric para administar nuestra linea de sitios web de educación online. Respondió a nuestras necesidades y proporcionó actualizaciones periódicas durante todo el proceso. Recomendamos encarecidamente sus servicios a cualquiera que busque crear una aplicación móvil.',    
  },
  {
    avatar: AVAT4,
    name: 'Martha Guzman',
    review: 'Trabajar con Eric fue una gran experiencia. Pudo tomar nuestra visión y convertirla en un sitio web hermoso y funcional. Su experiencia en ReactJS y NextJS ayudó a crear un sitio que no solo era visualmente atractivo sino también muy receptivo. Recomiendo encarecidamente sus servicios a cualquiera que busque crear un sitio web profesional.',    
  }
  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reseña de Clientes</h5>
      <h2>Testimonios</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />            
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }      
      </Swiper>
    </section>
  )
}

export default Testimonials