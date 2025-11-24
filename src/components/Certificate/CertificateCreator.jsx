import React, { useState } from "react";
import CertificatePreview from "./CertificatePreview";

function CertificateCreator() {
  //Storing user's name, chosen color for certificate, extra custon text
  const [name, setName] = useState("");
  const [color, setColor] = useState("#4a89f0ff");
  const [customItems, setCustomItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  //Adding new custom text item to the list
  const addItem = () => {
    if (!newItem) return; 
    setCustomItems([...customItems, newItem]);
    setNewItem("");
  };

  //Editing an existing custom text item
  const editItem = (index, value) => {
    const updated = [...customItems]; 
    updated[index] = value;
    setCustomItems(updated); 
  };

  //Deleteing a custom item by removing it from the array
  const deleteItem = (index) => {
    setCustomItems(customItems.filter((_, i) => i !== index));
  };

  return (
    <div className="certificate-container">
      <h2>
        Congratulations, You passed!
        <span className="clap-emoji">👏</span>
      </h2>
      <h4>Create Your Certificate! Please don't forget to take a screenshot of your certificate and send it to your professor.</h4>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Please choose your certificate color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      {/* Adding a custom text field */}
      <div>
        <input
          type="text"
          placeholder="Add custom text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {/* List of all added custom items with edit + delete buttons */}
      <ul>
        {customItems.map((item, index) => (
          <li key={index}>
            <input
              value={item}
              onChange={(e) => editItem(index, e.target.value)}
            />
            {/* Removing items */}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Live certificate Preview */}
      <CertificatePreview
        name={name}
        color={color}
        customItems={customItems}
      />
    </div>
  );
}

export default CertificateCreator;
