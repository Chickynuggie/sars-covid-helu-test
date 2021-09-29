import axios from "axios";

export const fetchCovidData = () => {
    return axios.get('https://api.covid19api.com/summary');
};
