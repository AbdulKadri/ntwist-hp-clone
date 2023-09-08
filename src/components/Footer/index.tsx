import "./Footer.css";
import ntwistlight from "../../assets/images/ntwistlight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={ntwistlight} alt="logo" />
      </div>

      <ul className="footer-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>

      <div className="footer-address">
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      </div>

      <ul className="footer-social">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>

      <div className="footer-copyright">
        <p>© 2022. Ntwist Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
