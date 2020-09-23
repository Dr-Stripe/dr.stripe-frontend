import React, { useState, useEffect } from "react";
import Btn from "./Btn";
import UnpaidList from "./UnpaidList";
import Payment from "./Payment";
import Thankyou from "./Thankyou";

export default function UnpaidView({ setView, setPaidView, paidView, data }) {
  if (paidView === "paid") {
    return (
      <UnpaidList setView={setView} setPaidView={setPaidView} data={data} />
    );
  } else if (paidView === "pay") {
    return <Payment setPaidView={setPaidView} />;
  } else {
    return <Thankyou />;
  }
}
