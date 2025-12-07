//receiving three props. 1.optionText: text to display fot option
//2.selectedOption: the currently selected value from the parent
//3.onSelect: function from parent that handle when option is chosen
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
