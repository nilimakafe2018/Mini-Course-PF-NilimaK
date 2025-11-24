import YouTube from "react-youtube";

function Video() {

  const videoOptions = {
    height: "450",
    width: "800",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        marginTop: "0px",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <h2>Course Introduction Video</h2>
        <p>Please watch the video completely before clicking Next.</p>
        {/* embedding youtube video */}
        <YouTube videoId="GC_bSiYrfRQ" opts={videoOptions} />
      </div>
    </div>
  );
}

export default Video;
