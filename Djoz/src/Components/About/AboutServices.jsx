
import React from "react";

const services = [
  {
    id: 1,
    title: "Wedding",
    image: "/public/img/services/as-1.jpg",
    icon: "/public/img/services/as-icon-1.png",
  },
  {
    id: 2,
    title: "Clubs and bar",
    image: "/public/img/services/as-2.jpg",
    icon: "/public/img/services/as-icon-2.png",
  },
  {
    id: 3,
    title: "Corporate events",
    image: "/public/img/services/as-3.jpg",
    icon: "/public/img/services/as-icon-3.png",
  },
];

function AboutServices() {
  return (
    <section className="about-services-section">
      <div className="about-services-container">
        <div className="about-services-heading">
          <span>Best Service</span>
          <h2>Where Do I Play</h2>
        </div>

        <div className="about-services-row">
          {services.map((service) => (
            <div className="about-service-column" key={service.id}>
              <div className="about-service-card">
                <div className="about-service-image">
                  <img src={service.image} alt={service.title} />
                </div>

                <div className="about-service-icon">
                  <img src={service.icon} alt="" />
                </div>

                <div className="about-service-text">
                  <h3>{service.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
