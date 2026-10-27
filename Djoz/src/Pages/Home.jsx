


import React from "react";

import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import UpcomingEvents from "../Components/Home/UpcomingEvents";
import About from "../Components/Home/About";
import Services from "../Components/Home/Services";
import Track from "../Components/Home/Track";
import YoutubeFeed from "../Components/Home/YoutubeFeed";
import Countdown from "../Components/Home/Countdown";
import Footer from "../Components/Home/Footer";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <About />
      <Services />
      <Track />
      <YoutubeFeed />
      <Countdown />
      <Footer />
    </>
  );
}

export default Home;
