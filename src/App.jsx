import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ContactUsForm from "./components/ContactUsForm/ContactUsForm";
import CourseVideo from "./components/CourseVideo/CourseVideo";
import QuizQuestion1 from "./components/QuizQuestions/QuizQuestion1";
import QuizQuestion2 from "./components/QuizQuestions/QuizQuestion2";
import QuizQuestion3 from "./components/QuizQuestions/QuizQuestion3";
import QuizQuestion4 from "./components/QuizQuestions/QuizQuestion4";
import QuizQuestion5 from "./components/QuizQuestions/QuizQuestion5";
import QuizQuestion6 from "./components/QuizQuestions/QuizQuestion6";
import Header from "./components/Header/Header";
import React, { useState } from "react";
import "./App.css";

function Home() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleStartCourse = () => {
    if (!fullname || !email) {
      setError("Please enter both your fullname and email.");
      return;
    }

    setError("");
    navigate("/course")

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
  //State to store answers
  const [answers, setAnswers] = useState({});

  //Save answer function passed to QuizQuestion1
  const saveAnswer = (question, isCorrect) => {
    //Update the answers state without console.log
    setAnswers((prev) => ({ ...prev, [question]: isCorrect }));
  };

  return (
    <Router>
      {/*my navbar will be visible always because I placed <Header /> outside of <Routes></Routes>*/}
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUsForm />} />
        <Route path="/course" element={<CourseVideo />} />
        <Route path="/quiz1" element={<QuizQuestion1 saveAnswer={saveAnswer} />} />
        <Route path="/quiz2" element={<QuizQuestion2 saveAnswer={saveAnswer} />} />
        <Route path="/quiz3" element={<QuizQuestion3 saveAnswer={saveAnswer} />} />
        <Route path="/quiz4" element={<QuizQuestion4 saveAnswer={saveAnswer} />} />
        <Route path="/quiz5" element={<QuizQuestion5 saveAnswer={saveAnswer} />} />
        <Route path="/quiz6" element={<QuizQuestion6 saveAnswer={saveAnswer} />} />
      </Routes>
    </Router>
  );
}

export default App;
