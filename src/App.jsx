import React, { useState } from "react";
import "./App.css";

// Components
import Thankyou from "./Thankyou";
import Payment from "./Payment";
import Doctor from "./Doctor";
import Patient from "./Patient";

function App() {
  const [viewDoctor, setViewDoctor] = useState("Doctor");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Dr.stripe</h1>
        <p>
          Are you
          <button
            onClick={() => {
              setViewDoctor(true);
              console.log('yes')
            }}
          >
            Doctor
          </button>
          <button>Patient</button>
        </p>
      </header>
      {viewDoctor === "Doctor" ? <Doctor /> : <Patient />}
    </div>
  );
}

export default App;
