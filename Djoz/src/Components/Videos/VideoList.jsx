
// import React, { useRef } from "react";
// import FeaturedVideo from "./FeaturedVideo";
// import VideoCard from "./Videocard";
// import "./Videos.css";

// const videos = [
//   {
//     id: 1,
//     title: "David Guetta Miami Ultra Music Festival 2019",
//     image: "/public/img/videos/videos-1.jpg",
//     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
//     duration: "03:45",
//     date: "Dec 17, 2019",
//   },
//   {
//     id: 2,
//     title: "Martin Garrix (Full Live Set)",
//     image: "/public/img/videos/videos-2.jpg",
//     url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
//     duration: "04:20",
//     date: "Dec 12, 2019",
//   },
//   {
//     id: 3,
//     title: "Tomorrowland Music Festival",
//     image: "/public/img/videos/videos-3.jpg",
//     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
//     duration: "05:10",
//     date: "Dec 10, 2019",
//   },
//   {
//     id: 4,
//     title: "Best Electronic Music Mix",
//     image: "/public/img/videos/videos-4.jpg",
//     url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
//     duration: "03:30",
//     date: "Dec 08, 2019",
//   },
//   {
//     id: 5,
//     title: "Live DJ Performance",
//     image: "/public/img/videos/videos-3.jpg",
//     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
//     duration: "04:15",
//     date: "Dec 05, 2019",
//   },
// ];

// function VideoList() {
//   const carouselRef = useRef(null);

//   const slide = (direction) => {
//     if (!carouselRef.current) return;

//     const track = carouselRef.current;
//     const card = track.querySelector(".videos-carousel__item");

//     if (!card) return;

//     const gap = 24;
//     const distance = card.getBoundingClientRect().width + gap;

//     track.scrollBy({
//       left: direction * distance,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="videos-section">
//       <div className="container">
//         {/* Section heading */}
//         <div className="section-title center-title">
//           <span>Latest Videos</span>
//           <h2>YouTube Feed</h2>
//         </div>

//         {/* Featured video */}
//         <FeaturedVideo />

//         {/* Carousel heading and buttons */}
//         <div className="videos-carousel__heading">
//           <h3>More Videos</h3>

//           <div className="videos-carousel__controls">
//             <button
//               type="button"
//               onClick={() => slide(-1)}
//               aria-label="Previous videos"
//             >
//               &#10094;
//             </button>

//             <button
//               type="button"
//               onClick={() => slide(1)}
//               aria-label="Next videos"
//             >
//               &#10095;
//             </button>
//           </div>
//         </div>

//         {/* Carousel */}
//         <div
//           className="videos-carousel__track"
//           ref={carouselRef}
//         >
//           {videos.map((video) => (
//             <div
//               className="videos-carousel__item"
//               key={video.id}
//             >
//               <VideoCard video={video} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default VideoList;

import React, { useRef } from "react";
import FeaturedVideo from "./FeaturedVideo";
import VideoCard from "./Videocard";
import "./Videos.css";

const videos = [
  {
    id: 1,
    title: "David Guetta Miami Ultra Music Festival 2019",
    image: "/img/videos/videos-1.jpg",
    url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
    duration: "03:45",
    date: "Dec 17, 2019",
  },
  {
    id: 2,
    title: "Martin Garrix (Full Live Set)",
    image: "/img/videos/videos-2.jpg",
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    duration: "04:20",
    date: "Dec 12, 2019",
  },
  {
    id: 3,
    title: "Tomorrowland Music Festival",
    image: "/img/videos/videos-3.jpg",
    url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
    duration: "05:10",
    date: "Dec 10, 2019",
  },
  {
    id: 4,
    title: "Best Electronic Music Mix",
    image: "/img/videos/videos-4.jpg",
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    duration: "03:30",
    date: "Dec 08, 2019",
  },
  {
    id: 5,
    title: "Live DJ Performance",
    image: "/img/videos/videos-3.jpg",
    url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
    duration: "04:15",
    date: "Dec 05, 2019",
  },
];

function VideoList() {
  const carouselRef = useRef(null);

  const slide = (direction) => {
    const track = carouselRef.current;

    if (!track) return;

    const card = track.querySelector(".videos-carousel__item");

    if (!card) return;

    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap) || 24;
    const distance = card.getBoundingClientRect().width + gap;

    track.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="videos-section">
      <div className="container">

        {/* Section heading */}
        <div className="section-title center-title videos-section-title">
          <span>Latest Videos</span>
          <h2>YouTube Feed</h2>
        </div>

        {/* Featured video */}
        <FeaturedVideo />

        {/* Carousel heading and arrows */}
        <div className="videos-carousel__heading">
          <h3>More Videos</h3>

          <div className="videos-carousel__controls">
            <button
              type="button"
              onClick={() => slide(-1)}
              aria-label="Previous videos"
            >
              &#10094;
            </button>

            <button
              type="button"
              onClick={() => slide(1)}
              aria-label="Next videos"
            >
              &#10095;
            </button>
          </div>
        </div>

        {/* Video cards */}
        <div className="videos-carousel__track" ref={carouselRef}>
          {videos.map((video) => (
            <div className="videos-carousel__item" key={video.id}>
              <VideoCard video={video} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default VideoList;