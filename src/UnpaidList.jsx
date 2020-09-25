//This is List for unpaid component
// It should be default inter face
import React, { useState } from "react";

import Btn from "./Btn";

export default function UnpaidList({
  setView,
  data,
  setPaidView,
  paymentData,
  setPaymentData,
}) {
  // const [currentView, setCurrentView] = useState(true);

  return (
    <div>
      <div>
        <Btn setView={setView} />
        {data.map((visit, index) => {
          if (!visit.paid) {
            return (
              <div key={index} className="unPaidCard">
                <h1 className="card" name="price">
                  <img src="/yen.png" width="20px" />
                  {visit.price}
                </h1>
                <div>
                  <img className="card_logo" src="time.png" width="40px" />
                  {visit.visit_date.slice(0, 10)}
                </div>
                <div className="card_treatment_container">
                  <img className="card_logo" src="aid.png" width="40px" />
                  {visit.treatment}
                </div>
                <div className="card_hospital">
                  <img className="card_logo" src="/location.png" width="35px" />
                  <a href="https://goo.gl/maps/CtmBm7XPWkzNEPAJ8">
                    {visit.hospital_name}
                  </a>
                </div>
                <button
                  className="card_checkout"
                  onClick={() => {
                    //get visit data
                    console.log(data[index]);
                    //set visit data to pass to DB upon payment
                    setPaymentData(data[index]);
                    // setCurrentView(false);
                    setPaidView("pay");
                  }}
                >
                  Checkout
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
