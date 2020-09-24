//This is List for unpaid component
// It should be default inter face
import React, { useState } from "react";

import Btn from "./Btn";

export default function UnpaidList({ setView, data, setPaidView, paymentData, setPaymentData}) {
  // const [currentView, setCurrentView] = useState(true);

  return (
    <div>
      <div>
      {data.map((visit, index) => (
        <div id="each-visit" key={index}>
        if (!visit.paid) {
          (
            <>
              <h4>Date</h4>
              <div>{visit.visit_date}</div>
              <h4>Treatment</h4>
              <div>{visit.treatment}</div>
              <h4>Price</h4>
              <div name="price" value={visit.price}>
                {visit.price}
              </div>
              <h4>Hospital Name</h4>
              <div>{visit.hospital_name}</div>
              <input
                type="button"
                value="Checkout"
                onClick={() => {
                  //get visit price
                  console.log(data[index])
                  setPaymentData(data[index]);
                  // setCurrentView(false);
                  setPaidView("pay");
                }}
              />
            </>
          )
        }
      </div>))}
      <Btn setView={setView} />
      </div>
    </div>
  );
}
