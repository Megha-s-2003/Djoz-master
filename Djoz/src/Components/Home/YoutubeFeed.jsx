

import React from "react";
import "../../assets/css/style.css";

const videos = [
  {
    id: 1,
    title: "David Guetta Miami Ultra Music Festival 2019",
    image: "/youtube/youtube-1.jpg",
    url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
  },
  {
    id: 2,
    title: "Martin Garrix (Full live-set) | SLAM!Koningsdag",
    image: "/youtube/youtube-2.jpg",
    url: "https://www.youtube.com/watch?v=K4DyBUG242c",
  },
  {
    id: 3,
    title: "Dimitri Vegas, Steve Aoki & Like Mike’s “3 Are Legend”",
    image: "/youtube/youtube-3.jpg",
    url: "https://www.youtube.com/watch?v=S19UcWdOA-I",
  },
];

function YoutubeFeed() {
  return (
    <section className="youtube spad">
      <div className="container">
        <div className="section-title youtube-heading">
          <span>Latest Videos</span>
          <h1>Youtube Feed</h1>
        </div>

        <div className="row youtube-cards">
          {videos.map((video) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              key={video.id}
            >
              <div className="youtube__item">
                <a
                  className="youtube__item__pic"
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${video.title} on YouTube`}
                  style={{
                    backgroundImage: `url("${video.image}")`,
                    display: "block",
                    cursor: "pointer",
                  }}
                >
                  <span className="youtube-play-icon" />
                </a>

                <div className="youtube__item__text">
                  <h4>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {video.title}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default YoutubeFeed;
