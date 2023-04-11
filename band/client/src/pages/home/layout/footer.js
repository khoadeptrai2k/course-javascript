/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../styles/footer.css"
import { IconsFooter } from '../untils/iconFooter'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social'>
        <div className='social-list'>
          {IconsFooter.map((current_value, index) => (
            <a key={index}><i class={`fa-brands ${current_value.nameIcons}`}></i></a>
          ))}
        </div>
      </div>
      <p className='copyright'>Powered by <a href=''>w3.css</a></p>
    </div>
  )
}

export default Footer