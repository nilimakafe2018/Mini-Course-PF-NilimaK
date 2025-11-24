import { useNavigate } from "react-router-dom";

function ReDo() {
  const navigate = useNavigate();

  // function to restart the course by navigating to the home page
  const handleRestart = () => {
    // redirect to the home page
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Sorry, you did not achieve the minimum score required to pass the course. Please try again.</h2>

      <button
        onClick={handleRestart}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#85f183",
          color: "black",
          marginTop: "20px"
        }}
      >
        Start Again
      </button>
    </div>
  );
}

export default ReDo;
