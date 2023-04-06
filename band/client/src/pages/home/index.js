import React from "react";
import Header from "./layout/header";
import Body from "./layout/body";
import Slider from "./layout/slider";
import Footer from "./layout/footer";
import TicketsModal from "./layout/ticketsModal";

const Home = () => {
  return (
    <div>
      <h1>test-branch</h1>
      <Header />

      <Slider />

      <Body />

      <Footer />
    </div>
  );
};

export default Home;
