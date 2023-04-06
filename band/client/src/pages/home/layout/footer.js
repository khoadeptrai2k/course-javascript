import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-list'>
        <a><i class="fa-brands fa-square-facebook"></i></a>
        <a><i class="fa-brands fa-instagram"></i></a>
        <a><i class="fa-brands fa-snapchat"></i></a>
        <a><i class="fa-brands fa-pinterest-p"></i></a>
        <a><i class="fa-brands fa-twitter"></i></a>
        <a><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
      <p className='copyright'>Powered by <a href=''>w3.css</a></p>
    </div>
  )
}

export default Footer