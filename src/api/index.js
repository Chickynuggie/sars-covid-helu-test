import axios from "axios";

export const fetchOverallCovidData = () => {
    return axios.get('https://api.covid19api.com/summary');
};

export const fetchCountries = () => {
    return axios.get('https://api.covid19api.com/countries');
}


