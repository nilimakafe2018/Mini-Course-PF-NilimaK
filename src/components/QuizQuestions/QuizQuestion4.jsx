import React, { useState } from "react";
import Option from "./Option";

function QuizQuestion4({ choiceSelected }) {
  const [selectedOption, setSelectedOption] = useState("");

  const question = "None of the charts on the report page are interactive.";
  const options = [
    "True",
    "False"
  ];

  const correctAnswer = "Flase";

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
      <h2>Quiz Question 4</h2>
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

    </div>
  );
}

export default QuizQuestion4;
