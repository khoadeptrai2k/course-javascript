import React, { useState, useEffect } from "react";
import "../styles/header.css";
import { MenuOutlined } from "@ant-design/icons";
import MenuHeader from "../untils/menuHeader";

const Header = () => {    

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document?.getElementsByClassName("header")[0];
    setHeaderHeight(header?.clientHeight);
  }, []);

  const handleShowMore = (e) => {
    e.preventDefault();
    const subnav = document.querySelector(".subnav");
    if (subnav.classList.value.includes("hide"))
      subnav.classList.remove("hide");
    else subnav.classList.add("hide");
  };

  const handleShowMenu = () => {
    const header = document.getElementsByClassName("header")[0];
    const subnav = document.querySelector(".subnav");
    if (!subnav.classList.value.includes("hide")) subnav.classList.add("hide");
    const isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
      header.style.height = "auto";
    } else {
      header.style.height = null;
    }
  };

  const handleCloseMenu = () => {
    const header = document.getElementsByClassName("header")[0];
    const isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
      header.style.height = "null";
    } else {
      header.style.height = null;
    }
  };

  return (
    <div className="header">
      <ul className="nav">
        <MenuHeader handleCloseMenu={handleCloseMenu} handleShowMenu={handleShowMenu}/>
        <li>
          <a href="#" onClick={handleShowMore}>
            More
            <i class="fa-solid fa-caret-down"></i>
          </a>
          <ul className="subnav hide">
            <li onClick={handleCloseMenu}>
              <a href="#">Merchandise</a>
            </li>
            <li onClick={handleCloseMenu}>
              <a href="#">Extras</a>
            </li>
            <li onClick={handleCloseMenu}>
              <a href="#">Media</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="search-btn">
        <i className="search-icon fa fa-search" fa fa-search></i>
      </div>

      <div
        id="mobile-menu"
        className="mobile-menu-btn"
        onClick={handleShowMenu}>
        <MenuOutlined className="menu-icon" />
        {/* <i class="menu-icon ti-menu"></i> */}
      </div>
    </div>
  );
};

export default Header;
