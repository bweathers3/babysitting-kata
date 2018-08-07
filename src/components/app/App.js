import React, { Component } from 'react';
import Header from '../header/Header'
import Main from '../main/Main'
import Notes from '../notes/Notes'
import Payment from '../payment/Payment'
import TimeForm from '../timeForm/TimeForm'
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      showFinalBillInfo: false,
      startTimeInput: "",
      bedTimeInput: "",
      finishTimeInput: ""
    }
   };

  render() {
    return (
      <div className="App">
        <Header />
        <TimeForm />
        <Main />
        <Notes />
        <Payment />
      </div>
    );
  }
}

export default App;
