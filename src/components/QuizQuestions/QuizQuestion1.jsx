import React, { useState } from "react";
import Option from "./Option"; //option component that used to display each answer choice

//receving callback function choiceSelected from its parent
function QuizQuestion1({ choiceSelected }) {
  //state to store which option the user selected
  const [selectedOption, setSelectedOption] = useState("");

  //quiz questions and options
  const question = "What is the main purpose of the Process Feedback mini-course?";
  const options = [
    "To learn JavaScript React",
    "To get familiar with Process Feedback application",
    "To learn CSS Grid and Flexbox",
    "To submit assignments automatically"
  ];
  const correctAnswer = "To get familiar with Process Feedback application";

  //called when option is selected
  function handleSelectionChange(selectedChoice) {
    setSelectedOption(selectedChoice); //update selected option in state
    if (selectedChoice == correctAnswer) {
      choiceSelected(true) //notify parent that the answer is correct
    }
    else {
      choiceSelected(false); //notify parent that the answer is wrong
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", margin: "50px" }}>
      <h2>Quiz Question 1</h2>
      <p>{question}</p>

      {/* looping all the options array adn render all options using Option child component */}
      <div>
        {options.map((option) => (
          <Option
            key={option} 
            optionText={option}
            selectedOption={selectedOption} //pass current selected option
            onSelect={handleSelectionChange} //callback when user select an option
          />
        ))}
      </div>

    </div>
  );
}

export default QuizQuestion1;
