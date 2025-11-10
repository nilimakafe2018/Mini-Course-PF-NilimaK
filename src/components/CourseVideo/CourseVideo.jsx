import Button from "../Button/Button"; // importing my child component 
import YouTube from "react-youtube";
import React from "react";
import { useNavigate } from "react-router-dom"; 

function CourseVideo() {
  const navigate = useNavigate();

  const videoOptions = {
    height: "450",
    width: "800",
    playerVars: {
      autoplay: 0, //no autoplay
    },
  };

  const handleNext = () => {
    navigate("/quiz1"); //redirecting to my first MC quiz page
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        margin: "100px",
      }}
    >

      <h2>Course Introduction Video</h2>
      <p>Please watch the video completely before clicking Next.</p>

      <YouTube videoId="GC_bSiYrfRQ" opts={videoOptions} />

      <Button text="Next" onClick={handleNext} />
    </div>
  );
}

export default CourseVideo;
