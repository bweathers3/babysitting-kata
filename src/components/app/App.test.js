import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../header/Header'
import Main from '../main/Main'

const wrapper = shallow(<App />);

it('renders App without crashing - create-react-app test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders App without crashing - Enzyme smoke test', () => {
  shallow(<App />);
});

it('renders Header without crashing', () => {
  shallow(<Header />);
});

it('renders Main without crashing', () => {
  shallow(<Header />);
});
