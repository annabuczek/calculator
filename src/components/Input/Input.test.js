import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  const input = '34 x 6 - 6';

  it('displays input if provided', () => {
    const wrapper = shallow(<Input input={input} finalInput="" />);

    expect(wrapper.text()).toBe(input);
  });

  it('displays finalInput if provided', () => {
    const wrapper = shallow(<Input input="" finalInput={input} />);

    expect(wrapper.text()).toBe(input);
  });
});
