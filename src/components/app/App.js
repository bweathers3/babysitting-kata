import React, { Component } from 'react';
import Header from '../header/Header'
import Main from '../main/Main'
import Notes from '../notes/Notes'
import Payment from '../payment/Payment'
import TimeForm from '../timeForm/TimeForm'
import './App.css';

var [ finished, finalPayment ] = [ true, 1000 ];

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
      startTimesArray: [],
      bedTimesArray: [],
      finishTimesArray: [],
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

// Methods
  determineCostForSession(hours, chargePerHour){
    //console.log(hours, chargePerHour);
    return hours * chargePerHour;
  }

  determineRoundUpHours(firstMins, secondMins) {
    //console.log(firstMins, secondMins);
    return secondMins > firstMins ? 1 : 0;
  }

  determineHoursForEachSegment(firstHour, secondHour) {
    //console.log(firstHour, secondHour);
    return secondHour - firstHour;
  }

  cutTime(str) {
    //console.log(str);
    return [ Number(str.slice(0, 2)), Number(str.slice(3, 5)) ]
  }





//*******


  onFormSubmit(e){
    e.preventDefault();

    this.startTimesArray = this.cutTime(this.startTimeInput.value);
    //console.log(this.startTimesArray);
    this.bedTimesArray = this.cutTime(this.bedTimeInput.value);
    //console.log(this.bedTimesArray);
    this.finishTimesArray = this.cutTime(this.finishTimeInput.value);
    //console.log(this.finishTimesArray);
    //console.log(this.determineHoursForEachSegment(5, 8));
    //console.log(this.determineRoundUpHours(30, 30));
    //console.log(this.determineRoundUpHours(15, 45));
    //console.log(this.determineRoundUpHours(45, 15));
    console.log(this.determineCostForSession(4, 12));
    console.log(this.determineCostForSession(6, 8));
    console.log(this.determineCostForSession(2, 18));

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
    //console.log(this.startTimesArray);
    //console.log(this.bedTimesArray);
    //console.log(this.finishTimesArray);

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
