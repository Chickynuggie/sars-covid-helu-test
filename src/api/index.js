import axios from "axios";

export const fetchOverallCovidData = () => {
    return axios.get('https://api.covid19api.com/summary');
};

export const fetchCountries = () => {
    return axios.get('https://api.covid19api.com/countries');
}

axios.interceptors.request.use(function (config) {
    alert('kaka van!');
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

