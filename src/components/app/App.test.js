import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../header/Header'
import Main from '../main/Main'
import Notes from '../notes/Notes'
import Payment from '../payment/Payment'
import TimeForm from '../timeForm/TimeForm'

const wrapper = shallow(<App />);

describe("Static Component - No state", () => {
  it('renders App without crashing - create-react-app test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders App without crashing - Enzyme smoke test', () => {
    shallow(<App />);
  });

  it('renders Header component without crashing', () => {
    Header.displayName = 'Header';
    const header = wrapper.find('Header');
  });

  it('renders Main component without crashing', () => {
    Main.displayName = 'Main';
    const main = wrapper.find('Main');
  });

  it('renders Notes component without crashing', () => {
    Notes.displayName = 'Notes';
    const notes = wrapper.find('Notes');
  });

  it('renders Payment component without crashing', () => {
    Payment.displayName = 'Payment';
    const payment = wrapper.find('Payment');
  });

  it('renders TimeForm component without crashing', () => {
    TimeForm.displayName = 'TimeForm';
    const timeForm = wrapper.find('TimeForm');
  });
});

describe("Static Component - with state", () => {
  it("should have state set for the Final Bill Info", () => {
     expect(wrapper.state().showFinalBillInfo).toEqual(false);
  });

  it("should have state set for the Start Time", () => {
     expect(wrapper.state().startTimeInput).toEqual("");
  });

  it("should have state set for the Bed Time", () => {
     expect(wrapper.state().bedTimeInput).toEqual("");
  });

  it("should have state set for the Finish Time", () => {
     expect(wrapper.state().finishTimeInput).toEqual("");
  });

  it("should have state set for the hours before bed time", () => {
     expect(wrapper.state().hoursBeforeBedTime).toEqual(0);
  });

  it("should have state set for the hours after bed time and before midnight", () => {
     expect(wrapper.state().hoursAfterBedTimeUntilMidnight).toEqual(0);
  });

  it("should have state set for the hours after midnight until finish", () => {
     expect(wrapper.state().hoursAfterMidnightUntilFinishTime).toEqual(0);
  });

  it("should have state set for an extra hour before midnight", () => {
     expect(wrapper.state().extraHourBeforeMidnight).toEqual(0);
  });

  it("should have state set for an extra hour after midnight", () => {
     expect(wrapper.state().extraHourAfterMidnight).toEqual(0);
  });
});

describe("Static Component Vars for Billing - with state", () => {
  it("should have state set for the Billing before Bed Time", () => {
     expect(wrapper.state().billForHoursBeforeBedTime).toEqual(0);
  });

  it("should have state set for the Billing for hours after bed time until midnight", () => {
     expect(wrapper.state().billForHoursAfterBedTimeUntilMidnight).toEqual(0);
  });

  it("should have state set for the Billing for hours from midnight to finish", () => {
     expect(wrapper.state().billForHoursAfterMidnightUntilFinishTime).toEqual(0);
  });

  it("should have state set for the Billing for extra hour before midnight", () => {
     expect(wrapper.state().billForExtraHourBeforeMidnight).toEqual(0);
  });

  it("should have state set for the Billing for extra hour after midnight", () => {
     expect(wrapper.state().billForExtraHourAfterMidnight).toEqual(0);
  });

  it("should have state set for the Final Invoice", () => {
     expect(wrapper.state().totalInvoice).toEqual(0);
  });
});

describe("Test State after TimeForm Input", () => {
  {/* This is about the extent of my knowledge of TDD for Javascript and React/Redux */}
});
