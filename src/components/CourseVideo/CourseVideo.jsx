import Header from "../Header/Header.jsx";
import React from "react";
import YouTube from "react-youtube";


function CourseVideo(){
    const videoOptions = {
        height: "450",
        width: "800",
        playerVars: {
            autoplay:0, //no auto play my video
        },

    }

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"20px", margin:"100px"}}>
            <h2>Course Introduction Video</h2>

            {/* adding my video id from youtube link */}
            <YouTube videoId="GC_bSiYrfRQ" opts={videoOptions}/> 

            <button 
                style={{
                    padding:"10px 20px",
                    fontSize:"16px",
                    cursor:"pointer",
                    borderRadius:"5px",
                    background:"#85f183",
                    border:"none"
                }}
            >
                Next

            </button>

        </div>
    )
}


export default CourseVideo;
