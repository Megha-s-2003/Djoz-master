


// import React from "react";
// import "./Videos.css";

// const video = {
//   title:
//     "Martin Garrix & Pierce Fulton feat. Mike Shinoda - Waiting For Tomorrow (Official Video)",
//   image: "/img/videos/large-item.jpg",
//   url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
//   duration: "02:35:18",
//   date: "Dec 17, 2019",
// };

// function FeaturedVideo() {
//   return (
//     <div className="featured-video">
//   <div className="featured-video__pic">
//     <img src={video.image} alt={video.title} />

//     <a
//       className="video-popup"
//       href={video.url}
//       aria-label={`Play ${video.title}`}
//     >
//       <i className="fa fa-play" aria-hidden="true" />
//     </a>

//     <div className="featured-video__text">
//       <h3>{video.title}</h3>
//       <ul>
//         <li>{video.duration}</li>
//         <li>{video.date}</li>
//       </ul>
//     </div>
//   </div>
// </div>
//   );
// }

// export default FeaturedVideo;

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
      className="videos-featured"
      style={{ backgroundImage: `url(${video.image})` }}
    >
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="videos-featured__play"
        aria-label="Play featured video"
      >
        <i className="fa fa-play" aria-hidden="true" />
      </a>

      <div className="videos-featured__caption">
        <h2 className="videos-featured__title">{video.title}</h2>

        <ul className="videos-featured__meta">
          <li>{video.duration}</li>
          <li>{video.date}</li>
        </ul>
      </div>
    </div>
  );
}

export default FeaturedVideo;
