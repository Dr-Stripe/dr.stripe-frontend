//This is List for unpaid component
// It should be default inter face
import React, { useState } from "react";
import visits from "./visits.json";
import patiants from "./patiants.json";

export default function UnpaidList() {
  return (
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
              <div>{visit.price}</div>
              <h4>Hospital Name</h4>
              <div>{visit.hospital_name}</div>
            </>
          );
        }
      })}
    </div>
  );
}
