import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import TimeForm from './TimeForm';

it('renders TimeForm Container without crashing', () => {
  shallow(<TimeForm />);
});
