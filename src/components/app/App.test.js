import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders App without crashing - create-react-app test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders App without crashing - Enzyme smoke test', () => {
  shallow(<App />);
});

it('renders create-react-app message', () => {
  const wrapper = shallow(<App />);
  const welcome = <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders Babysitting with Amy message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Babysitting with Amy</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
