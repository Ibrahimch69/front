import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./composants/Login";
import Signup from "./composants/Singup";
import Home from "./composants/Home";

 
function App() {
  return (

    <div className="App"> 
      <BrowserRouter >  
       <Routes >
        <Route  path="/home" element={<Home/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/signup" element={<Signup/>} />
        <Route path="/signup/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}
 
export default App;