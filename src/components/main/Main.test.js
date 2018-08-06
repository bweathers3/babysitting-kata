import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Main from './Main';

const wrapper = shallow(<Main />);

it('renders without crashing', () => {
  shallow(<Main />);
});

it('renders Amys first babysitting rule Text', () => {
  const firstRuleText = <p className="main-container-top">Amy can not start before 5:00 PM.</p>
  expect(wrapper.contains(firstRuleText)).toEqual(true);
});

it('renders Amys second babysitting rule Text', () => {
  const secondRuleText = <p className="main-container-bottom">Amy can not leave after 4:00 AM.</p>
  expect(wrapper.contains(secondRuleText)).toEqual(true);
});
