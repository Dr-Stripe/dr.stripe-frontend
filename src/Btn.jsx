import React from "react";

export default function Btn({ setView }) {
  return (
    <div>
      <button
        onClick={() => {
          setView(false);
        }}
      >
        Paid
      </button>
      <button
        onClick={() => {
          setView(true);
        }}
      >
        Unpaid
      </button>
    </div>
  );
}
