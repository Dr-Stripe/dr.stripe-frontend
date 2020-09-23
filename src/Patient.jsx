import React, { useState } from "react";
import PaidList from "./PaidList";
import UnpaidView from "./UnpaidView";

export default function Patient({ data }) {
  const [paidView, setPaidView] = useState("paid");
  const [view, setView] = useState(true);
  return (
    <div>
      {view ? (
        <UnpaidView
          setView={setView}
          data={data}
          setPaidView={setPaidView}
          paidView={paidView}
        />
      ) : (
        <PaidList setView={setView} data={data} />
      )}
    </div>
  );
}
