import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import "./App.css";
import ContactUsForm from "./components/ContactUsForm/ContactUsForm";


function Home() {
  const[fullname, setFullName] = useState("");
  const[email, setEmail] = useState("");
  const[error, setError] = useState("");
  const[startCourse, setStartCourse] = useState(false);

  const handleStartCourse = () =>{
    if(!fullname || !email){
      setError("Please enter both your fullname and email.");
      return;
    }

    setError("");
    setStartCourse(true);

  }

  return (
    
    <div className="home-container">
      <h1>Welcome to the mini online course of Process Feedback</h1>
      <p>
        This mini online course is designed to help Process Feedback users become familiar with our application. 
        The introductory video will guide you step-by-step on how to navigate the Process Feedback tool, 
        which you will use to complete all your assignments in this course. Please make sure you understand 
        the material thoroughly so your semester can run smoothly without interruptions. If you have any 
        questions or concerns, feel free to reach out to us by clicking Contact Us in the navigation bar 
        and submitting the form. If you would like to learn more about Process Feedback, simply click About 
        Process Feedback in the navigation bar.
      </p>

      {error && <p className="error-msg">{error}</p>}

      <div className="home-inputs">
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="start-button" onClick={handleStartCourse}>
           Start Course
        </button>

      </div>
      
    </div>
  );
}

function About() {
  return <h1>About Process Feedback</h1>;
}


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactUsForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
