import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Welcome from '../components/Welcome';

describe('Testing Welcome component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Welcome numClicks= {0} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ numClicks: 2 });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ numClicks: 8 });
    expect(wrapper).toMatchSnapshot();
  });
});
