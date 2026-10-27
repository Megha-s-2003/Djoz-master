


// // import React, { useRef } from "react";
// // import FeaturedVideo from "./FeaturedVideo";
// // import VideoCard from "./VideoCardTemp.jsx";
// // import "./Videos.css";

// // const videos = [
// //   {
// //     id: 1,
// //     title: "David Guetta Miami Ultra Music Festival 2019",
// //     image: "/img/videos/videos-1.jpg",
// //     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
// //     duration: "03:45",
// //     date: "Dec 17, 2019",
// //   },
// //   {
// //     id: 2,
// //     title: "Martin Garrix (Full Live Set)",
// //     image: "/img/videos/videos-2.jpg",
// //     url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
// //     duration: "04:20",
// //     date: "Dec 12, 2019",
// //   },
// //   {
// //     id: 3,
// //     title: "Tomorrowland Music Festival",
// //     image: "/img/videos/videos-3.jpg",
// //     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
// //     duration: "05:10",
// //     date: "Dec 10, 2019",
// //   },
// //   {
// //     id: 4,
// //     title: "Best Electronic Music Mix",
// //     image: "/img/videos/videos-4.jpg",
// //     url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
// //     duration: "03:30",
// //     date: "Dec 08, 2019",
// //   },
// //   {
// //     id: 5,
// //     title: "Live DJ Performance",
// //     image: "/img/videos/videos-3.jpg",
// //     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
// //     duration: "04:15",
// //     date: "Dec 05, 2019",
// //   },
// // ];

// // function VideoList() {
// //   const carouselRef = useRef(null);

// //   const slide = (direction) => {
// //     const track = carouselRef.current;

// //     if (!track) return;

// //     const card = track.querySelector(".videos-carousel__item");

// //     if (!card) return;

// //     const styles = window.getComputedStyle(track);
// //     const gap = parseFloat(styles.columnGap) || 24;
// //     const distance = card.getBoundingClientRect().width + gap;

// //     track.scrollBy({
// //       left: direction * distance,
// //       behavior: "smooth",
// //     });
// //   };

// //   return (
// //     <section className="videos-section">
// //       <div className="container">

// //         {/* Section heading */}
// //         <div className="section-title center-title videos-section-title">
// //           <span>Latest Videos</span>
// //           <h2>YouTube Feed</h2>
// //         </div>

// //         {/* Featured video */}
// //         <FeaturedVideo />

// //         {/* Carousel heading and arrows */}
// //         <div className="videos-carousel__heading">
// //           <h3>More Videos</h3>

// //           <div className="videos-carousel__controls">
// //             <button
// //               type="button"
// //               onClick={() => slide(-1)}
// //               aria-label="Previous videos"
// //             >
// //               &#10094;
// //             </button>

// //             <button
// //               type="button"
// //               onClick={() => slide(1)}
// //               aria-label="Next videos"
// //             >
// //               &#10095;
// //             </button>
// //           </div>
// //         </div>

// //         {/* Video cards */}
// //         <div className="videos-carousel__track" ref={carouselRef}>
// //           {videos.map((video) => (
// //             <div className="videos-carousel__item" key={video.id}>
// //               <VideoCard video={video} />
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// // export default VideoList;

// import React from "react";
// import FeaturedVideo from "./FeaturedVideo";
// import VideoCard from "./VideoCardTemp.jsx";
// import "./Videos.css";

