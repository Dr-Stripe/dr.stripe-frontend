// This is Paid components
import React, { useEffect, useState } from "react";
import Data from "./visits.json";
import Btn from "./Btn";
import "./App.css";

export default function PaindList({ setView, data }) {
  return (
    <div>
      {data.map((ele) => {
        if (ele.paid) {
          return (
            <>
              <div className="unPaidCard">
                <img src="/check.png" width="50px" className="checkImg" />
                <h1 className="card">{ele.price}</h1>
                <p>{ele.treatment}</p>
                <p>{ele.visit_date}</p>
                <p>{ele.hospital_name}</p>
              </div>
            </>
          );
        }
      })}
      <Btn setView={setView} />
    </div>
  );
}
