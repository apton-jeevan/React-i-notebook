import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from './Components/Navbar';

function App() {
  return (
    <>  
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