// const videos = [
//   {
//     id: 1,
//     title: "David Guetta Miami Ultra Music Festival 2019",
//     image: "/img/videos/videos-1.jpg",
//     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
//     duration: "03:45",
//     date: "Dec 17, 2019",
//   },
//   {
//     id: 2,
//     title: "Martin Garrix (Full Live Set)",
//     image: "/img/videos/videos-2.jpg",
//     url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
//     duration: "04:20",
//     date: "Dec 12, 2019",
//   },
//   {
//     id: 3,
//     title: "Tomorrowland Music Festival",
//     image: "/img/videos/videos-3.jpg",
//     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
//     duration: "05:10",
//     date: "Dec 10, 2019",
//   },
//   {
//     id: 4,
//     title: "Best Electronic Music Mix",
//     image: "/img/videos/videos-4.jpg",
//     url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
//     duration: "03:30",
//     date: "Dec 08, 2019",
//   },
//   {
//     id: 5,
//     title: "Live DJ Performance",
//     image: "/img/videos/videos-3.jpg",
//     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
//     duration: "04:15",
//     date: "Dec 05, 2019",
//   },
// ];

// function VideoList() {
//   return (
//     <section className="videos-section">
//       <div className="container">
//         <div className="section-title center-title videos-section-title">
//           <span>Latest Videos</span>
//           <h2>YouTube Feed</h2>
//         </div>

//         <FeaturedVideo />

//         <div className="videos-carousel__heading">
          
//         </div>

//         <div className="videos__slider owl-carousel">
//           {videos.map((video) => (
//             <div key={video.id}>
//               <VideoCard video={video} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default VideoList;




// import React, { useEffect } from "react";
// import FeaturedVideo from "./FeaturedVideo";
// import VideoCard from "./VideoCardTemp.jsx";
// import "./Videos.css";

// const videos = [
//   {
//     id: 1,
//     title: "David Guetta Miami Ultra Music Festival 2019",
//     image: "/img/videos/videos-1.jpg",
//     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
//     duration: "02:35:18",
//     date: "Dec 17, 2019",
//   },
//   {
//     id: 2,
//     title: "Martin Garrix (Full Live Set)",
//     image: "/img/videos/videos-2.jpg",
//     url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
//     duration: "02:35:18",
//     date: "Dec 12, 2019",
//   },
//   {
//     id: 3,
//     title: "Tomorrowland Music Festival",
//     image: "/img/videos/videos-3.jpg",
//     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
//     duration: "02:35:18",
//     date: "Dec 10, 2019",
//   },
//   {
//     id: 4,
//     title: "Best Electronic Music Mix",
//     image: "/img/videos/videos-4.jpg",
//     url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
//     duration: "02:35:18",
//     date: "Dec 08, 2019",
//   },
//   {
//     id: 5,
//     title: "Live DJ Performance",
//     image: "/img/videos/videos-3.jpg",
//     url: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
//     duration: "02:35:18",
//     date: "Dec 05, 2019",
//   },
// ];

// function VideoList() {
//   useEffect(() => {
//     const $ = window.jQuery;

//     if (!$ || !$.fn.owlCarousel) {
//       console.error("jQuery or Owl Carousel is not loaded.");
//       return;
//     }

//     const $slider = $(".videos__slider");

//     // Prevent duplicate initialization
//     if (!$slider.length || $slider.hasClass("owl-loaded")) {
//       return;
//     }

//     $slider.owlCarousel({
//       loop: true,
//       margin: 0,
//       items: 4,
//       dots: false,
//       nav: true,
//       navText: [
//         "<i class='fa fa-angle-left'></i>",
//         "<i class='fa fa-angle-right'></i>",
//       ],
//       smartSpeed: 1200,
//       autoHeight: false,
//       autoplay: true,
//       responsive: {
//         992: { items: 4 },
//         768: { items: 3 },
//         576: { items: 2 },
//         0: { items: 1 },
//       },
//     });

//     return () => {
//       if ($slider.hasClass("owl-loaded")) {
//         $slider.trigger("destroy.owl.carousel");
//         $slider.removeClass("owl-loaded");
//         $slider.find(".owl-stage-outer").children().unwrap();
//       }
//     };
//   }, []);

//   return (
//     <section className="videos-section">
//       <div className="container">
//         <div className="section-title center-title videos-section-title">
//           <span>Latest Videos</span>
//           <h2>YouTube Feed</h2>
//         </div>

