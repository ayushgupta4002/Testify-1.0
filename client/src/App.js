
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Login";
import Documentation from "./Documentation";

function App() {


  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      
    }, 2000);
  }


  return (
    <Routes>
      <Route path="/" element={<>
        <Home /></>}/>
        <Route path="/docs" element={<>
        <Documentation /></>}/>
      <Route path='/login' element={<Login/>}/>    
    </Routes>
  );
}

export default App;
