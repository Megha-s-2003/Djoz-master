import React from "react";
import { Link } from "react-router-dom";
import "./Videos.css";

function VideosBreadcrumb() {
  return (
    <section className="videos-breadcrumb">
      <div className="container">
        <div className="breadcrumb__links">
          <Link to="/">
            <i className="fa fa-home" aria-hidden="true" /> Home
          </Link>
          <span className="breadcrumb__sep">|</span>
          <span className="breadcrumb__current">Videos</span>
        </div>
      </div>
    </section>
  );
}

export default VideosBreadcrumb;