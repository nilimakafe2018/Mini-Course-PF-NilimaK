import React, { useState } from "react";
import Option from "./Option";

function QuizQuestion5({ choiceSelected }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const question = "On the report page, in the text-added and text-removed bubble chart, what does the red bubble represent??";
  const options = [
    "Text removed",
    "Text modified",
    "No change",
    "Text added"
  ];

  const correctAnswer = "Text removed";

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
      <h2>Quiz Question 5</h2>
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

    </div>
  );
}

export default QuizQuestion5;
