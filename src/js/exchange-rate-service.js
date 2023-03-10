export default class ExchangeRateService {  
  static getRates() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.result} ${response['error-type']}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }   
      })
      .catch(function(error) {
        return error;
      });
  }
  static getCurrencies() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`)
      .then(function(response) {
        if(!response.ok) {
          const errorMessage = `${response.result} ${response['error-type']}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}