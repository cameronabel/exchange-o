import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';	
import './css/styles.css';
//import ExchangeRateService from './js/exchange-rate-service';

// function getRateData() {
//   ExchangeRateService.getRates()
//     .then(function(rateResponse) {
//       if (rateResponse instanceof Error) {
//         const errorMessage = `There was a problem accessing the rate data from ExchangeRate-API:
//         ${rateResponse.message}`;
//         throw new Error(errorMessage);
//       }
//       document.querySelector('body').innerText = JSON.stringify(rateResponse);
//     })
//     .catch(function(error) {
//       document.querySelector('body').innerText = error;
//     });
// }

//getRateData();