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
          <p>Doctor</p>
          <img src="/care.png" className="btnlogo" />
        </button>
        <button
          className="btnPatient"
          onClick={() => {
            setIsDoctor("Patient");
          }}
        >
          <p>Patient</p>
          <img src="/doctor.png" className="btnlogo" />
          {/* <img src="./healthcare.png" /> */}
        </button>
      </div>
    </div>
  );
}

export default App;
