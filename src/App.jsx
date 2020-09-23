import React, { useState } from "react";
import "./App.css";
import Thankyou from "./Thankyou";

// Components

//stripe promise publishable API key

function App({ setIsDoctor }) {
  return (
    <div className="App">
      <h1 className="welcome">Welcome to Dr.stripe</h1>
      <div className="btn_container">
        <button
          className="btnDoctor"
          onClick={() => {
            setIsDoctor("Doctor");
          }}
        >
          Doctor
        </button>
        <button
          className="btnPatient"
          onClick={() => {
            setIsDoctor("Patient");
          }}
        >
          Patient
          {/* <img src="./healthcare.png" /> */}
        </button>
      </div>
    </div>
  );
}

export default App;
