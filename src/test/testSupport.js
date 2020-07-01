export const findButton = (app, value) => {
  return app.find(`button[value="${value}"]`);
};

export const performEquation = (app, equationArr) => {
  equationArr.forEach((digit) => {
    findButton(app, digit).simulate('click');
  });
};
