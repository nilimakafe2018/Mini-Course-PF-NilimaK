import React, { useState } from "react";

function Login() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // store values globally so CourseVideo can check them
  window.fullname = fullname;
  window.email = email;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "30vh",
        gap: "30px",
        marginTop: "0px",
        paddingBottom: "20px",
      }}
    >
      <div
        className="home-inputs"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* input for full name */}
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          style={{ width: "350px", padding: "10px" }}
        />

        {/* input for email */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "350px", padding: "10px" }}
        />

        {error && <p style={{color:"red"}}>{error}</p>}

        {/* showing error to parent by attaching it */}
        {(window.loginSetError = setError)}

      </div>
    </div>
  );
}

export default Login;
