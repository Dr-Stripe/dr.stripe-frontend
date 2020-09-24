import React, { useState } from "react";
import "./App.css";
import Thankyou from "./Thankyou";

// Components

//stripe promise publishable API key

function App({ setIsDoctor }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/healthcare.png" className="header_img" />
        <h1 className="welcome">Welcome to Dr.stripe</h1>
      </header>
      <div className="btn_container">
        <button
          className="btnDoctor"
          onClick={() => {
            setIsDoctor("Doctor");
          }}
        >
          <img src="/care.png" className="btnlogo" />
          <p>Doctor</p>
        </button>
        <button
          className="btnPatient"
          onClick={() => {
            setIsDoctor("Patient");
          }}
        >
          <img src="/doctor.png" className="btnlogo" />
          <p>Patient</p>
          {/* <img src="./healthcare.png" /> */}
        </button>
      </div>
    </div>
  );
}

export default App;
