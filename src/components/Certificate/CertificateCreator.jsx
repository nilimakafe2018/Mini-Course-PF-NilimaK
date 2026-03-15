import CertificatePreview from "./CertificatePreview";
import html2canvas from "html2canvas";
import React, { useState, useEffect } from "react";

function CertificateCreator() {
  const [name] = useState(localStorage.getItem("fullname") || "");  //get user name from local storage and keep in state
  const [email] = useState(localStorage.getItem("email") || "");    //get user email from local storage and keep in state
  const [color, setColor] = useState("#4a89f0ff");                
  const [customItems, setCustomItems] = useState([]);               
  const [certificateExists, setCertificateExists] = useState(false); 
  const [message, setMessage] = useState("");                        
  const [canEditColor, setCanEditColor] = useState(true);           
  const [newItem, setNewItem] = useState("");                           

  //checking if the current user already has certificate 
  useEffect(() => {
    const userId = localStorage.getItem("userId");

    //function to call backend and checkk for existing certificate
    const checkCertificate = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/certificates/user/${userId}`);

        if (response.ok) {
          const data = await response.json();
          setCertificateExists(true);   //mark this user has already has certificate
          setCanEditColor(false);       //locking color picker initially

          //load the saved certificate color from db
          if (data.certificateColor) {
            setColor(data.certificateColor);
          }
        }
      } catch (err) {
        console.error("Error checking certificate");
      }
    };

    checkCertificate();
  }, []);

  //adding custom text
  const addItem = () => {
    if (!newItem) return;
    setCustomItems([...customItems, newItem]);     //adding new custom text to the list
    setNewItem("");
  };

  //handle creating or updating certificate and downloading it
  const handleDownload = async () => {
    const userId = localStorage.getItem("userId");
    setMessage("");

    try {
      //first time user, create new certificate in the db
      if (!certificateExists) {
        const response = await fetch(
          `http://localhost:8080/api/certificates/${userId}?color=${encodeURIComponent(color)}`,
          { method: "POST" }
        );

        if (!response.ok) {
          setMessage("Failed to create certificate. Please try again.");
          return;
        }

        //mark certificate as created and lock color editing
        setCertificateExists(true);
        setCanEditColor(false);     
      } else if (canEditColor) {
        const response = await fetch(
          `http://localhost:8080/api/certificates/${userId}?color=${encodeURIComponent(color)}`,
          { method: "PUT" }
        );

        if (!response.ok) {
          setMessage("Failed to update certificate color.");
          return;
        }

        //locking color picker again
        setCanEditColor(false);
      }

      //capture certificate preview as image
      const certificate = document.querySelector(".certificate");

      if (!certificate) {
        setMessage("Certificate preview not found.");
        return;
      }

      //converting certificate html into an image
      html2canvas(certificate).then((canvas) => {
        const link = document.createElement("a");
        link.download = "certificate.png";
        link.href = canvas.toDataURL();   //convert canvas to downloadable url
        link.click();
      });
    } catch (err) {
      setMessage("Sorry, something went wrong while downloading the certificate. Please try again.");
    }
  };

  //unlocking color picker so user can change certificate color
  const updateCertificate = () => {
    setMessage("");
    setCanEditColor(true);  //enable color editing
    setMessage("You can now choose a new color.");
  };

  //deleting the user from db
  const deleteUser = async () => {
    const userId = localStorage.getItem("userId");
    setMessage("");

    try {
      const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        setMessage("Sorry, failed to delete user. Please try again.");
        return;
      }

      //removing all stored user information
      localStorage.removeItem("userId");
      localStorage.removeItem("fullname");
      localStorage.removeItem("institution");
      localStorage.removeItem("email");

      setMessage("User deleted successfully.");
    } catch (err) {
      setMessage("Sorry, something went wrong while deleting the user, please try again.");
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
        <input type="text" value={name} readOnly />
      </div>

      <div className="input-group">
        <label>Please choose your certificate color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          disabled={!canEditColor}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Add custom text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {/*live preview of the certificate */}
      <CertificatePreview
        name={name}
        email={email}
        color={color}
        customItems={customItems}
      />

      <button onClick={handleDownload} style={{ marginTop: "20px" }}>
        {certificateExists ? "Download Existing Certificate" : "Create and Download Certificate"}
      </button>

      {/* update and delete buttonsupdate and delete */}
      <div style={{ marginTop: "15px" }}>
        <button
          onClick={updateCertificate}
          style={{ marginRight: "10px" }}
          disabled={!certificateExists || canEditColor} //olny allow update if the certificate already downloaded before
        >
          Update Certificate Color
        </button>

        <button onClick={deleteUser}>
          Delete User
        </button>
      </div>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>} 
    </div>
  );
}

export default CertificateCreator;