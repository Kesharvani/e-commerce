import "./Footer.css"
import { NavLink } from "react-router-dom";
// import City_Store3 from "../Assets/City_Store3.png";
const City_Store3='https://images.freeimages.com/images/large-previews/46e/red-beetle-1416148.jpg'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-sub-container">
        <div className="footer-first-line">
          <NavLink to="/">
            <img
              src={City_Store3}
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
          <NavLink>Facebook</NavLink>
          <NavLink>Instagram</NavLink>
          <NavLink>Twitter</NavLink>
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