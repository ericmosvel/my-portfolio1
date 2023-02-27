import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Qué habilidades tengo</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detalis">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>              
            </article>

            <article className="experience__detalis">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Proficient</small>
              </div>              
            </article>

            <article className="experience__detalis">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className="experience__detalis">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className="experience__detalis">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Elementor Pro</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__detalis">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>WordPress</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detalis">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className="experience__detalis">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>API REST</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>         
        </div>
      </div>

    </section>
  )
}

export default Experience