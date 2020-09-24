import React, { useState } from "react";
import PaidList from "./PaidList";
import UnpaidView from "./UnpaidView";

export default function Patient({ data }) {
  const [paidView, setPaidView] = useState("paid");
  const [view, setView] = useState(true);
  const [paymentData, setPaymentData] = useState();

  return (
    <div class="patient_container">
      <div className="home_container">
        <img src="/homeG.png" width="20px" className="logo_home" />
        <img src="/userG.png" width="20px" className="logo_home" />
      </div>
      <img src="/healthcare.png" className="patient_topLogo" />
      <h1 className="patinet_h1">Hello , Jiro.</h1>
      <p className="welcome_greeting">welcome back to Dr.Stripe</p>
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
