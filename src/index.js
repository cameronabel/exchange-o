import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';	
import './css/styles.css';
import ExchangeRateService from './js/exchange-rate-service';


function getRateData() {
  ExchangeRateService.getRates()
    .then(function(rateResponse) {
      if (rateResponse instanceof Error) {
        const errorMessage = `There was a problem accessing the rate data from ExchangeRate-API:
        ${rateResponse.message}`;
        throw new Error(errorMessage);
      }
      sessionStorage.clear();
      sessionStorage.rateData = JSON.stringify(rateResponse);
      sessionStorage.status = 'loaded';
    })
    .then(updateValueHandler)
    .catch(function(error) {
      document.getElementById('error-zone').innerText = error.message;
    });
}

function getCurrencyData() {
  ExchangeRateService.getCurrencies()
    .then(function(currencyResponse) {
      if (currencyResponse instanceof Error) {
        const errorMessage = `There was a problem accessing the rate data from ExchangeRate-API:
        ${currencyResponse.message}`;
        throw new Error(errorMessage);
      }
      document.getElementById('currencies').removeEventListener("click", getCurrencyData);
      updateCurrencies(currencyResponse.supported_codes);
    })
    .catch(function(error) {
      document.getElementById('error-zone').innerText = error.message;
    });
}

function updateValueHandler() {
  let outputField;
  if (document.activeElement.id === 'usd-input') {
    outputField = document.getElementById('other-input');
  } else if (document.activeElement.id === 'other-input') {
    outputField = document.getElementById('usd-input');
  }
  if (!sessionStorage.status) {
    sessionStorage.status = 'pending';
    getRateData();
  } else if (sessionStorage.status === 'loaded'){
    const rateData = JSON.parse(sessionStorage.rateData);
    const currencyCode = document.getElementById('currencies').value || 'USD';
    if (document.activeElement.id === 'usd-input') {
      outputField.value = (document.activeElement.value * parseFloat(rateData.conversion_rates[currencyCode])).toFixed(2);
    } else {
      outputField.value = (document.activeElement.value / parseFloat(rateData.conversion_rates[currencyCode])).toFixed(2);
    }
  }  
}

function updateCurrencies(codes) {
  codes.forEach(element => {
    const [code, name] = element;
    if (code !== 'USD') {
      const option = document.createElement('option');
      option.value = code;
      option.innerText = `${code} - ${name}`
      document.getElementById('currencies').append(option);
    }
  });
}

document.getElementById('usd-input').addEventListener("input", updateValueHandler);
document.getElementById('other-input').addEventListener("input", updateValueHandler);
document.getElementById('currencies').addEventListener("click", getCurrencyData);
document.getElementById('currencies').addEventListener("change", function () {
  document.getElementById('usd-input').focus();
  updateValueHandler();
  document.activeElement.blur();
});