import React from 'react';
import { mount } from 'enzyme';
import { performEquation, findButton } from './test/testSupport';
import App from './App';

describe('Calculator', () => {
  it('performs equation', () => {
    const wrapper = mount(<App />);
    const equation = [
      '1',
      '.',
      '2',
      '3',
      '9',
      '+',
      '7',
      '6',
      '%',
      '*',
      '5',
      '/',
      '+/-',
      '8',
      '=',
    ];
    performEquation(wrapper, equation);

    expect(wrapper.find('.output').text()).toBe('0.650475');
  });

  it('allows only correct equation', () => {
    const wrapper = mount(<App />);
    const equation = [
      '+',
      '0',
      '2',
      '.',
      '6',
      '.',
      '-',
      '*',
      '6',
      '%',
      '+',
      '/',
      '.',
      '3',
      '+/-',
      '+',
      '=',
    ];
    performEquation(wrapper, equation);

    expect(wrapper.find('.input').text()).toBe(
      '2.6 * 0.156 / -0.3 + ',
    );
  });

  it('clears input and output when new equation starts', () => {
    const wrapper = mount(<App />);
    const equation = ['2', '+', '2', '='];

    performEquation(wrapper, equation);
    expect(wrapper.find('.input').text()).toBe('2 + 2');
    expect(wrapper.find('.output').text()).toBe('4');

    findButton(wrapper, '9').simulate('click');
    expect(wrapper.find('.input').text()).toBe('9');
    expect(wrapper.find('.output').text()).toBe('0');
  });

  it('clears input and output when C button clicked', () => {
    const wrapper = mount(<App />);
    const equation = ['2', '+', '2', '-', '7'];

    performEquation(wrapper, equation);
    expect(wrapper.find('.input').text()).toBe('2 + 2 - 7');

    findButton(wrapper, 'C').simulate('click');
    expect(wrapper.find('.input').text()).toBe('');
    expect(wrapper.find('.output').text()).toBe('0');
  });
});
