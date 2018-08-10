import React, { Component } from 'react';
import './Payment.css';

class Payment extends Component {
  render() {
    return (
      <div className="Payment">
        <p className="payment-container">
          Amy worked {this.props.hoursBeforeBedTime} hours from start-time to bedtime at $12/hour for a total of ${this.props.billForHoursBeforeBedTime}.
        </p>
        <p className="payment-container">
          Amy worked {this.props.hoursAfterBedTimeUntilMidnight} hours from bedtime to midnight at $8/hour for a total of ${this.props.billForHoursAfterBedTimeUntilMidnight}.
        </p>
        <p className="payment-container">
          Amy worked {this.props.hoursAfterMidnightUntilFinishTime} hours from midnight to end of the job at $16/hour for a total of ${this.props.billForHoursAfterMidnightUntilFinishTime}.
        </p>
        <p className="payment-container">
          Amy worked {this.props.extraHourBeforeMidnight} part hour at $12/hour for a total of ${this.props.billForExtraHourBeforeMidnight}.
        </p>
        <p className="payment-container">
          Amy worked {this.props.extraHourAfterMidnight} part hour at $18/hour for a total of ${this.props.billForExtraHourAfterMidnight}.
        </p>
        <p className="final-payment-container">
          Amy should be paid a total of ${this.props.totalInvoice}.
        </p>
      </div>
    );
  }
}

export default Payment;
