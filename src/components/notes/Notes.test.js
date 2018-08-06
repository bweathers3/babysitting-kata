import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Notes from './Notes';

it('renders without crashing', () => {
  shallow(<Notes />);
});
