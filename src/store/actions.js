import { fetchCovidData } from "../api";

const actions = {
  fetchOverallCovidData({ commit }) {
    fetchCovidData().then((results) => {
        commit("setGlobalCovidData", results?.data?.Global);
        commit("setCountriesCovidData", results?.data?.Countries);
      });
  },
  fetchGlobalCovidData({ commit }) {
    fetchCovidData().then((results) => {
      commit("setGlobalCovidData", results?.data?.Global);
    });
  },
  fetchCountriesCovidData({ commit }) {
    fetchCovidData().then((results) => {
      commit("setCountriesCovidData", results?.data?.Countries);
    });
  },
};

export default actions;
