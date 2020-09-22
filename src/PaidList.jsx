// This is Paid components
import React from "react";
import Data from "./visits.json";
import "./App.css";

export default function PaindList() {
  return (
    <div>
      {Data.map((ele) => {
        if (ele.paid) {
          return (
            <>
              <div className="paiedList">
                <h3>Date</h3>
                <p>{ele.visit_date}</p>
                <h3>Treatment</h3>
                <p>{ele.treatment}</p>
                <h3>Price</h3>
                <p>{ele.price}</p>
                <h3>Hospital Name</h3>
                <p>{ele.hospital_name}</p>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
