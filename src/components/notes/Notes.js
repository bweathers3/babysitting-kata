import React, { Component } from 'react';
import './Notes.css';

class Notes extends Component {
  render() {
    return (
      <div className="Notes">
      <ul className="notes-container">
          <li>Amy gets paid $12/hour from start-time to bedtime.</li>
          <li>Amy gets paid $8/hour from bedtime to midnight.</li>
          <li>Amy gets paid $16/hour from midnight to end of the job.</li>
          <li>Amy gets paid for full hours (no fractional hours).</li>
        </ul>
      </div>
    );
  }
}

export default Notes;
