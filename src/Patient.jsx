import React, { useState } from "react";
import PaidList from "./PaidList";
import Btn from "./Btn";
import Unpaid from "./UnpaidList";

export default function Patient() {
  const [view, setView] = useState(true);
  return (
    <div>
      {view ? <Unpaid setView={setView} /> : <PaidList setView={setView} />}
    </div>
  );
}
