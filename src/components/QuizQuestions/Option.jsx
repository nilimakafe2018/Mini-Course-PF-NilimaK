import React from "react";

// Option component for a single radio button
function Option({ optionText, selectedOption, onSelect }) {
  return (
    <label style={{ cursor: "pointer", display: "block", marginBottom: "8px" }}>
      <input
        type="radio"
        value={optionText}
        checked={selectedOption === optionText} // check if this option is selected
        onChange={() => onSelect(optionText)} // call parent handler when selected
      />
      {" "}{optionText}
    </label>
  );
}

export default Option;
