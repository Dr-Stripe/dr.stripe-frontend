import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const axios = require('axios');

export default function Payment({ paymentData, setPaidView }) {
  const stripePromise = loadStripe(
    "pk_test_51HU0G2CjwFEQ1pgcvOchnwo0Gsb2seN5a3xGz8Q2iCvlVUjHkSCV7UZHy3NfeobxNNMeGwmiosi3UBxjbKcSjGZ000hENfQW0F"
  );
if(paymentData) {
  console.log(paymentData)
}
  return (
    <div>
      <h1>payment</h1>
      <Elements stripe={stripePromise}>
        Card Number:
        <CardNumberElement>
          options=
          {{
            style: {
              base: {
                fontSize: "20px",
                color: "#324770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardNumberElement>
        Expiration:
        <CardExpiryElement>
          options=
          {{
            style: {
              base: {
                fontSize: "20px",
                color: "#324770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardExpiryElement>
        CVC:
        <CardCvcElement>
          options=
          {{
            style: {
              base: {
                fontSize: "20px",
                color: "#324770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardCvcElement>
        <button
          onClick={async() => {
            await axios.post('https://cc14doctorstripe-app.herokuapp.com/create-session', {
              paymentData: {paymentData}
            }).then(result=>{
              console.log(result)
            })

          const proxyurl = "https://cors-anywhere.herokuapp.com/"
           await axios.patch(proxyurl + 'https://cc14doctorstripe-app.herokuapp.com/payments/1', {
            "doctor": paymentData.doctor,
            "hospital_name": paymentData.hospital_name,
            "medicine": paymentData.medicine,
            "paid": paymentData.paid,
            "price": paymentData.price,
            "treatment": paymentData.treatment,
            "visit_date": paymentData.visit_date,
            "visit_id": paymentData.visit_id
          })
            setPaidView("");
          }}
        >
          Pay 
        </button>
      </Elements>
    </div>
  );
}
