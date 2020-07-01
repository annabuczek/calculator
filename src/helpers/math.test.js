import { evaluate } from './math';

describe('evaluate', () => {
  it('evaluates basic expression', () => {
    const exp = '3 * 3 + 1 / 2 - 6';
    expect(evaluate(exp)).toBe('3.5');
  });

  it('evaluates expression with decimal numbers', () => {
    const exp = '3.45 * 0.56';
    expect(evaluate(exp)).toBe('1.932');
  });

  it('evaluates expression with negative numbers', () => {
    const exp = '3 + -7.57 - -1';
    expect(evaluate(exp)).toBe('-3.57');
  });

  it('returns number with maximum 10 decimal places', () => {
    const exp = '0.945 * 6.675 - 4765 / 3.567';
    expect(evaluate(exp)).toBe('-1329.5485870129');
  });
});
