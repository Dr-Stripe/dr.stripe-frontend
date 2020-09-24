import React, { useState } from "react";
import PaidList from "./PaidList";
import UnpaidView from "./UnpaidView";

export default function Patient({ data }) {
  const [paidView, setPaidView] = useState("paid");
  const [view, setView] = useState(true);
  const [paymentData, setPaymentData] = useState();

  return (
    <div>
      {view ? (
        <UnpaidView
        paymentData={paymentData}
        setPaymentData={setPaymentData}
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
