import React from "react";

const MenuHeader = ({ handleCloseMenu, handleShowMenu }) => {
  const RouterPage = [
    {
      name: "Home",
      className: "home",
      href: "#",
      event: handleCloseMenu,
    },
    {
      name: "Band",
      className: "band",
      href: "#band",
      event: handleShowMenu,
    },
    {
      name: "Tour",
      className: "tour",
      href: "#tour",
      event: handleShowMenu,
    },
    {
      name: "Contact",
      className: "contact",
      href: "#contact",
      event: handleShowMenu,
    },
  ];

  return RouterPage.map((current_value, index) => (
    <li key={index} className={current_value.className}>
      <a href={current_value.href} onClick={current_value.event}>
        {current_value.name}
      </a>
    </li>
  ));
};

export default MenuHeader;
