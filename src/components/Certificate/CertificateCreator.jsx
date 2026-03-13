import CertificatePreview from "./CertificatePreview";
import html2canvas from "html2canvas";
import React, { useState, useEffect } from "react";

function CertificateCreator() {
  //Storing user's name, chosen color for certificate, extra custon text
  const [name] = useState(localStorage.getItem("fullname") || "");
  const [color, setColor] = useState("#4a89f0ff");
  const [customItems, setCustomItems] = useState([]);
  const [certificateExists, setCertificateExists] = useState(false);//state to check if certificate already exists 
  

  //useEffect to check if certificate already exists for the user when the component mounts
  useEffect(() => {
  const userId = localStorage.getItem("userId");

  const checkCertificate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/certificates/user/${userId}`);

      if (response.ok) {
        const data = await response.json();
        setCertificateExists(true);

        if (data.certificateColor) {
          setColor(data.certificateColor);
        }
      }
    } catch (err) {
      console.error("Error checking certificate:", err);
    }
  };

  checkCertificate();
}, []);
  
  //temporary state for storing the text typed in "Add custom text" input
  const [newItem, setNewItem] = useState("");

  //function to add a new custom text item to the list of custom items, then clearing the input field
  const addItem = () => {
    if (!newItem) return;
    setCustomItems([...customItems, newItem]);
    setNewItem("");
  };

  //function to handle certificate download
  //first checks if the certificate already exists for the user, if not it creates a new one
  const handleDownload = async () => {
    const userId = localStorage.getItem("userId"); //getting the userid stored in localstorage during registration

    try {
      //first checking if the certificate already exists
      let response = await fetch(`http://localhost:8080/api/certificates/user/${userId}`);

      //if certificate does not exist create new one call the backend API to create new certificate
      if (response.status === 404) {
        response = await fetch(
          `http://localhost:8080/api/certificates/${userId}?color=${encodeURIComponent(color)}`,
          { method: "POST", }
        );

        //console.log("Certificate creation response:", response);
        //show error if certificate creation failed, i need to work more in this logic
        if (!response.ok) {
          alert("Failed to create certificate. Please try again.");
          return;
        }
        setCertificateExists(true); //updating state to true after creating certificate  
      }else if (!response.ok) {
        setCertificateExists(false);
        return;
      }

      //downloading certificate from the page
      const certificate = document.querySelector(".certificate");

      html2canvas(certificate).then((canvas) => {
        const link = document.createElement("a");
        link.download = "certificate.png";
        link.href = canvas.toDataURL();
        link.click();
      });

    } 
    //showing error if there is an issue with fetching or creating certificate
    catch (err) {
      alert("Sorry, something went wrong while creating the certificate, please try again.");
    }

  };

  //updating existing user data
  const updateUser = async() =>{
    const userId= localStorage.getItem("userId");
    const fullname= localStorage.getItem("fullname");
    const institution= localStorage.getItem("institution");
    const email= localStorage.getItem("email");

  try{
    const response= await fetch(`http://localhost:8080/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name:fullname, email:email, institution:institution }),
    });
    if (!response.ok) {
      throw new Error("Sorry, failed to update user. Please try again.");
      return;
    }
    alert("User information updated successfully.");

   } catch(err){ 
      alert("Sorry, something went wrong while updating the user information, please try again.");      
    }
  };

  //deleting current user
  const deleteUser = async() =>{
    const userId= localStorage.getItem("userId");

  try{
    const response= await fetch(`http://localhost:8080/api/users/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Sorry, failed to delete user. Please try again.");
      return;
    }

    localStorage.removeItem("userId");
    localStorage.removeItem("fullname");
    localStorage.removeItem("institution");
    localStorage.removeItem("email");

    alert("User deleted successfully.");
  
   } catch(err){
      alert("Sorry, something went wrong while deleting the user, please try again.");      
    }
  };

  return (
    <div className="certificate-container">
      <h2>
        Congratulations, You passed!
        <span className="clap-emoji">👏</span>
      </h2>
      <h4>Create your custom certificate! Please don't forget to download your certificate.</h4>

      <div className="input-group">
        <input
          type="text"
          // placeholder="Enter full name"
          value={name}
          readOnly
        //onChange={(e) => setName(e.target.value)} //updatng name as user type
        />
      </div>

      <div className="input-group">
        <label>Please choose your certificate color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)} //user picking color
          disabled={certificateExists} 
        />
      </div>

      {/* user adding a custom text field */}
      <div>
        <input
          type="text"
          placeholder="Add custom text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          
        />
        <button onClick={addItem}>Add</button>
      </div>

      {/* Live certificate Preview */}
      {/* sending all info to certifcatePreview component to see live preview */}
      <CertificatePreview
        name={name}
        color={color}
        customItems={customItems}
      />

      <button onClick={handleDownload} style={{ marginTop: "20px" }}>
        {certificateExists ? "Download Existing Certificate" : "Create and Download Certificate"}
      </button>

      <div style={{marginTop:"15px"}}>
        <button onClick={updateUser} style={{ marginRight: "10px" }}>
          Update User Information
        </button>

        <button onClick={deleteUser}>
          Delete User
        </button>
      </div>
    </div>
  );
}

export default CertificateCreator;
