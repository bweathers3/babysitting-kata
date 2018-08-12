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

   validateAfterMidnight(holdArray) {
     var totalMins = (holdArray[0]*60) + holdArray[1];
     return totalMins > 240 && totalMins < 1020 ?  false : true;
   }

  determineBedTimeAndAfterMidnightHours(bedTime, finishTime){
    return finishTime <= 5 ?  24 - bedTime : finishTime - bedTime;
  }

  determineCostForSession(hours, chargePerHour){
    return hours * chargePerHour;
  }

  determineRoundUpHours(firstMins, secondMins) {
    return firstMins !== secondMins ? 1 : 0;
  }

  determineHoursForEachSegment(firstHour, secondHour) {
    return secondHour - firstHour;
  }

  cutTime(str) {
    return [ Number(str.slice(0, 2)), Number(str.slice(3, 5)) ]
  }

  onFormSubmit(e){
    e.preventDefault();

    this.startTimesArray = this.cutTime(this.startTimeInput.value);
    this.bedTimesArray = this.cutTime(this.bedTimeInput.value);
    this.finishTimesArray = this.cutTime(this.finishTimeInput.value);
    this.showFinalBillInfo = this.validateAfterMidnight(this.startTimesArray);
    this.showFinalBillInfo = this.validateAfterMidnight(this.bedTimesArray);
    this.showFinalBillInfo = this.validateAfterMidnight(this.finishTimesArray);

    this.hoursBeforeBedTime = this.determineHoursForEachSegment(this.startTimesArray[0], this.bedTimesArray[0]);
    this.extraHourBeforeMidnight = this.determineRoundUpHours(this.startTimesArray[1], this.bedTimesArray[1]);
    this.extraHourBeforeMidnight === 1 ? this.hoursBeforeBedTime = this.hoursBeforeBedTime - 1 : this.hoursBeforeBedTime;
    this.hoursAfterBedTimeUntilMidnight = this.determineBedTimeAndAfterMidnightHours(this.bedTimesArray[0], this.finishTimesArray[0]);
    this.finishTimesArray[0] < 5 ? this.extraHourAfterMidnight = this.determineRoundUpHours(0, this.finishTimesArray[1]) : this.extraHourAfterMidnight = 0;
    this.finishTimesArray[0] < 5 ? this.hoursAfterMidnightUntilFinishTime = this.finishTimesArray[0] : this.hoursAfterMidnightUntilFinishTime = 0;

    this.billForHoursBeforeBedTime = this.hoursBeforeBedTime  * 12;
    this.billForHoursAfterBedTimeUntilMidnight = this.hoursAfterBedTimeUntilMidnight  * 8;
    this.billForHoursAfterMidnightUntilFinishTime = this.hoursAfterMidnightUntilFinishTime  * 16;
    this.billForExtraHourBeforeMidnight = this.extraHourBeforeMidnight  * 12;
    this.billForExtraHourAfterMidnight = this.extraHourAfterMidnight  * 16;

    this.totalInvoice = this.billForHoursBeforeBedTime +
      this.billForHoursAfterBedTimeUntilMidnight +
      this.billForHoursAfterMidnightUntilFinishTime +
      this.billForExtraHourBeforeMidnight +
      this.billForExtraHourAfterMidnight;



    this.setState({
      hoursBeforeBedTime: this.hoursBeforeBedTime,
      hoursAfterBedTimeUntilMidnight: this.hoursAfterBedTimeUntilMidnight,
      hoursAfterMidnightUntilFinishTime: this.hoursAfterMidnightUntilFinishTime,
      extraHourBeforeMidnight: this.extraHourBeforeMidnight,
      extraHourAfterMidnight: this.extraHourAfterMidnight,
      billForHoursBeforeBedTime: this.billForHoursBeforeBedTime,
      billForHoursAfterBedTimeUntilMidnight: this.billForHoursAfterBedTimeUntilMidnight,
      billForHoursAfterMidnightUntilFinishTime: this.billForHoursAfterMidnightUntilFinishTime,
      billForExtraHourBeforeMidnight: this.billForExtraHourBeforeMidnight,
      billForExtraHourAfterMidnight: this.billForExtraHourAfterMidnight,
      totalInvoice: this.totalInvoice,
      showFinalBillInfo: this.showFinalBillInfo

    }, () => {
            this.startTimeInput.value = '';
            this.bedTimeInput.value = '';
            this.finishTimeInput.value = '';
            });
    e.target.value = '';
  };

  render() {
    return (
      <div className="App">
        <Header />
        <TimeForm
          onFormSubmit={(e) => this.onFormSubmit(e)}
          setStartTimeInputRef={this.setStartTimeInputRef}
          setBedTimeInputRef={this.setBedTimeInputRef}
          setFinishTimeInputRef={this.setFinishTimeInputRef}
        />
        <Payment hoursBeforeBedTime={this.state.hoursBeforeBedTime}
          hoursAfterBedTimeUntilMidnight={this.state.hoursAfterBedTimeUntilMidnight}
          hoursAfterMidnightUntilFinishTime={this.state.hoursAfterMidnightUntilFinishTime}
          extraHourBeforeMidnight={this.state.extraHourBeforeMidnight}
          extraHourAfterMidnight={this.state.extraHourAfterMidnight}
          billForHoursBeforeBedTime={this.state.billForHoursBeforeBedTime}
          billForHoursAfterBedTimeUntilMidnight={this.state.billForHoursAfterBedTimeUntilMidnight}
          billForHoursAfterMidnightUntilFinishTime={this.state.billForHoursAfterMidnightUntilFinishTime}
          billForExtraHourBeforeMidnight={this.state.billForExtraHourBeforeMidnight}
          billForExtraHourAfterMidnight={this.state.billForExtraHourAfterMidnight}
          totalInvoice={this.state.totalInvoice}
          />
        <Main />
        <Notes />
      </div>
    );
  }
}

export default App;
