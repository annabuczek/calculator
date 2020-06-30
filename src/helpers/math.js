import * as math from 'mathjs';

const _formatExpression = (exp) => {
  let formattedExp = exp;

  if (!!exp.match(/\s(\+|-|\/|\*)\s$/)) {
    formattedExp = exp.replace(/\s(\+|-|\/|\*)\s$/, '');
  }
  return formattedExp;
};

export const evaluate = (exp) => {
  return math.evaluate(_formatExpression(exp));
};
