import React, { useState } from "react";
import "./App.css";

// Components
import Thankyou from "./Thankyou";
import Payment from "./Payment";
import Docter from "./Docter";
import Patient from "./Patient";

function App() {
  const [viewDocter, setViewDocter] = useState("Docter");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Dr.stripe</h1>
        <p>
          Are you
          <button
            onClick={() => {
              setViewDocter(true);
            }}
          >
            Doctor
          </button>
          <button>Patient</button>
        </p>
      </header>
      {viewDocter === "docter" ? <Docter /> : <Patient />}
    </div>
  );
}

export default App;
