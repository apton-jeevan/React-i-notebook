import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Alert from "./Components/Alert";
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import NoteState from "./Context/NoteState";

function App() {

  return (
    <>
      <NoteState>

        <Router>
          <Navbar />
          <Alert message="Welcome to Ooty Nice to meet You" />
          <div className="container my-4">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
