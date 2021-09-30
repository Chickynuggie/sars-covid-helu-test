import { fetchOverallCovidData } from "../api";

const actions = {
  fetchOverallCovidData({ commit }) {
    fetchOverallCovidData().then((results) => {
        commit("setGlobalCovidData", results?.data?.Global);
        commit("setCountriesCovidData", results?.data?.Countries);
      });
  },
  fetchGlobalCovidData({ commit }) {
    fetchOverallCovidData().then((results) => {
      commit("setGlobalCovidData", results?.data?.Global);
    });
  },
  fetchCountriesCovidData({ commit }) {
    fetchOverallCovidData().then((results) => {
      commit("setCountriesCovidData", results?.data?.Countries);
    });
  },
  setCountryFilter({ commit }, payload) {
    commit('setCountryFilter', payload);
  }
};

export default actions;
