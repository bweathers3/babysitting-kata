import React, { Component } from 'react';
import './TimeForm.css';
import '../main/Main.css'

class TimeForm extends Component {
  render() {
    return (
      <div className="TimeForm">
        <form className="time">
          <p className="main-container-top">
            Enter the Babysitting times below.
          </p>
          <p className="main-container-top">
            <label for="start-time">Starting Time:</label>
            <input type="time" className="time" name="start-time" min="17:00" required />
          </p>
          <p className="main-container-top">
            <label for="bed-time">Bed Time:</label>
            <input type="time" className="time" name="bed-time" min="18:00" required />
          </p>
          <p className="main-container-top">
            <label for="finish-time">Finish Time:</label>
            <input type="time" className="time" name="finish-time" max="04:00" required />
          </p>
        </form>
      </div>
    );
  }
}

export default TimeForm;
