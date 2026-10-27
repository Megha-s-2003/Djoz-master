
import React, { useEffect } from "react";

const events = [
  {
    id: 1,
    image: "/events/event-1.jpg",
    date: "Dec 15, 2019",
    title: "David Guetta Miami Ultra",
    location: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 2,
    image: "/events/event-2.jpg",
    date: "Dec 15, 2019",
    title: "David Guetta Miami Ultra",
    location: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 3,
    image: "/events/event-3.jpg",
    date: "Dec 15, 2019",
    title: "David Guetta Miami Ultra",
    location: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 4,
    image: "/events/event-2.jpg",
    date: "Dec 15, 2019",
    title: "David Guetta Miami Ultra",
    location: "Funkhaus Berlin, Berlin, Germany",
  },
];

function UpcomingEvents() {
  useEffect(() => {
    const $ = window.jQuery;

    if (!$ || !$.fn || !$.fn.owlCarousel) {
      console.error("Owl Carousel is not loaded.");
      return;
    }

    const slider = $(".event__slider");

    if (slider.hasClass("owl-loaded")) {
      slider.trigger("destroy.owl.carousel");
    }

    slider.owlCarousel({
      loop: true,
      margin: 26,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 700,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 },
      },
    });

    return () => {
      if (slider.hasClass("owl-loaded")) {
        slider.trigger("destroy.owl.carousel");
      }
    };
  }, []);

  return (
    <section id="upcoming-events" className="event spad">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Upcoming Events</h2>
            </div>
          </div>
        </div>

        {/* Owl Carousel: all cards stay in one sliding row */}
        <div className="event__slider owl-carousel">
          {events.map((event) => (
            <div className="item" key={event.id}>
              <div className="event__item">
                <div
                  className="event__item__pic"
                  style={{
                    backgroundImage: `url("${event.image}")`,
                  }}
                >
                  <div className="tag-date">
                    <span>{event.date}</span>
                  </div>
                </div>

                <div className="event__item__text">
                  <h4>{event.title}</h4>
                  <p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    {event.location}
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

export default UpcomingEvents;
