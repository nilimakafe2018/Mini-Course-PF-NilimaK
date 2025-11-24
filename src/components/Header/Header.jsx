import { useNavigate } from "react-router-dom"; //importing navigate hook
import logo from "../../assets/PFLogo.png";
import "./Header.css";

function Header() {
  // Initialize navigation
  const navigate = useNavigate();

  //click handler to go to home page
  const handleLogoClick = () => {
    navigate("/");
  }

  return (
    <header className="header">
      {/*PF logo on the left side in navbar*/}
      <div className="header-left">
        <img src={logo} alt="Process Feedback Logo" className="logo"
          onClick={handleLogoClick} //when click on logo, it navigates home page
          style={{ cursor: "pointer" }} //making to look clickable
        />

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
