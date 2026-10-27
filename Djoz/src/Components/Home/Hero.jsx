
import React from "react";
import "../../assets/css/style.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/img/hero-bg.png')",
      }}
    >
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <span className="hero__subtitle">NEW SINGLE</span>

        <h1>Feel the heart beats</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>

        <a
          href="https://www.youtube.com/watch?v=K4DyBUG242c"
          className="hero__play"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play music video"
        >
          <span className="play-triangle"></span>
        </a>
      </div>
<div className="hero__bottom">
  <a href="#upcoming-events" aria-label="Scroll to upcoming events">
    <span></span>
    <span></span>
  </a>
</div>
      
    </section>
  );
}

export default Hero;
