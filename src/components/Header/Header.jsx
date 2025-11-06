import React from "react";
import "./Header.css";
import logo from "../../assets/PFLogo.png";

function Header() {
  return (
    <header className="header">
      {/*PF logo on the left side in navbar*/}
      <div className="header-left">
        <img src={logo} alt="Process Feedback Logo" className="logo" />
      </div>

      {/*Navigaion links on the right side in navbar*/}
      <nav className="header-right">
        <a
          href="https://www.processfeedback.org/about/"
          target="_blank" //pf about page will open in the new tab so my my current app opens still 
        >
          About Process Feedback
        </a>
        <a href="/contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
