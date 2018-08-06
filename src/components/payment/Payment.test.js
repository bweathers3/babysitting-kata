import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Payment from './Payment';

it('renders Payment Container without crashing', () => {
  shallow(<Payment />);
});