//         <FeaturedVideo />

//         <div className="videos-carousel__heading">
//           <h3>More Videos</h3>
//         </div>

//         <div className="videos__slider owl-carousel">
//           {videos.map((video) => (
//             <div key={video.id}>
//               <VideoCard video={video} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default VideoList;


// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import FeaturedVideo from "./FeaturedVideo";
// import VideoCard from "./VideoCardTemp.jsx";
// import "./Videos.css";

// const DURATION = "02:35:18";
// const DATE = "Dec 17, 2019";

// const videos = [
//   { id: 1, title: "Electric Love Festival 2019 - The Opening Ceremony", image: "/img/videos/videos-1.jpg", url: "https://www.youtube.com/watch?v=yJg-Y5byMMw" },
//   { id: 2, title: "Tiësto - Live Electric Daisy Carnival Las Vegas 2019", image: "/img/videos/videos-2.jpg", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
//   { id: 3, title: "Martin Garrix - Live @ Ultra Music Festival Miami 2019", image: "/img/videos/videos-3.jpg", url: "https://www.youtube.com/watch?v=yJg-Y5byMMw" },
//   { id: 4, title: "Armin van Buuren live at Tomorrowland 2019", image: "/img/videos/videos-4.jpg", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
//   { id: 5, title: "Armin van Buuren live at Tomorrowland 2019", image: "/img/videos/videos-4.jpg", url: "https://www.youtube.com/watch?v=yJg-Y5byMMw" },
//   { id: 6, title: "Martin Garrix - Live @ Ultra Music Festival Miami 2019", image: "/img/videos/videos-3.jpg", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
//   { id: 7, title: "Electric Love Festival 2019 - The Opening Ceremony", image: "/img/videos/videos-1.jpg", url: "https://www.youtube.com/watch?v=yJg-Y5byMMw" },
//   { id: 8, title: "Tiësto - Live Electric Daisy Carnival Las Vegas 2019", image: "/img/videos/videos-2.jpg", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
// ].map((v) => ({ ...v, duration: DURATION, date: DATE }));

// // 4 cards on desktop, 2 on tablet, 1 on phones
// function useVisibleCount() {
//   const get = () =>
//     window.innerWidth <= 575 ? 1 : window.innerWidth <= 991 ? 2 : 4;
//   const [count, setCount] = useState(get);

//   useEffect(() => {
//     const onResize = () => setCount(get());
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   return count;
// }

// function VideoList() {
//   const visible = useVisibleCount();
//   const [index, setIndex] = useState(0);
//   const trackRef = useRef(null);
//   const maxIndex = Math.max(videos.length - visible, 0);

//   // keep the position valid when the screen size changes
//   useEffect(() => {
//     setIndex((i) => Math.min(i, maxIndex));
//   }, [maxIndex]);

//   // slide the track with JS: move by one card width + gap
//   useLayoutEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const move = () => {
//       const slide = track.children[0];
//       if (!slide) return;
//       const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
//       const step = slide.getBoundingClientRect().width + gap;
//       track.style.transform = `translateX(${-index * step}px)`;
//     };

//     move();
//     window.addEventListener("resize", move);
//     return () => window.removeEventListener("resize", move);
//   }, [index, visible]);

//   const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
//   const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

//   return (
//     <section className="videos-section">
//       <div className="container">
//         {/* Section heading */}
//         <div className="videos-heading">
//           <span>Latest Videos</span>
//           <h2>YouTube Feed</h2>
//         </div>

//         {/* Featured video */}
//         <FeaturedVideo />

