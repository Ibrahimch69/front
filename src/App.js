import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./composants/Login";
import Signup from "./composants/Singup";
import Home from "./composants/Home";
import Navbar from "./composants/Navbar";
import Jsp from './composants/Jsp';

 
function App() {
  return (

    <div className="App"> 
      <BrowserRouter >  
       <Routes >
        <Route  path="/home" element={<Home/>} />
        <Route  path="/" element={<Login/>} />
        <Route  path="/signup" element={<Signup/>} />
        <Route path="/signup/login" element={<Login/>} />
        <Route path="/jsp" element={<Jsp/>} />
     
        </Routes>
      </BrowserRouter>
    </div>

  );
}
 
export default App;