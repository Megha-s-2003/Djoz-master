
import React from "react";

const galleryImages = [
  { id: 1, src: "/img/about/ap-1.jpg", className: "gallery-item-1" },
  { id: 2, src: "/img/about/ap-2.jpg", className: "gallery-item-2" },
  { id: 3, src: "/img/about/ap-3.jpg", className: "gallery-item-3" },
  { id: 4, src: "/img/about/ap-4.jpg", className: "gallery-item-4" },
  { id: 5, src: "/img/about/ap-5.jpg", className: "gallery-item-5" },
  { id: 6, src: "/img/about/ap-6.jpg", className: "gallery-item-6" },
  { id: 7, src: "/img/about/ap-7.jpg", className: "gallery-item-7" },
];

function AboutGallery() {
  return (
    <section className="about-gallery">
      <div className="about-gallery-grid">
        {galleryImages.map((image) => (
          <div
            className={`about-gallery-item ${image.className}`}
            key={image.id}
          >
            <img src={image.src} alt={`DJ gallery ${image.id}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutGallery;
