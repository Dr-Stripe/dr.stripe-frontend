import React, { useState } from "react";
import "./App.css";

// Components
import Thankyou from "./Thankyou";
import Payment from "./Payment";
import Docter from "./Docter";
import Patient from "./Patient";

function App({ setIsDoctor }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Dr.stripe</h1>
        <p>
          Are you
          <button
            onClick={() => {
              setIsDoctor("Doctor");
            }}
          >
            Doctor
          </button>
          <button
            onClick={() => {
              setIsDoctor("Patient");
            }}
          >
            Patient
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
