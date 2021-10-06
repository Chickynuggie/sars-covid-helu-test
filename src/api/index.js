import axios from "axios";
import store from '../store';

export const fetchOverallCovidData = () => {
    return axios.get('https://api.covid19api.com/summary');
};

export const fetchCountries = () => {
    return axios.get('https://api.covid19api.com/countries');
}

axios.interceptors.request.use(
  function(config) {
    store.commit("startSpinning");
    return config;
  },
  function(error) {
    store.commit("stopSpinning");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    store.commit("stopSpinning");
    return response;
  },
  function(error) {
    store.commit("stopSpinning");
    return Promise.reject(error);
  }
);
