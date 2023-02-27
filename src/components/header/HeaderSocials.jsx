import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socialds'>
        <a href='https://www.linkedin.com/in/ericmosquera/' target='_blank' rel='noreferrer noopener'><BsLinkedin/></a>
        <a href='https://github.com/ericmosvel' target='_blank' rel='noreferrer noopener'><BsGithub /></a>
        <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><BsTwitter /></a>
    </div>    
  )
}

export default HeaderSocials