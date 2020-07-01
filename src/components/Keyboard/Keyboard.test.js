import React from 'react';
import { shallow } from 'enzyme';
import keyboardButtons from './keyboardButtons';
import Keyboard from './Keyboard';
import Button from '../Button/Button';

describe('Keyboard', () => {
  it('displays collection of buttons', () => {
    const handleButtonClick = jest.fn();
    const wrapper = shallow(
      <Keyboard
        handleButtonClick={handleButtonClick}
        buttons={keyboardButtons}
      />,
    );

    expect(wrapper.find(Button)).toHaveLength(keyboardButtons.length);
  });
});
