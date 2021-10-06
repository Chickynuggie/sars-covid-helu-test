const getters = {
    getGlobalCovidData: state => state.globalCovidData,
    getCountriesCovidData: state => state.countryFilter ? state.countriesCovidData.filter((country) => country.Country === state.countryFilter) : state.countriesCovidData,
    getCountryNames: state => state.countriesCovidData.map((country) => country.Country),
    isSpinning: state => state.isSpinning
};

export default getters;