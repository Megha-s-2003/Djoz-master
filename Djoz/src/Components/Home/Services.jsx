
import React from "react";
import "../../assets/css/style.css";

function Services() {
  return (
    <section className="services">
      <div className="container-fluid">
        <div className="row">
          {/* Left side: Video background */}
          <div className="col-lg-6 p-0">
            <div
              className="services__left set-bg"
              style={{
                backgroundImage: "url('/img/services/service-left.jpg')",
              }}
            >
              <a
                href="https://www.youtube.com/watch?v=JGwWNGJdvx8"
                className="play-btn video-popup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Play DJ music video"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>

          {/* Right side: Services list */}
          <div className="col-lg-6 p-0">
            <div className="row services__list">
              {/* Wedding */}
              <div className="col-lg-6 p-0 order-lg-1 col-md-6 order-md-1">
                <div className="service__item deep-bg">
                  <img src="/img/services/service-1.png" alt="Wedding DJ service" />
                  <h4>Wedding</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod.
                  </p>
                </div>
              </div>

              {/* Clubs and bar */}
              <div className="col-lg-6 p-0 order-lg-2 col-md-6 order-md-2">
                <div className="service__item">
                  <img src="/img/services/service-2.png" alt="Clubs and bar DJ service" />
                  <h4>Clubs and bar</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod.
                  </p>
                </div>
              </div>

              {/* Corporate events */}
              <div className="col-lg-6 p-0 order-lg-3 col-md-6 order-md-3">
                <div className="service__item">
                  <img
                    src="/img/services/service-3.png"
                    alt="Corporate event DJ service"
                  />
                  <h4>Corporate events</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod.
                  </p>
                </div>
              </div>

              {/* DJ lessons */}
              <div className="col-lg-6 p-0 order-lg-4 col-md-6 order-md-4">
                <div className="service__item deep-bg">
                  <img src="/img/services/service-4.png" alt="DJ lessons" />
                  <h4>DJ lessons</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
