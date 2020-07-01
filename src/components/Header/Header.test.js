import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Input from '../Input/Input';
import Output from '../Output/Output';

describe('Header', () => {
  it('displays input and output components', () => {
    const wrapper = shallow(
      <Header input="3 x 3" finalInput="" output="" />,
    );

    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(Output)).toHaveLength(1);
  });
});
