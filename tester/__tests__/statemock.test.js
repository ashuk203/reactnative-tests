import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

// imported as a connected component!
import Welcome from '../components/Welcome';

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = {
  numClicks : 0
};

describe('Testing Welcome', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Welcome />,
      { context: { store: mockStore(initialState) } },
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});

