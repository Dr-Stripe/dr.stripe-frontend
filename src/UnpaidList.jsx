//This is List for unpaid component
// It should be default inter face
import React, { useState } from "react";

import Btn from "./Btn";

export default function UnpaidList({ setView, data, setPaidView }) {
  const [price, setPrice] = useState("");
  // const [currentView, setCurrentView] = useState(true);

  return (
    <div>
      {data.map((visit) => {
        if (!visit.paid) {
          return (
            <div className="unPaidCard">
              <h1 className="card" name="price">
                {visit.price}
              </h1>
              <div>
                <img className="card_logo" src="time.png" width="40px" />
                {visit.visit_date}
              </div>
              <div>
                <img className="card_logo" src="aid.png" width="40px" />
                {visit.treatment}
              </div>
              <div className="card_hospital">
                <img className="card_logo" src="/location.png" width="35px" />
                {visit.hospital_name}
              </div>
              <button
                className="card_checkout"
                onClick={() => {
                  //get visit price
                  setPrice(visit.price);
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
      <Btn setView={setView} />
    </div>
  );
}
