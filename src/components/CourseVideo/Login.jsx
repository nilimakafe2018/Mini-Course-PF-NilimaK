import React, { useState } from "react";

//function to notify parent when user creation is successful, and whether the user already has a certificate or not
function Login({onLoginSuccess}) {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [institution, setInstitution] = useState("");

  const handleStartCourse = async() => {
    setError("");

    if (!fullname || !email || !institution) {
      setError("Please enter your name, email, and institution!");
      return;
    }

    try{
      //sending a post request to backend to create a new user 
      const response= await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name:fullname, email:email, institution:institution }),
      });

       if (!response.ok) {
         throw new Error("Sorry, failed to create user. Please try again.");
       }

      const data= await response.json(); //converting response into json

      //storing user data in localstorage for later use
      localStorage.setItem("userId", data.id);
      localStorage.setItem("fullname", data.name);
      localStorage.setItem("institution", data.institution);
      localStorage.setItem("email", data.email);

      //checking if this user already has a certificate
      const certResponse = await fetch(`http://localhost:8080/api/certificates/user/${data.id}`);

      setFullName("");
      setEmail("");
      setInstitution("");
      //onLoginSuccess();

      if(certResponse.ok) {
        onLoginSuccess(true); //existing user with certificate
      } else{
        onLoginSuccess(false); //new user or existing user without certificate
      }

     } catch (err) {
       setError("Sorry, something went wrong while creating the user, please try again.");
     }
  };

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

        {/* input for institution */}
        <input
          type="text"
          placeholder="Enter your institution name"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          style={{ width: "350px", padding: "10px" }}
        />

        {error && <p style={{color:"red"}}>{error}</p>}
        {/* {success && <p style={{color:"green"}}>{success}</p>} */}

        <button onClick={handleStartCourse} style={{ padding: "10px 20px", backgroundColor:"#85f183",  border:"none" }}>
          Next
        </button>
       
      </div>
    </div>
  );
}

export default Login;
