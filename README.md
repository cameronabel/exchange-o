# _exchange-o_

#### By _**Cameron Abel**_

#### _Presents Currency Exchange Rates_

## Technologies Used

- CSS
- HTML
- Javascript
- node.js
- npm
- webpack

## Description

Convert your USD into many other currencies.

## Setup/Installation Requirements

To host this site locally:

- Clone this repository to your local machine
- Navigate to the top level directory
- Visit the [ExchangeRate-API site](https://www.exchangerate-api.com/). Input your email address and click the "Get Free Key" button.
- You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
- At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
- Execute `touch .env`
- Edit the `.env` file to contain:
  `API_KEY=[enter your ExchangeRate-API key here]`
- Execute `npm install`
- Execute `npm run start`

Once active, enter an amount in USD, then select a currency from the dropdown menu. Selecting a new currency or changing the amount entered for USD will automatically populate the converted currency amount. Entering an amount in the alternate currency field will automatically reverse the conversion and populate the USD field.

## Known Bugs

- None at this time. Report bugs [here](mailto:cameronabel@gmail.com)

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) _2022_ _Cameron Abel_
