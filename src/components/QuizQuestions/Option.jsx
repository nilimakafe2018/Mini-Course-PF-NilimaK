// Option component for a single radio button
function Option({ optionText, selectedOption, onSelect }) {
  return (
    <label style={{ cursor: "pointer", display: "block", marginBottom: "8px" }}>
      {/* radio input */}
      <input
        type="radio"
        value={optionText}
        checked={selectedOption === optionText} //check if this option is currently selected
        onChange={() => onSelect(optionText)} //call parent handler to update selected option
      />
      
      {" "}{optionText}
    </label>
  );
}

export default Option;
