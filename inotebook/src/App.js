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
// import NoteState from "./Context/NoteState";

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <div className="container my-4">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
