import React, { useState } from "react";
import Option from "./Option";

function QuizQuestion2({choiceSelected}) {
  // stores which option is selected
  const [selectedOption, setSelectedOption] = useState("");

  const question = "In the report page of Process Feedback, when you want to view your detailed writing process, which option should you choose?";
  const options = [
    "Quick Report",
    "Options",
    "Next",
    "Full Report"
  ];
  const correctAnswer = "Full Report";

  //called when option is selected
  function handleSelectionChange(selectedChoice) {
    setSelectedOption(selectedChoice); //update selected option in state
    if (selectedChoice == correctAnswer) {
      choiceSelected(true)  //notify parent that the answer is correct
    }
    else {
      choiceSelected(false);  //notify parent that the answer is wrong
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", margin: "50px" }}>
      <h2>Quiz Question 2</h2>
      <p>{question}</p>

      {/* Render all options using Option child component */}
      <div>
        {options.map((option) => (
          <Option
            key={option}
            optionText={option}
            selectedOption={selectedOption} //pass current selected option
            onSelect={handleSelectionChange} //callback when user selects an option
          />
        ))}
      </div>

    </div>
  );
}

export default QuizQuestion2;
