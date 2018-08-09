import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import TimeForm from './TimeForm';

const wrapper = shallow(<TimeForm />);

describe('Static Components', () => {
  it('renders TimeForm Component without crashing', () => {
    shallow(<TimeForm />);
  });

  it('renders first directions Text', () => {
    const firstDirectionsText = <p className="main-container-top">Enter the Babysitting times below.</p>
    expect(wrapper.contains(firstDirectionsText)).toEqual(true);
  });

  it('renders Start Time Label Text', () => {
    const startTimeLabelText = <label for="start-time">Starting Time:</label>
    expect(wrapper.contains(startTimeLabelText)).toEqual(true);
  });

  it('renders Start Time Input Container Text', () => {
    const startTimeInputContainerBox = <input type="time" className="time" name="start-time" min="17:00" required />
    expect(wrapper.contains(startTimeInputContainerBox)).toEqual(true);
  });

  it('renders Bed Time Label Text', () => {
    const bedTimeLabelText = <label for="bed-time">Bed Time:</label>
    expect(wrapper.contains(bedTimeLabelText)).toEqual(true);
  });

  it('renders Bed Time Input Container Text', () => {
    const bedTimeInputContainerBox = <input type="time" className="time" name="bed-time" min="18:00" required />
    expect(wrapper.contains(bedTimeInputContainerBox)).toEqual(true);
  });

  it('renders Finish Time Label Text', () => {
    const finishTimeLabelText = <label for="finish-time">Finish Time:</label>
    expect(wrapper.contains(finishTimeLabelText)).toEqual(true);
  });

  it('renders Finish Time Input Container Text', () => {
    const finishTimeInputContainerBox = <input type="time" className="time" name="finish-time" />
    expect(wrapper.contains(finishTimeInputContainerBox)).toEqual(true);
  });
});

describe('Props from App ', () => {
  {/* // I could not figure out how to test the props passed from App - no definition of props
  it('finds onsubmit function passed from App', () => {
    const onSubmitFunctionPass = this.props.onFormSubmit(e)
    expect(wrapper.contains(onSubmitFunctionPass)).toEqual(true);
  });
  */}
});
