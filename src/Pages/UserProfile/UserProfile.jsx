import "./UserProfile.css"
import Footer from "../../Components/Footer";
import {useAuth} from "../../Contexts/AuthContext"
export const UserProfile = () => {
   const {logoutHandler}=useAuth()
   const {user}=JSON.parse(localStorage.getItem('loginTokenItem'))
   console.log(user,"user")
  return (
    <div className="user_profile">
      <p>Name:{user.firstName} {user.lastName}</p>
      <p>Email:{user.email}</p>
      <button style={{padding:'1rem',color:'white',width:'20%'}}>Address</button>
      <button style={{padding:'1rem',color:'white',width:'20%'}} onClick={logoutHandler}>Logout</button>
      <Footer />
    </div>
  );
};
