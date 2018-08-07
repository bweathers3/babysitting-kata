import React, { Component } from 'react';
import Header from '../header/Header'
import Main from '../main/Main'
import Notes from '../notes/Notes'
import Payment from '../payment/Payment'
import TimeForm from '../timeForm/TimeForm'
import './App.css';

class App extends Component {
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
