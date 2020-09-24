import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const axios = require("axios");

export default function Payment({ paymentData, setPaidView }) {
  const stripePromise = loadStripe(
    "pk_test_51HU0G2CjwFEQ1pgcvOchnwo0Gsb2seN5a3xGz8Q2iCvlVUjHkSCV7UZHy3NfeobxNNMeGwmiosi3UBxjbKcSjGZ000hENfQW0F"
  );
  if (paymentData) {
    console.log(paymentData);
  }
  return (
    <div className="container_payment">
      <h1>Payment Infomation</h1>
      <Elements stripe={stripePromise}>
        Card Number
        <CardNumberElement>
          options=
          {{
            style: {
              base: {
                fontSize: "30px",
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
        Expiration
        <CardExpiryElement>
          options=
          {{
            style: {
              base: {
                fontSize: "30px",
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
        CVC
        <CardCvcElement>
          options=
          {{
            style: {
              base: {
                fontSize: "30px",
                color: "#324770",
                "::placeholder": {
                  color: "black",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardCvcElement>
        <button
          className="payment_btn"
          onClick={async () => {
            console.log("PRICE" + paymentData);
            await axios
              .post(
                "https://cc14doctorstripe-app.herokuapp.com/create-session",
                {
                  paymentData: { paymentData },
                }
              )
              .then((result) => {
                console.log(result);
              });
            setPaidView("");
          }}
        >
          <img src="/checkW.png" className="payment_pay_btn" />
          <p className="pay_p">Pay</p>
        </button>
      </Elements>
    </div>
  );
}
