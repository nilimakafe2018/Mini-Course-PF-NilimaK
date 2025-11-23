import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Option from "./Option"; //importing reusable child component
import Button from "../Button/Button";


function QuizQuestion1({ choiceSelected }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const question = "What is the main purpose of the Process Feedback mini-course?";
  const options = [
    "To learn JavaScript React",
    "To get familiar with Process Feedback application",
    "To learn CSS Grid and Flexbox",
    "To submit assignments automatically"
  ];
  const correctAnswer = "To get familiar with Process Feedback application";

  function handleSelectionChange(selectedChoice) {
    setSelectedOption(selectedChoice);
    if (selectedChoice == correctAnswer) {
      choiceSelected(true)
    }
    else {
      choiceSelected(false);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", margin: "50px" }}>
      <h2>Quiz Question 1</h2>
      <p>{question}</p>

      {/* Render all options using Option child component */}
      <div>
        {options.map((option) => (
          <Option
            key={option}
            optionText={option}
            selectedOption={selectedOption}
            onSelect={handleSelectionChange}
          />
        ))}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* <Button text="Next" onClick={handleNext} /> */}
    </div>
  );
}

export default QuizQuestion1;
