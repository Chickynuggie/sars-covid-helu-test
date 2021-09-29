const mutations = {
    setGlobalCovidData(state, data) {
        state.globalCovidData = data;
    },
    setCountriesCovidData(state, data) {
        state.countriesCovidData = data;
    }
};

export default mutations;