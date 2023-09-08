import { useState, useEffect } from "react";
import "./Navbar.css";
import ntwistdark from "../../assets/images/ntwistdark.png";
import ntwistlight from "../../assets/images/ntwistlight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <div className="left-menu">
        <img src={scrolled ? ntwistdark : ntwistlight} alt="ntwist logo" />
      </div>
      <div className="right-menu">
        <ul className="menu-items">
          <li>
            <a href="#">HOME</a>
          </li>
          <li className="dropdown">
            <a href="#">
              INDUSTRIES <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <div className="dropdown-content">
              <a href="#option1">Sustainability</a>
              <a href="#option2">Mineral Processing</a>
              <a href="#option3">Mine-To-Mill-To-Mine Processing</a>
              <a href="#option4">Oil & Gas</a>
            </div>
          </li>
          <li>
            <a href="#">AI SOFTWARE</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
