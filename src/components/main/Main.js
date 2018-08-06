import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <p className="main-container-top">
          Amy can not start before 5:00 PM.
        </p>
        <p className="main-container-bottom">
          Amy can not leave after 4:00 AM.
        </p>
      </div>
    );
  }
}

export default Main;
