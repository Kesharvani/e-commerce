import "./App.css";
import Header from "./Components/Header.jsx";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Header className="header" />
      <Toaster />
    </>
  );
}

export default App;
