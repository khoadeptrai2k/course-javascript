import React, { useState } from "react";
import "../styles/body.css";
import memberimg from "../../../images/bandmember.jpg";
import newyork from "../../../images/newyork.jpg";
import paris from "../../../images/paris.jpg";
import sanfran from "../../../images/sanfran.jpg";
import TicketsModal from "./ticketsModal";
import map from "../../../images/map.jpg";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  // const handleCloseModal = () => {
  //   setIsModalOpen(false)
  // }
  return (
    <div className="content">
      <div id="band" className="content-section">
        <h2 className="section-heading">THE BAND</h2>
        <p className="section-sub-heading">We love music</p>
        <p className="about-text">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="member-list">
          <div className="member-item col col-third text-center">
            <p className="member-name">Name</p>
            <img src={memberimg} alt="Name" className="member-img" />
          </div>

          <div className="member-item col col-third text-center">
            <p className="member-name">Name</p>
            <img src={memberimg} alt="Name" className="member-img" />
          </div>

          <div className="member-item col col-third text-center">
            <p className="member-name">Name</p>
            <img src={memberimg} alt="Name" className="member-img" />
          </div>
          <div className="clear"></div>
        </div>
      </div>

      {/* Tour section */}
      <div id="tour" className="tour-section">
        <div className="content-section">
          <h2 className="section-heading text-white">TOUR DATES</h2>
          <p className="section-sub-heading text-white">
            Remember to book your tickets!
          </p>

          {/* Tickets */}
          <ul className="tickets-list">
            <li>
              September <span className="sold-out">Sold out</span>
            </li>
            <li>
              October <span className="sold-out">Sold out</span>
            </li>
            <li>
              November <span className="quantity">3</span>
            </li>
          </ul>
          {/* Place */}
          <div className="row place-list">
            <div className="col col-third s-col-full mt-16">
              <img className="place-img" src={newyork} alt="newyork" />
              <div className="place-body">
                <h3 className="place-heading">New York</h3>
                <p className="place-time">Fri 27 Nov 2016</p>
                <p className="place-desc">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  onClick={handleOpenModal}
                  className="place-buy-btn js-buy-tickets">
                  Buy Tickets
                </button>
              </div>
            </div>

            {
              <div className="col col-third s-col-full mt-16">
                <img className="place-img" src={paris} alt="paris" />
                <div className="place-body">
                  <h3 className="place-heading">New York</h3>
                  <p className="place-time">Sat 28 Nov 2016</p>
                  <p className="place-desc">
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <button
                    onClick={handleOpenModal}
                    className="place-buy-btn js-buy-tickets">
                    Buy Tickets
                  </button>
                </div>
              </div>
            }

            <div className="col col-third s-col-full mt-16">
              <img className="place-img" src={sanfran} alt="sanfran" />
              <div className="place-body">
                <h3 className="place-heading">New York</h3>
                <p className="place-time">Sun 29 Nov 2016</p>
                <p className="place-desc">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  onClick={handleOpenModal}
                  className="place-buy-btn js-buy-tickets">
                  Buy Tickets
                </button>
              </div>
            </div>
            <TicketsModal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
              }}
            />
            <div className="clear"></div>
          </div>
        </div>
      </div>

      {/* contact section */}
      <div id="contact" className="content-section">
        <h2 className="section-heading">CONTACT</h2>
        <p className="section-sub-heading">Fan? Drop a note!</p>

        <div className="row contact-content">
          <div className="col col-haft contact-info">
            <p className="info">
              <i class="fa-solid fa-location-dot"></i>Chicago, US
            </p>
            <p className="info">
              <i class="fa-solid fa-phone"></i>Phone: +00 151515
            </p>
            <p className="info">
              <i class="fa-solid fa-envelope"></i>Email: mail@mail.com
            </p>
          </div>
          <div className="col col-haft contact-form">
            <form action="">
              <div className="row">
                <div className="col col-haft">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col col-haft">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="row mt-8">
                <div className="col col-full">
                  <input className="form-control" type="text" placeholder="Message" required />
                </div>
              </div>
              <input className="form-submit-btn mt-16" type="submit" value="SEND" />
            </form>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="map-section">
        <img src={map} alt="map"/>
      </div>
      
    </div>
  );
};

export default Body;
