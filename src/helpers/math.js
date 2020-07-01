import * as math from 'mathjs';

const ROUND_NUM = 10000000000;

const _formatExpression = (exp) => {
  let formattedExp = exp;

  if (!!exp.match(/\s(\+|-|\/|\*)\s$/)) {
    formattedExp = exp.replace(/\s(\+|-|\/|\*)\s$/, '');
  }
  return formattedExp;
};

export const evaluate = (exp) => {
  let result;

  result = math.evaluate(_formatExpression(exp));
  result =
    Math.round((result + Number.EPSILON) * ROUND_NUM) / ROUND_NUM;

  return String(result);
};
