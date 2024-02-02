import React from "react";
import './video.scss'
const Video = () => {
  return (
    <>
      <div className="video_wrapper" id="about-me">
        <video
          autoPlay
          muted
          loop
          className="sub_wrapper"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
    </>
  );
};

export default Video;
