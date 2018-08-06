import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Main from './Main';

it('renders without crashing', () => {
  shallow(<Main />);
});

it('renders Amys first babysitting rule Text', () => {
  const wrapper = shallow(<Main />);
  const firstRuleText = <p className="main-container-top">Amy can not start before 5:00 PM.</p>
  expect(wrapper.contains(firstRuleText)).toEqual(true);
});
