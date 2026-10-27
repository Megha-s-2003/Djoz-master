



// import React from "react";


// function TourItem({ tour, index }) {
//   if (!tour) {
//     console.error("TourItem: tour data is missing", { index });
//     return null;
//   }

//   return (
//     <>
//       {/* Tour Details */}
//       <div 
//         className={`col-lg-6 ${
//           index === 1 ? "order-lg-4" : index === 2 ? "order-lg-5" : "order-lg-1"
//         }`}
//       >
//         <div
//           className={`tours__item__text ${
//             index === 1 ? "tours__item__text--right" : ""
//           }`}
//         >
//           <h2>{tour.title}</h2>

//           <div className="tours__text__widget">
//             <ul>
//               <li>
//                 <i className="fa fa-clock-o"></i>
//                 <span>{tour.time}</span>
//                 <span>{tour.date}</span>
//               </li>
//               <li>
//                 <i className="fa fa-map-marker"></i>
//                 {tour.location}
//               </li>
//             </ul>

//             <div className="price">{tour.price}</div>
//           </div>

//           <div className="tours__text__desc">
//             <p>{tour.description1}</p>
//             <p>{tour.description2}</p>
//           </div>

//           <a href="#tickets" className="primary-btn border-btn">
//             Buy tickets
//           </a>
//         </div>
//       </div>

//       {/* Tour Image */}
//       <div
//         className={`col-lg-6 ${
//           index === 1 ? "order-lg-3" : index === 2 ? "order-lg-6" : "order-lg-2"
//         }`}
//       >
        
// <div
//   className={`tours__item__pic ${
//     index === 1 ? "tours__item__pic--left" : ""
//   }`}
// >
//   <img src={tour.image} alt={tour.title || "Tour"} />
// </div>

//       </div>
//     </>
//   );
// }

// export default TourItem;


import React from "react";

function TourItem({ tour, index }) {
  if (!tour) return null;

  // 2nd, 4th... tour: image on the left, text on the right
  const isReversed = index % 2 === 1;

  return (
    <div className={`row tours__row ${isReversed ? "tours__row--reverse" : ""}`}>
      {/* Text */}
      <div className="col-lg-6">
        <div className="tours__item__text">
          <h2>{tour.title}</h2>

          <div className="tours__text__widget">
            <ul>
              <li>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <span>{tour.time}</span>
                <span className="tours__sep">|</span>
                <span>{tour.date}</span>
              </li>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>{tour.location}</span>
              </li>
            </ul>

            <div className="price">{tour.price}</div>
          </div>

          <div className="tours__text__desc">
            <p>{tour.description1}</p>
            <p>{tour.description2}</p>
          </div>

          <a href="#tickets" className="primary-btn">
            Buy tickets
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="col-lg-6">
        <div
          className={`tours__item__pic ${
            isReversed ? "tours__item__pic--left" : ""
          }`}
        >
          <img src={tour.image} alt={tour.title || "Tour"} />
        </div>
      </div>
    </div>
  );
}

export default TourItem;