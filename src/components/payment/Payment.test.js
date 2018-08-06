import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Payment from './Payment';

it('renders Payment Container without crashing', () => {
  shallow(<Payment />);
});

it('renders Amys Before Bed Time Pay Text', () => {
  const wrapper = shallow(<Payment />);
  const beforeBedTimePayText = <p className="payment-container">Amy worked __ hours from start-time to bedtime at $12/hour for a total of $___.</p>
  expect(wrapper.contains(beforeBedTimePayText)).toEqual(true);
});

it('renders Amys After Bed Time Pay Text', () => {
  const wrapper = shallow(<Payment />);
  const afterBedTimePayText = <p className="payment-container">Amy worked __ hours from bedtime to midnight at $8/hour for a total of $___.</p>
  expect(wrapper.contains(afterBedTimePayText)).toEqual(true);
});


it('renders Amys Midnight To Finish Pay Text', () => {
  const wrapper = shallow(<Payment />);
  const midnightToFinishPayText = <p className="payment-container">Amy worked __ hours from midnight to end of the job at $16/hour for a total of $___.</p>
  expect(wrapper.contains(midnightToFinishPayText)).toEqual(true);
});

it('renders Amys Partial Hour at $12 Pay Text', () => {
  const wrapper = shallow(<Payment />);
  const partialHourAt$12PayText = <p className="payment-container">Amy worked __ part hour at $12/hour for a total of $___.</p>
  expect(wrapper.contains(partialHourAt$12PayText)).toEqual(true);
});

it('renders Amys Partial Hour at $18 Pay Text', () => {
  const wrapper = shallow(<Payment />);
  const partialHourAt$18PayText = <p className="payment-container">Amy worked __ part hour at $18/hour for a total of $___.</p>
  expect(wrapper.contains(partialHourAt$18PayText)).toEqual(true);
});

it('renders Amys Final Payment Text', () => {
  const wrapper = shallow(<Payment />);
  const finalPaymentText = <p className="final-payment-container">Amy should be paid a total of $___.</p>
  expect(wrapper.contains(finalPaymentText)).toEqual(true);
});
