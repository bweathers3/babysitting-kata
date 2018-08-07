import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../header/Header'
import Main from '../main/Main'
import Notes from '../notes/Notes'
import Payment from '../payment/Payment'

const wrapper = shallow(<App />);

it('renders App without crashing - create-react-app test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders App without crashing - Enzyme smoke test', () => {
  shallow(<App />);
});

it('renders Header component without crashing', () => {
  Header.displayName = 'Header';
  const header = wrapper.find('Header');
});

it('renders Main component without crashing', () => {
  Main.displayName = 'Main';
  const main = wrapper.find('Main');
});

it('renders Notes component without crashing', () => {
  Notes.displayName = 'Notes';
  const notes = wrapper.find('Notes');
});

it('renders Payment component without crashing', () => {
  Payment.displayName = 'Payment';
  const payment = wrapper.find('Payment');
});
