// import React from 'react'
// import ToursHeader from "../Components/Tours/ToursHeader";
// import CountdownSection from '../Components/Tours/CountdownSelection';
// import TourItem from '../Components/Tours/TourItem';
// import "../Components/Tours/Tours.css";
// import ToursList from '../Components/Tours/ToursList';
// import ToursFooter from '../Components/Tours/ToursFooter';

// function Tours() {
//   return (
//     <div>
//       <ToursHeader/>
//       <CountdownSection/>
//       <TourItem/>
//       <ToursList/>
//       <ToursFooter/>
//     </div>
//   )
// }

// export default Tours

import React from "react";
import ToursHeader from "../Components/Tours/ToursHeader";
import CountdownSection from "../Components/Tours/CountdownSelection";
import ToursList from "../Components/Tours/ToursList";
import ToursFooter from "../Components/Tours/ToursFooter";
import "../Components/Tours/Tours.css";

function Tours() {
  return (
    <div>
      <ToursHeader />
      <CountdownSection />
      <ToursList />
      <ToursFooter />
    </div>
  );
}

export default Tours;