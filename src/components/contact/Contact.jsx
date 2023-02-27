import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsTelegram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  /* código copiado desde emailjs */
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zg6whc9', 'template_kbgasux', form.current, '_FZ0aNukIpqjbXO8I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  /* código copiado desde emailjs  */

  return (
    <section id='contact'>
      <h5>Conversemos</h5>
      <h2>Contáctame</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>eric.mosvel@gmail.com</h5>
            <a href='mailto:eric.mosvel@gmail.com' rel='noreferrer noopener' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Message</h5>
            <a href='https://t.me/Ericmosvel' rel='noreferrer noopener' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Message</h5>
            <a href='https://api.whatsapp.com/send?phone=+573184792970&text=Hola%20vi%20tu%20portafolio%20' rel='noreferrer noopener' target='_blank'>Send a message</a>
          </article>
        </div>
        {/** END OF CONTACT OPTIONS **/}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>          
        </form>
      </div>
    </section>
  )
}

export default Contact