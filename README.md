## Calculator

[LIVE VERSION HERE](https://annabuczek.github.io/calculator)

Application created with React and [Create React App](https://github.com/facebook/create-react-app).

### How it works

Each button has an action string and a value string assigned to it. Every button click triggers method `handleButtonClick` that performs App component state change. For each button action there is a different logic to be executed when the button is clicked (switch statement) so the pieces of state are updated differently for each button action. Most of the pieces of state are used internally and hold information about the equation state and a different parts of it, only `input`, `output` and `finalInput` are displayed to the user at some point. The final equation evaluation happens when the user clicks `=` button and is performed with the use of `mathjs` library. Equation is formatted before if needed, to match mathjs library syntax and the result is served as a string representing number with up to 10 decimal places.

## Run locally

```
git clone git@github.com:annabuczek/calculator.git
cd calculator
yarn install
yarn start
```

## Test

```
yarn test
```
