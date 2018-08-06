import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Notes from './Notes';

it('renders without crashing', () => {
  shallow(<Notes />);
});

it('renders Amy first Payment Note Text', () => {
  const wrapper = shallow(<Notes />);
  const firstPaymentNoteText = <p className="notes-container">Amy gets paid $12/hour from start-time to bedtime.</p>
  expect(wrapper.contains(firstPaymentNoteText)).toEqual(true);
})

it('renders Amy second Payment Note Text', () => {
  const wrapper = shallow(<Notes />);
  const secondPaymentNoteText = <p className="notes-container">Amy gets paid $8/hour from bedtime to midnight.</p>
  expect(wrapper.contains(secondPaymentNoteText)).toEqual(true);
});

it('renders Amy third Payment Note Text', () => {
  const wrapper = shallow(<Notes />);
  const thirdPaymentNoteText = <p className="notes-container">Amy gets paid $16/hour from midnight to end of the job.</p>
  expect(wrapper.contains(thirdPaymentNoteText)).toEqual(true);
});

it('renders Amy final Payment Note Text', () => {
  const wrapper = shallow(<Notes />);
  const finalPaymentNoteText = <p className="notes-container">Amy gets paid for full hours (no fractional hours).</p>
  expect(wrapper.contains(finalPaymentNoteText)).toEqual(true);
});
