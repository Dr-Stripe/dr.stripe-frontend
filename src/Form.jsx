import React from "react";
const axios = require("axios");

export default function Form({ setDocview }) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          //insert into database method and fix symptom
          e.preventDefault();
          // await axios.post(
          //   "./visit",
          //   JSON.stringify({

          //     treatment: e.target.treatment.value,
          //     symptoms: "insert symptom value",
          //     doctor: e.target.doctor.value,
          //     paid: false,
          //     price: e.target.price.value,
          //     hospital_name: e.target.hospital.value,
          //   })
          // );
          console.log({
            visit_date: e.target.visit.value,
            treatment: e.target.treatment.value,
            symptoms: "insert symptom value",
            doctor: e.target.doctor.value,
            paid: e.target.paid.value,
            // price: e.target.price.value,
            hospital_name: e.target.hospital.value,
          });
        }}
        id="doctor-visit-report"
      >
        <label>
          Visit Date <input name="visit" type="text" placeholder="Visit Date" />
        </label>{" "}
        <br />
        <label>
          Treatment <textarea name="treatment" placeholder="Treatment" />
        </label>{" "}
        <br />
        <label>
          Name of Doctor{" "}
          <input name="doctor" type="text" placeholder="Doctor" />
        </label>{" "}
        <br />
        <br />
        <label>
          Price <input name="price" type="text" placeholder="Price" />
        </label>{" "}
        <br />
        {/* better to chose by locatin  */}
        <label>
          Hospital Name{" "}
          <input name="hospital" type="text" placeholder="Hospital Name" />
        </label>{" "}
        <br />
        <label>
          <button
            onClick={() => {
              setDocview(false);
            }}
            type="submit"
            value="Submit"
          />
        </label>
      </form>
    </div>
  );
}
