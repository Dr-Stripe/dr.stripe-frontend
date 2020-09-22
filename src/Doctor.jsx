import React from "react";

export default function Doctor() {

function changeHandler(e) {
  
}

  return <div>
    Doctor
    <form onSubmit={(e)=>{
      //insert into database method and fix symptom
      e.preventDefault()
     console.log({
       visit_date: e.target.visit.value,
       treatment: e.target.treatment.value,
       symptom: "insert symptom value",
       doctor: e.target.doctor.value,
       paid: e.target.paid.value,
       price: e.target.price.value,
       hospital_name: e.target.hospital.value
     })

    }} id="doctor-visit-report"> 
    <label>Visit Date <input name="visit" type="text" placeholder="Visit Date"/></label> <br/>
    <label>Treatment <textarea name="treatment" placeholder="Treatment"/></label> <br/>
    <label>Doctor <input name="doctor" type="text" placeholder="Doctor"/></label> <br/>
    <label>Paid <input name="paid" type="text" placeholder="Paid"/></label> <br/>
    <label>Price <input name="price" type="text" placeholder="Price"/></label> <br/>
    <label>Hospital Name <input name="hospital" type="text" placeholder="Hospital Name"/></label> <br/>
    <label><input type='submit' value='Submit' /></label>
    </form>
  </div>;
}