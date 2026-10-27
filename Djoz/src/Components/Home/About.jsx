import React from "react";
import "../../assets/css/style.css";

function About() {
  return (
    <section className="about spad">
      <div className="container">
        <div className="row align-items-center">

          {/* Left image */}
          <div className="col-lg-6">
            <div className="about__pic">
              <img
                src="/img/about/about.png"
                alt="DJ Alexandra Rud"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="col-lg-6">
            <div className="about__text">
              <div className="section-title">
                
                <h2>DJ Alexandra Rud</h2>
              </div>

              <p>
                DJ Rainflow knows how to move your mind, body and soul
                by delivering tracks that stand out from the norm.
                As if this impressive succession of high impact,
                floor-filling bombs wasn’t enough to sustain.
              </p>

              <a href="/contact" className="primary-btn">
                Contact me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;