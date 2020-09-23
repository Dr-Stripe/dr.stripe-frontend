//This is List for unpaid component
// It should be default inter face
import React, { useState } from "react";
import visits from "./visits.json";
import patiants from "./patiants.json";
import Payment from "./Payment";
import Btn from "./Btn";

export default function UnpaidList({ setView }) {
  const [price, setPrice] = useState("");
  const [currentView, setCurrentView] = useState(true);

  return (
    <div>
      {currentView ? (
        <div>
          {visits.map((visit) => {
            if (!visit.paid) {
              return (
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
                      setPrice(visit.price);
                      setCurrentView(false);
                    }}
                  />
                </>
              );
            }
          })}
          <Btn setView={setView} />
        </div>
      ) : (
        <Payment price={price} />
      )}
    </div>
  );
}
