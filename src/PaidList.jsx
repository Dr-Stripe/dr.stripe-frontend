// This is Paid components
import React, { useEffect, useState } from "react";
import Data from "./visits.json";
import Btn from "./Btn";
import "./App.css";

export default function PaindList({ setView, data }) {
  return (
    <div>
      <Btn setView={setView} />
      {data.map((ele) => {
        if (ele.paid) {
          return (
            <>
              <div className="PaidCard">
                <img src="/checkB.png" width="50px" className="checkImg" />
                <h1 className="card">
                  <img src="/yen.png" width="20px" />
                  {ele.price}
                </h1>
                <p>
                  {/* <img src="t /> */}
                  {ele.visit_date}
                </p>
                <p>{ele.treatment}</p>
                <p>{ele.hospital_name}</p>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
