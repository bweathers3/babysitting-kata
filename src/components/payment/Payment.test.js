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
