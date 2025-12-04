import { useNavigate } from "react-router-dom"; //hook for internal navigation
import logo from "../../assets/PFLogo.png";
import "./Header.css";

function Header() {
  const navigate = useNavigate(); //navigating to internal pages

  // navigate to homepage
  const handleLogoClick = () => {
    navigate("/");
  };

  //open about pf page
  const handleAboutClick = () => {
    window.open("https://www.processfeedback.org/about/", "_blank");
  };

  // Navigate to internal contact page
  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <header className="header">

      {/* Left: Logo */}
      <div className="header-left">
        <img
          src={logo}
          alt="Process Feedback Logo"
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Right: Navigation items */}
      <nav className="header-right">
        <div
          className="nav-item"
          onClick={handleAboutClick}
          style={{ cursor: "pointer" }}
        >
          About Process Feedback
        </div>

        <div
          className="nav-item"
          onClick={handleContactClick}
          style={{ cursor: "pointer" }}
        >
          Contact Us
        </div>
      </nav>

    </header>
  );
}

export default Header;
