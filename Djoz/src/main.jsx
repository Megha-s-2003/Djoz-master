
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/style.css";
// import "./assets/css/nowfont.css";
// // import "/fonts/rockville.css";
// import "./assets/css/owl.carousel.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );



import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/css/style.css";
import "./assets/css/nowfont.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/barfiller.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/slicknav.min.css";

// Rockville CSS is loaded through index.html from public/fonts/
// import "/fonts/rockville.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
