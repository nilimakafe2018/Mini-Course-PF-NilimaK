import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Option from "./Option"; // importing reusable child component
import Button from "../Button/Button";
import Header from "../Header/Header.jsx";

function QuizQuestion3({ choiceSelected }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const question = "In the report page, what does copy-paste-events section does?";
  const options = [
    "It shows how many times I copy-pasted during my writing journey",
    "It displays the number of comments the instructor left on my final submission.",
    "It shows how long I spent writing each paragraph of the assignment.",
    "It tracks the number of grammar and spelling mistakes in my draft."
  ];

  const correctAnswer = "It shows how many times I copy-pasted during my writing journey";

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
      <h2>Quiz Question 3</h2>
      <p>{question}</p>

      {/* Render all options using Option child component */}
      <div>
        {options.map((option) => (
          <Option
            key={option}
            optionText={option}
            selectedOption={selectedOption}
            onSelect={handleSelectionChange} //updates parent state
          />
        ))}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* <Button text="Next" onClick={handleNext} /> */}
    </div>
  );
}

export default QuizQuestion3;
