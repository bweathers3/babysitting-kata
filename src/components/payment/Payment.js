import React, { Component } from 'react';
import './Payment.css';

class Payment extends Component {
  render() {
    return (
      <div className="Payment">
        <p className="payment-container">
          Amy worked __ hours from start-time to bedtime at $12/hour for a total of $___.
        </p>
        <p className="payment-container">
          Amy worked __ hours from bedtime to midnight at $8/hour for a total of $___.
        </p>
        <p className="payment-container">
          Amy worked __ hours from midnight to end of the job at $16/hour for a total of $___.
        </p>
        <p className="payment-container">
          Amy worked __ part hour at $12/hour for a total of $___.
        </p>
        <p className="payment-container">
          Amy worked __ part hour at $18/hour for a total of $___.
        </p>
        <p className="final-payment-container">
          Amy should be paid a total of $___.
        </p>
      </div>
    );
  }
}

export default Payment;
