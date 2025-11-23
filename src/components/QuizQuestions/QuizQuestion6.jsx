import React, { useState } from "react";
import Option from "./Option";

function QuizQuestion6({ choiceSelected }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const question = "To share your writing report with someone, you can simply click the ‘Copy Report Link’ option in the sidebar, or copy the link directly from the URL.";
  const options = [
    "True",
    "False",
  ];

  const correctAnswer = "True";

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
      <h2>Quiz Question 6</h2>
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

export default QuizQuestion6;
