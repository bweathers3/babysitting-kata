import React, { Component } from 'react';
import './Notes.css';

class Notes extends Component {
  render() {
    return (
      <div className="Notes">
        <p className="notes-container">
          Amy gets paid $12/hour from start-time to bedtime.
        </p>
        <p className="notes-container">
          Amy gets paid $8/hour from bedtime to midnight.
        </p>
        <p className="notes-container">
          Amy gets paid $16/hour from midnight to end of the job.
        </p>
        <p className="notes-container">
          Amy gets paid for full hours (no fractional hours).
        </p>
      </div>
    );
  }
}

export default Notes;
