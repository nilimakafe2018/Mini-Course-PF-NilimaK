import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Option from "./Option";

function QuizQuestion2({choiceSelected}) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const question = "In the report page of Process Feedback, when you want to view your detailed writing process, which option should you choose?";
  const options = [
    "Quick Report",
    "Options",
    "Next",
    "Full Report"
  ];
  const correctAnswer = "Full Report";

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
      <h2>Quiz Question 2</h2>
      <p>{question}</p>

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

    </div>
  );
}

export default QuizQuestion2;
