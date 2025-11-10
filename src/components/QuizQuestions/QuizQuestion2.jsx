import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Option from "./Option"; // importing reusable child component
import Button from "../Button/Button";
import Header from "../Header/Header.jsx";
import "./QuizQuestion.css";

function QuizQuestion2({ saveAnswer }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  // Example Q2 question
  const question = "Which feature helps users navigate the Process Feedback tool?";
  const options = [
    "Video tutorials",
    "Automatic grading",
    "CSS styling",
    "React components"
  ];

  const correctAnswer = "Video tutorials";

  const handleNext = () => {
    if (!selectedOption) {
      setError("Please select an answer before proceeding.");
      return;
    }

    setError("");
    saveAnswer("q2", selectedOption === correctAnswer);

    // Navigate to next quiz page (or final score page)
    navigate("/quiz3"); 
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", margin: "50px" }}>
      <h2>Quiz Question 2</h2>
      <p>{question}</p>

      <div>
        {options.map((option) => (
          <Option
            key={option}
            optionText={option}
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
          />
        ))}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Button text="Next" onClick={handleNext} />
    </div>
  );
}

export default QuizQuestion2;
