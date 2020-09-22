import React from "react";
import "./App.css";
import Btn from "./Btn";
import Thankyou from "./Thankyou";
import PaidList from "./PaidList";
import Unpaind from "./UnpaidList";
import Payment from "./Payment";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Unpaind />
      <PaidList />
      <Payment />
      <Btn />
      <Thankyou />
    </div>
  );
}

export default App;
