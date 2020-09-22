import React from "react";
import PaidList from "./PaidList";
import Btn from "./Btn";
import Unpaid from "./UnpaidList";

const data = [
  {
    first_name: "Jiro",
    last_name: "Yamada",
    patient_id: "1",
    paind: true,
    price: 2000,
    data: 20200101,
  },
  {
    first_name: "Jiro",
    last_name: "Yamada",
    patient_id: "1",
    paind: true,
    price: 2000,
    data: 20200101,
  },
];

export default function Patient() {
  return (
    <div>
      <h2>Hello{data[0].first_name}</h2>
      <PaidList />
      <Unpaid />
      <Btn />
    </div>
  );
}
