import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Notes from './Notes';

const wrapper = shallow(<Notes />);

it('renders without crashing', () => {
  shallow(<Notes />);
});

it('renders Amy first Payment Note Text', () => {
  const firstPaymentNoteText = <li>Amy gets paid $12/hour from start-time to bedtime.</li>
  expect(wrapper.contains(firstPaymentNoteText)).toEqual(true);
})

it('renders Amy second Payment Note Text', () => {
  const secondPaymentNoteText = <li>Amy gets paid $8/hour from bedtime to midnight.</li>
  expect(wrapper.contains(secondPaymentNoteText)).toEqual(true);
});

it('renders Amy third Payment Note Text', () => {
  const thirdPaymentNoteText = <li>Amy gets paid $16/hour from midnight to end of the job.</li>
  expect(wrapper.contains(thirdPaymentNoteText)).toEqual(true);
});

it('renders Amy final Payment Note Text', () => {
  const finalPaymentNoteText = <li>Amy gets paid for full hours (no fractional hours).</li>
  expect(wrapper.contains(finalPaymentNoteText)).toEqual(true);
});
