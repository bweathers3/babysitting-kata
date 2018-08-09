import React, { Component } from 'react';
import './TimeForm.css';
import '../main/Main.css'

class TimeForm extends Component {
  render() {
    return (
      <div className="TimeForm" >
        <form className="time" onSubmit={(e) => this.props.onFormSubmit(e)}>
          <p className="main-container-top">
            Enter the Babysitting times below.
          </p>
          <p className="main-container-top">
            <label for="start-time">Starting Time:</label>
            <input type="time" className="time" name="start-time" ref={this.props.setStartTimeInputRef} min="17:00" required />
          </p>
          <p className="main-container-top">
            <label for="bed-time">Bed Time:</label>
            <input type="time" className="time" name="bed-time" ref={this.props.setBedTimeInputRef} min="18:00" required />
          </p>
          <p className="main-container-top">
            <label for="finish-time">Finish Time:</label>
            <input type="time" className="time" name="finish-time" ref={this.props.setFinishTimeInputRef} />
          </p>
          <button type="submit" className="sub-button">Submit Times</button>
        </form>
      </div>
    );
  }
}

export default TimeForm;
