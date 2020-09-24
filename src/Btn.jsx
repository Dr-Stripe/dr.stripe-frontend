import React from "react";

export default function Btn({ setView }) {
  return (
    <div>
      <button
        className="component_btn"
        onClick={() => {
          setView(false);
        }}
      >
        Paid
      </button>
      <button
        className="component_btn"
        onClick={() => {
          setView(true);
        }}
      >
        Unpaid
      </button>
    </div>
  );
}
