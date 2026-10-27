
import React from "react";
import "./Videos.css";

const video = {
  title:
    "Martin Garrix & Pierce Fulton feat. Mike Shinoda - Waiting For Tomorrow (Official Video)",
  image: "/img/videos/large-item.jpg",
  url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
  duration: "02:35:18",
  date: "Dec 17, 2019",
};

function FeaturedVideo() {
  return (
    <div
      className="featured-video"
      style={{ backgroundImage: `url(${video.image})` }}
    >
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="featured-video__play"
        aria-label="Play featured video"
      >
        <i className="fa fa-play" aria-hidden="true" />
      </a>

      <div className="featured-video__text">
        <h2>{video.title}</h2>

        <ul className="featured-video__meta">
          <li>{video.duration}</li>
          <li>{video.date}</li>
        </ul>
      </div>
    </div>
  );
}

export default FeaturedVideo;
