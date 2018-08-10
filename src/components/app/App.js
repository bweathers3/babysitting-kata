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
    this.startTimeInput = null;
    this.bedTimeInput = null;
    this.finishTimeInput = null;
    this.state = {
      showFinalBillInfo: false,
      startTimeInput: "",
      bedTimeInput: "",
      finishTimeInput: "",
      startTimesArray: [],
      bedTimesArray: [],
      finishTimesArray:[],
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

// Methods

  determineBedTimeAndAfterMidnightHours(bedTime, finishTime){
    //console.log(bedTime, finishTime);
    return finishTime <= 5 ?  24 - bedTime : finishTime - bedTime;
  }

  determineCostForSession(hours, chargePerHour){
    //console.log(hours, chargePerHour);
    return hours * chargePerHour;
  }

  determineRoundUpHours(firstMins, secondMins) {
    //console.log(firstMins, secondMins);
    return firstMins !== secondMins ? 1 : 0;
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
    //console.log(this.startTimeInput);
    this.bedTimesArray = this.cutTime(this.bedTimeInput.value);
    //console.log(this.bedTimeInput);
    this.finishTimesArray = this.cutTime(this.finishTimeInput.value);
    //console.log(this.finishTimeInput);
    this.hoursBeforeBedTime = this.determineHoursForEachSegment(this.startTimesArray[0], this.bedTimesArray[0]);
    console.log(this.hoursBeforeBedTime);
    this.extraHourBeforeMidnight = this.determineRoundUpHours(this.startTimesArray[1], this.bedTimesArray[1]);
    console.log(this.extraHourBeforeMidnight);
    this.extraHourBeforeMidnight == 1 ? this.hoursBeforeBedTime = this.hoursBeforeBedTime - 1 : this.hoursBeforeBedTime;
    console.log(this.hoursBeforeBedTime);
    this.hoursAfterBedTimeUntilMidnight = this.determineBedTimeAndAfterMidnightHours(this.bedTimesArray[0], this.finishTimesArray[0]);
    console.log(this.hoursAfterBedTimeUntilMidnight);
    this.finishTimesArray[0] < 5 ? this.extraHourAfterMidnight = this.determineRoundUpHours(0, this.finishTimesArray[1]) : this.extraHourAfterMidnight = 0;
    //console.log(this.extraHourAfterMidnight);
    this.finishTimesArray[0] < 5 ? this.hoursAfterMidnightUntilFinishTime = this.finishTimesArray[0] : this.hoursAfterMidnightUntilFinishTime = 0;
    console.log(this.hoursAfterMidnightUntilFinishTime);

    this.billForHoursBeforeBedTime = this.hoursBeforeBedTime  * 12;
    console.log(this.billForHoursBeforeBedTime);
    this.billForHoursAfterBedTimeUntilMidnight = this.hoursAfterBedTimeUntilMidnight  * 8;
    console.log(this.billForHoursAfterBedTimeUntilMidnight);
    this.billForHoursAfterMidnightUntilFinishTime = this.hoursAfterMidnightUntilFinishTime  * 16;
    console.log(this.billForHoursAfterMidnightUntilFinishTime);
    this.billForExtraHourBeforeMidnight = this.extraHourBeforeMidnight  * 12;
    console.log(this.billForExtraHourBeforeMidnight);
    this.billForExtraHourAfterMidnight = this.extraHourAfterMidnight  * 16;
    console.log(this.billForExtraHourAfterMidnight);

    this.totalInvoice = this.billForHoursBeforeBedTime +
      this.billForHoursAfterBedTimeUntilMidnight +
      this.billForHoursAfterMidnightUntilFinishTime +
      this.billForExtraHourBeforeMidnight +
      this.billForExtraHourAfterMidnight;
    console.log(this.totalInvoice);


    //console.log(this.determineHoursForEachSegment(5, 8));
    //console.log(this.determineRoundUpHours(30, 30));
    //console.log(this.determineRoundUpHours(15, 45));
    //console.log(this.determineRoundUpHours(45, 15));
    //console.log(this.determineRoundUpHours(30, 0));
    //console.log(this.determineCostForSession(4, 12));
    //console.log(this.determineCostForSession(6, 8));
    //console.log(this.determineCostForSession(2, 18));
    //console.log(this.determineBedTimeAndAfterMidnightHours(20, 24));
    //console.log(this.determineBedTimeAndAfterMidnightHours(20, 1));
    //console.log(this.determineBedTimeAndAfterMidnightHours(23, 24));
    //console.log(this.determineBedTimeAndAfterMidnightHours(20, 0));

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
      totalInvoice: this.totalInvoice,
      showFinalBillInfo: true

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

    console.log(this.totalInvoice);
    //console.log(this.hoursBeforeBedTime);
    //console.log(this.startTimesArray);
    //console.log(this.bedTimesArray);
    //console.log(this.finishTimesArray);
    //console.log(this.hoursAfterBedTimeUntilMidnight);
    //console.log(this.extraHourAfterMidnight);
    //console.log(this.extraHourAfterMidnight);

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
