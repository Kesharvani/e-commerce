import "./UserProfile.css";
import Footer from "../../Components/Footer";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const { logoutHandler } = useAuth();
  const navigate = useNavigate();
  const { user } = JSON.parse(localStorage.getItem("loginTokenItem"));

  return (
    <div className="user_profile">
      <p>
        Name:{user.firstName} {user.lastName}
      </p>
      <p>Email:{user.email}</p>
      <button
        style={{ padding: "1rem", color: "white", width: "20%" }}
        onClick={() => navigate("/useraddress")}
      >
        Address
      </button>
      <button
        style={{ padding: "1rem", color: "white", width: "20%" }}
        onClick={logoutHandler}
      >
        Logout
      </button>
      <Footer />
    </div>
  );
};
export default UserProfile;