//         {/* Carousel */}
//         <div className="video-carousel" style={{ "--visible": visible }}>
//           <div className="video-carousel__viewport">
//             <div className="video-carousel__track" ref={trackRef}>
//               {videos.map((video) => (
//                 <div className="video-carousel__slide" key={video.id}>
//                   <VideoCard video={video} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             type="button"
//             className="video-carousel__btn video-carousel__btn--prev"
//             onClick={prev}
//             aria-label="Previous videos"
//           >
//             <i className="fa fa-angle-left" aria-hidden="true" />
//           </button>
//           <button
//             type="button"
//             className="video-carousel__btn video-carousel__btn--next"
//             onClick={next}
//             aria-label="Next videos"
//           >
//             <i className="fa fa-angle-right" aria-hidden="true" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default VideoList;


import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import FeaturedVideo from "./FeaturedVideo";
import VideoCard from "./VideoCardTemp.jsx";
import "./Videos.css";

const DURATION = "02:35:18";
const DATE = "Dec 17, 2019";

const videos = [
  { id: 1, title: "Electric Love Festival 2019 - The Opening Ceremony", image: "/img/videos/videos-1.jpg", url: "https://www.youtube.com/watch?v=yJg-Y5byMMw" },
  { id: 2, title: "Tiësto - Live Electric Daisy Carnival Las Vegas 2019", image: "/img/videos/videos-2.jpg", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
  { id: 3, title: "Martin Garrix - Live @ Ultra Music Festival Miami 2019", image: "/img/videos/videos-3.jpg", url: "https://www.youtube.com/watch?v=yJg-Y5byMMw" },
  { id: 4, title: "Armin van Buuren live at Tomorrowland 2019", image: "/img/videos/videos-4.jpg", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
  { id: 5, title: "Armin van Buuren live at Tomorrowland 2019", image: "/img/videos/videos-4.jpg", url: "https://www.youtube.com/watch?v=yJg-Y5byMMw" },
  { id: 6, title: "Martin Garrix - Live @ Ultra Music Festival Miami 2019", image: "/img/videos/videos-3.jpg", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
  { id: 7, title: "Electric Love Festival 2019 - The Opening Ceremony", image: "/img/videos/videos-1.jpg", url: "https://www.youtube.com/watch?v=yJg-Y5byMMw" },
  { id: 8, title: "Tiësto - Live Electric Daisy Carnival Las Vegas 2019", image: "/img/videos/videos-2.jpg", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
].map((v) => ({ ...v, duration: DURATION, date: DATE }));

// 4 cards on desktop, 2 on tablets / small laptops, 1 on phones
function useVisibleCount() {
  const get = () =>
    window.innerWidth <= 575 ? 1 : window.innerWidth <= 1199 ? 2 : 4;
  const [count, setCount] = useState(get);

  useEffect(() => {
    const onResize = () => setCount(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return count;
}

function VideoList() {
  const visible = useVisibleCount();
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const maxIndex = Math.max(videos.length - visible, 0);

  // keep the position valid when the screen size changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // slide the track with JS: move by one card width + gap
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const move = () => {
      const slide = track.children[0];
      if (!slide) return;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const step = slide.getBoundingClientRect().width + gap;
      track.style.transform = `translateX(${-index * step}px)`;
    };

    move();
    window.addEventListener("resize", move);
    return () => window.removeEventListener("resize", move);
  }, [index, visible]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section className="videos-section">
      <div className="container">
        {/* Section heading */}
        <div className="videos-heading">
          <span>Latest Videos</span>
          <h2>YouTube Feed</h2>
        </div>

        {/* Featured video */}
        <FeaturedVideo />

        {/* Carousel */}
        <div className="video-carousel" style={{ "--visible": visible }}>
          <div className="video-carousel__viewport">
            <div className="video-carousel__track" ref={trackRef}>
              {videos.map((video) => (
                <div className="video-carousel__slide" key={video.id}>
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="video-carousel__btn video-carousel__btn--prev"
            onClick={prev}
            aria-label="Previous videos"
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="video-carousel__btn video-carousel__btn--next"
            onClick={next}
            aria-label="Next videos"
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideoList;
