const mutations = {
    setGlobalCovidData(state, data) {
        state.globalCovidData = data;
    },
    setCountriesCovidData(state, data) {
        state.countriesCovidData = data;
    },
    setCountryFilter(state, data) {
        state.filterByCountry = data;
    },
    clearCountryFilter(state) {
        state.filterByCountry = null;
    }
};

export default mutations;