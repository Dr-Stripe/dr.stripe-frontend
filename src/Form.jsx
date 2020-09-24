import React from "react";
import "./Form.css";
const axios = require("axios");

export default function Form({ setDocview }) {
  return (
    <div className="formContainer">
      <form
        onSubmit={async (e) => {
          //insert into database method and fix symptom
          e.preventDefault();
          await axios.post(
            "https://cc14doctorstripe-app.herokuapp.com/visits/1",
            {
              patient_id: e.target.patient_id.value,
              treatment: e.target.treatment.value,
              symptoms: e.target.symptoms.value,
              doctor: e.target.doctor.value,
              paid: false,
              madecine: false,
              price: e.target.price.value,
              hospital_name: e.target.hospital.value,
            }
          );
          setDocview(false);
        }}
        id="doctor-visit-report"
      >
        <label>
          Id
          <input name="patient_id" />
        </label>
        {/* <label>
          Visit Date
          <input name="visit" type="text" placeholder="Visit Date" />
        </label> */}
        <br />
        <label>
          symptoms
          <input name="symptoms"></input>
        </label>
        <label>
          Treatment
          <textarea name="treatment" placeholder="Treatment" />
        </label>
        <br />
        <label>
          Name of Doctor
          <input name="doctor" type="text" placeholder="Doctor" />
        </label>
        <label>
          Hospital Name
          <input name="hospital" type="text" placeholder="Hospital Name" />
        </label>
        <label>
          Price
          <input name="price" type="text" placeholder="Price" />
        </label>
        <br />
        {/* better to chose by locatin  */}
        <br />
        <label>
          <button
            type="submit"
            value="Submit"
            className="formSubmitButton formSubmitButtonDesign"
          >
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}
