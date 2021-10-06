const mutations = {
    setGlobalCovidData(state, data) {
        state.globalCovidData = data;
    },
    setCountriesCovidData(state, data) {
        state.countriesCovidData = data;
    },
    setCountryFilter(state, data) {
        state.countryFilter = data;
    },
    clearCountryFilter(state) {
        state.countryFilter = null;
    },
    startSpinning(state) {
        state.isSpinning = true;
    },
    stopSpinning(state) {
        state.isSpinning = false;
    },
    switchView(state, data) {
        state.currentView = data;
    }
};

export default mutations;