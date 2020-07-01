import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  const handleButtonClick = jest.fn();

  it('displays button', () => {
    const wrapper = shallow(
      <Button
        className="btn"
        content="9"
        handleButtonClick={handleButtonClick}
        action="num"
      />,
    );

    expect(wrapper.text()).toBe('9');
  });

  it('fires function handleButtonClick onClick', () => {
    const wrapper = mount(
      <Button
        className="btn"
        content="9"
        handleButtonClick={handleButtonClick}
        action="num"
      />,
    );

    wrapper.simulate('click');
    expect(handleButtonClick.mock.calls.length).toBe(1);
  });
});
