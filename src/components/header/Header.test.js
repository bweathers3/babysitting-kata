import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />);

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Header without crashing - Enzyme smoke test', () => {
  shallow(<Header />);
});

it('renders Babysitting with Amy message in Header', () => {
  const welcome = <h1 className="header-title">Babysitting with Amy</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
