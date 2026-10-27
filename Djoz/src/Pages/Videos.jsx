
import React from "react";

import VideosHeader from "../Components/Videos/VideosHeader";
import VideosBreadcrumb from "../Components/Videos/VideosBreadcrumb";
import VideoList from "../Components/Videos/VideoList";
import VideosFooter from "../Components/Videos/VideosFooter";

import "../Components/Videos/Videos.css";

function Videos() {
  return (
    <>
      <VideosHeader />

      <main>
        <VideosBreadcrumb />

        <VideoList />
      </main>

      <VideosFooter />
    </>
  );
}

export default Videos;
