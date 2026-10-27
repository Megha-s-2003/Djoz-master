
// import React from "react";
// import "./Videos.css";

// function VideoCard({ video }) {
//   return (
//     <div className="video-card">
//       <div
//         className="video-card__image"
//         style={{ backgroundImage: `url(${video.image})` }}
//       >
//         <a
//           href={video.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="video-card__play"
//           aria-label={`Play ${video.title}`}
//         >
//           <i className="fa fa-play" aria-hidden="true" />
//         </a>
//       </div>

//       <div className="video-card__text">
//         <h5>{video.title}</h5>
//         <ul className="video-card__meta">
//           <li>{video.duration}</li>
//           <li>{video.date}</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default VideoCard;


import React from "react";
import "./Videos.css";

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <div
        className="video-card__image"
        style={{ backgroundImage: `url("${video.image}")` }}
      >
        <a
          href={video.url}
          className="video-card__play video-popup"
          aria-label={`Play ${video.title}`}
        >
          <i className="fa fa-play" aria-hidden="true" />
        </a>
      </div>

      <div className="video-card__text">
        <h5>{video.title}</h5>

        <ul className="video-card__meta">
          <li>{video.duration}</li>
          <li>{video.date}</li>
        </ul>
      </div>
    </div>
  );
}

export default VideoCard;
