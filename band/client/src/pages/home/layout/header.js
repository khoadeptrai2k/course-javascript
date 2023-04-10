import React, { useState, useEffect } from 'react';
import "../styles/header.css";


const Header = () => {

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document?.getElementsByClassName('header')[0];
        setHeaderHeight(header?.clientHeight);
    }, []);

    const handleShowMore = (e) => {
        e.preventDefault()
        const subnav = document.querySelector('.subnav');
        if(subnav.classList.value.includes("hide")) subnav.classList.remove('hide');
        else subnav.classList.add('hide');
    }
    
    const handleShowMenu = () => {
        const header = document.getElementsByClassName('header')[0];
        const subnav = document.querySelector('.subnav');
        if(!subnav.classList.value.includes("hide")) subnav.classList.add('hide');
        const isClosed = header.clientHeight === headerHeight;
        if (isClosed) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    };
   
    const handleCloseMenu = () => {
        const header = document.getElementsByClassName('header')[0];
        const isClosed = header.clientHeight === headerHeight;
        if (isClosed) {
            header.style.height = 'null';
        } else {
            header.style.height = null;
        }
    }

  return (
    <div className='header'>
        <ul className='nav'>
            <li className='home'>
                <a href='#' onClick={handleCloseMenu}>Home</a>
            </li>
            <li>
                <a href='#band' onClick={handleShowMenu}>Band</a>
            </li>
            <li>
                <a href='#tour' onClick={handleShowMenu}>Tour</a>
            </li>
            <li>
                <a href='#contact' onClick={handleShowMenu}>Contact</a>
            </li>
            <li>
                <a href='#' onClick={handleShowMore}>
                    More
                    <i class="fa-solid fa-caret-down"></i>
                </a>
                <ul className='subnav hide'>
                    <li onClick={handleCloseMenu}><a href='#'>Merchandise</a></li>
                    <li onClick={handleCloseMenu}><a href='#'>Extras</a></li>
                    <li onClick={handleCloseMenu}><a href='#'>Media</a></li>

                </ul>
            </li>
        </ul>
        
        <div className='search-btn' > 
            <i className='search-icon fa fa-search' fa fa-search></i>
        </div>

        <div id="mobile-menu" className='mobile-menu-btn' onClick={handleShowMenu}>
            <i class="menu-icon fa-sharp fa-regular fa-bars"></i>
            {/* <i class="menu-icon ti-menu"></i> */}
        </div>
    </div>
  )
}

export default Header





