import React from "react";
import newyork from "../../../images/newyork.jpg";
import paris from "../../../images/paris.jpg";
import sanfran from "../../../images/sanfran.jpg";

const Place = ({ handleOpenModal }) => {
  const PlaceList = [
    {
      img: newyork,
      alt: "newyork",
      place: "New York",
      dateTime: "Fri 27 Nov 2016",
      desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
      event: handleOpenModal,
    },
    {
      img: paris,
      alt: "paris",
      place: "Paris",
      dateTime: "Sat 28 Nov 2016",
      desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
      event: handleOpenModal,
    },
    {
      img: sanfran,
      alt: "sanfran",
      place: "San Francisco",
      dateTime: "Sun 29 Nov 2016",
      desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
      event: handleOpenModal,
    },
  ];
  return PlaceList.map((current_value, index) => (
    <div key={index} className="col col-third s-col-full mt-16">
      <img
        className="place-img"
        src={current_value.img}
        alt={current_value.alt}
      />
      <div className="place-body">
        <h3 className="place-heading">{current_value.place}</h3>
        <p className="place-time">{current_value.dateTime}</p>
        <p className="place-desc">{current_value.desc}</p>
        <button
          onClick={current_value.event}
          className="place-buy-btn js-buy-tickets s-full-width">
          Buy Tickets
        </button>
      </div>
    </div>
  ));
};

export default Place;
