import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import AboutHeader from "./AboutHeader";
import AboutSkills from "./AboutSkills";
import AboutContent from "./AboutContent";
import AboutGallery from "./AboutGallery";
import AboutServices from "./AboutServices";
import AboutFooter from "./AboutFooter";

function AboutPage() {
  return (
    <>
    <AboutHeader/>
      
<div className="about-breadcrumb">
  <div className="about-breadcrumb-container">
    <Link to="/" className="breadcrumb-home">
      <i className="fa fa-home" aria-hidden="true"></i>
      <span>Home</span>
    </Link>
    <span className="breadcrumb-divider">|</span>
    <span className="breadcrumb-current">About</span>
  </div>
</div>

      <AboutSkills />
      <AboutContent />
      <AboutGallery />
      <AboutServices />
      <AboutFooter/>
    </>
  );
}

export default AboutPage;
