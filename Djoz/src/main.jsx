
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Plugin styles
import "./assets/css/owl.carousel.min.css";
import "./assets/css/barfiller.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/nowfont.css";

// Main template stylesheet — keep this last
import "./assets/css/style.css";

// App
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
