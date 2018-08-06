import React, { Component } from 'react';
import './Payment.css';

class Payment extends Component {
  render() {
    return (
      <div className="Payment">
        <p className="payment-container">
          Amy worked __ hours from start-time to bedtime at $12/hour for a total of $___.
        </p>

      </div>
    );
  }
}

export default Payment;
