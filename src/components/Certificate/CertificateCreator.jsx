import React, { useState } from "react";
import CertificatePreview from "./CertificatePreview";


function CertificateCreator() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#4a89f0ff");
  const [customItems, setCustomItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Add custom content
  const addItem = () => {
    if (!newItem) return;
    setCustomItems([...customItems, newItem]);
    setNewItem("");
  };

  // Edit custom content
  const editItem = (index, value) => {
    const updated = [...customItems];
    updated[index] = value;
    setCustomItems(updated);
  };

  // Delete custom content
  const deleteItem = (index) => {
    setCustomItems(customItems.filter((_, i) => i !== index));
  };

  return (
    <div className="certificate-container">
      <h2>Congratulations, You passed!</h2>
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

      {/* Add custom items */}
      <div>
        <input
          type="text"
          placeholder="Add custom text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {/* List of editable items */}
      <ul>
        {customItems.map((item, index) => (
          <li key={index}>
            <input
              value={item}
              onChange={(e) => editItem(index, e.target.value)}
            />
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Live Preview */}
      <CertificatePreview
        name={name}
        color={color}
        customItems={customItems}
      />
    </div>
  );
}

export default CertificateCreator;
