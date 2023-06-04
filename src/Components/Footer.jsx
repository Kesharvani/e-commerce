import "./Footer.css"
import { NavLink } from "react-router-dom";
import logo_e_commerce from "../Assets/logo_e_commerce.png"


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-sub-container">
        <div className="footer-first-line">
          <NavLink to="/">
            <img
              src={logo_e_commerce}
              alt="store logo"
              width="70px"
              height="50px"
            />
          </NavLink>
          <NavLink>
            <p>Privacy Policy</p>
          </NavLink>
          <NavLink>
            <p>Term Of Use</p>
          </NavLink>
        </div>
        <div className="footer-second-line">
          <strong>Connect</strong>
          <NavLink to='https://www.linkedin.com/in/shubham-kesharvani-038a88129/'>LinkedIn</NavLink>
          <NavLink to='https://www.instagram.com/kesharwani_20/'>Instagram</NavLink>
          <NavLink to="https://twitter.com/Kesharwani2008">Twitter</NavLink>
        </div>
        <div className="footer-third-line">
          <strong>Resources</strong>
          <NavLink to="/auth">Sign Up</NavLink>
          <NavLink to="/auth">Sign In</NavLink>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright <span className="footer-name">Shubham Kesharvani</span>
      </div>
    </footer>
  );
};
export default Footer