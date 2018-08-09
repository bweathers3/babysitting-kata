import React, { Component } from 'react';
import Header from '../header/Header'
import Main from '../main/Main'
import Notes from '../notes/Notes'
import Payment from '../payment/Payment'
import TimeForm from '../timeForm/TimeForm'
import './App.css';

var [ finished ] = [ true ];
var [ finalPayment ] = [ 1000 ];

class App extends Component {

  constructor (props) {
    super(props);
    this.startTimeInput = null;
    this.bedTimeInput = null;
    this.finishTimeInput = null;
    this.state = {
      showFinalBillInfo: false,
      startTimeInput: "",
      bedTimeInput: "",
      finishTimeInput: "",
      hoursBeforeBedTime: 0,
      hoursAfterBedTimeUntilMidnight: 0,
      hoursAfterMidnightUntilFinishTime: 0,
      extraHourBeforeMidnight: 0,
      extraHourAfterMidnight: 0,
      billForHoursBeforeBedTime: 0,
      billForHoursAfterBedTimeUntilMidnight: 0,
      billForHoursAfterMidnightUntilFinishTime: 0,
      billForExtraHourBeforeMidnight: 0,
      billForExtraHourAfterMidnight: 0,
      totalInvoice: 0
    }

    this.setStartTimeInputRef = element => {
     this.startTimeInput = element;
    };

    this.setBedTimeInputRef = element => {
      this.bedTimeInput = element;
    };

    this.setFinishTimeInputRef = element => {
      this.finishTimeInput = element;
    };
   };

  onFormSubmit(e){
    e.preventDefault();
    console.log(e);
    console.log(this.startTimeInput.value);
    console.log(this.bedTimeInput.value);
    console.log(this.finishTimeInput.value);

    this.setState({
      hoursBeforeBedTime: 0,
      hoursAfterBedTimeUntilMidnight: 0,
      hoursAfterMidnightUntilFinishTime: 0,
      extraHourBeforeMidnight: 0,
      extraHourAfterMidnight: 0,
      billForHoursBeforeBedTime: 0,
      billForHoursAfterBedTimeUntilMidnight: 0,
      billForHoursAfterMidnightUntilFinishTime: 0,
      billForExtraHourBeforeMidnight: 0,
      billForExtraHourAfterMidnight: 0,
      totalInvoice: finalPayment,
      showFinalBillInfo: finished

    }, () => {
            this.startTimeInput.value = '';
            this.bedTimeInput.value = '';
            this.finishTimeInput.value = '';
            });
    e.target.value = '';
  };

  render() {
    console.log(this.state.totalInvoice);
    console.log(this.state.showFinalBillInfo);

    return (
      <div className="App">
        <Header />
        <TimeForm
          onFormSubmit={(e) => this.onFormSubmit(e)}
          setStartTimeInputRef={this.setStartTimeInputRef}
          setBedTimeInputRef={this.setBedTimeInputRef}
          setFinishTimeInputRef={this.setFinishTimeInputRef}
        />
        <Main />
        <Notes />
        <Payment />
      </div>
    );
  }
}

export default App;
