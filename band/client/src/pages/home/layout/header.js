import React from 'react';
import "../styles/header.css"


const Header = () => {
  return (
    <div className='header'>
        <ul className='nav'>
            <li>
                <a href=''>Home</a>
            </li>
            <li>
                <a href=''>Band</a>
            </li>
            <li>
                <a href=''>Tour</a>
            </li>
            <li>
                <a href=''>Contact</a>
            </li>
            <li>
                <a href=''>
                    More
                    <i class="fa-solid fa-caret-down"></i>
                </a>
                <ul className='subnav'>
                    <li><a href=''>Merchandise</a></li>
                    <li><a href=''>Extras</a></li>
                    <li><a href=''>Media</a></li>

                </ul>
            </li>
        </ul>
        
        <div className='search-btn' > 
            <i className='fa fa-search' fa fa-search></i>
        </div>
    </div>
  )
}

export default Header





