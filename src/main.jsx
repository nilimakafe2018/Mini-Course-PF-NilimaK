import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

//Render the App component inside the root element of the page
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

