const getters = {
    getGlobalCovidData: state => state.globalCovidData,
    getCountriesCovidData: state => state.countriesCovidData,
    getCountryNames: state => state.countriesCovidData.map((country) => country.Country),
    getCountryTotalDeaths: state => state.countriesCovidData.map((country) => country.TotalDeaths),
    getCountryTotalCases: state => state.countriesCovidData.map((country) => country.TotalConfirmed),
    getCountryTotalRecovered: state => state.countriesCovidData.map((country) => country.TotalRecovered)
};

export default getters;