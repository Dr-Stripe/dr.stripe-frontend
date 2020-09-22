import React, { useState } from "react";
import PaidList from "./PaidList";
import Btn from "./Btn";
import Unpaind from "./UnpaidList";

export default function Patient() {
  const [view, setView] = useState(true);
  return (
    <div>
      <h2>Hello</h2>
      {view ? <Unpaind /> : <PaidList />}
      <Btn setView={setView} />
    </div>
  );
}
