import React from 'react'
import './file.css'
import '../index.css'
import {FaInstagram, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { ExternalLink } from 'react-external-link';

const Footer = () => {
  return (
    <div className='footer'>
       <div>© Sudarshan Karthik - 20MIS1110</div>
        <div>
                <ExternalLink href="https://twitter.com/Sudarshan_Karth">
                <FaTwitter className='icon'/>
                </ExternalLink>
                <ExternalLink href="https://www.instagram.com/sudarshan_karthiktk/">
                <FaInstagram className='icon'/>
                </ExternalLink>
                <ExternalLink href="https://github.com/sudarshankarthik">
                <FaGithub className='icon'/>
                </ExternalLink>
                <ExternalLink href="https://example.com">
                <FaLinkedin className='icon'/>
                </ExternalLink>
        </div>
    </div>
  )
}

export default Footer   