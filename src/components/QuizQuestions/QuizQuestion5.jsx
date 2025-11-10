import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Option from "./Option"; // importing reusable child component
import Button from "../Button/Button";
import Header from "../Header/Header.jsx";
import "./QuizQuestion.css";


function QuizQuestion5({ saveAnswer }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const question = "What is the main purpose of the Process Feedback mini-course?";
  const options = [
    "To learn React",
    "To get familiar with Process Feedback application",
    "To learn CSS Grid and Flexbox",
    "To submit assignments automatically"
  ];

  const correctAnswer = "To get familiar with Process Feedback application";

  const handleNext = () => {
    if (!selectedOption) {
      setError("Please select an answer before proceeding.");
      return;
    }

    setError("");
    // Pass result (true/false) to parent App or central state
    saveAnswer("q5", selectedOption === correctAnswer);

    // Navigate to next quiz page
    navigate("/quiz6");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", margin: "50px" }}>
      <h2>Quiz Question 5</h2>
      <p>{question}</p>

      {/* Render all options using Option child component */}
      <div>
        {options.map((option) => (
          <Option
            key={option}
            optionText={option}
            selectedOption={selectedOption}
            onSelect={setSelectedOption} // updates parent state
          />
        ))}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Button text="Next" onClick={handleNext} />
    </div>
  );
}

export default QuizQuestion5;
