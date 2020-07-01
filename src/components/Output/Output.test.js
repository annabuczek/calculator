import React from 'react';
import { shallow } from 'enzyme';
import Output from './Output';

describe('Output', () => {
  const output = '97';

  it('displays output', () => {
    const wrapper = shallow(<Output output={output} />);

    expect(wrapper.text()).toBe(output);
  });
});
