<template>
  <CountryInput />
  <div class="covid-table">
    <table v-if="countriesData">
      <tr>
        <th v-for="header in tableHeaders" :key="header">{{ header }}</th>
      </tr>
      <tr v-for="countryData in countriesData" :key="countryData.CountryName">
        <td v-for="key in tableHeaders" :key="countryData.CountryName + key">
          {{ countryData ? countryData[key] : null}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import constants from '../../constants';
import CountryInput from '../CountryInput';

export default {
  name: 'Table',
  props: ['header'],
  components: {
    CountryInput
  },
  setup() {
    const store = useStore();
    const tableHeaders = constants.tableHeaders;
    const countriesData = computed(() => store.getters.getCountriesCovidData);
    let key, countryData;

    onMounted(() => {
      store.dispatch('fetchOverallCovidData');
    })

    return {
      tableHeaders,
      countriesData,
      key,
      countryData
    }
  }
}
</script>


<style scoped>
.covid-table {
  max-height: 50vh;
  overflow-y: scroll;
  width: 50vw;
  margin: 0 auto;
  -webkit-box-shadow: 5px 5px 15px -1px #000000;
  box-shadow: 5px 5px 15px -1px #000000;
  background-color: rgba(0, 0, 0, 0.3);
}

th, td {
  width: 25%;
  min-width: 25%;
  padding: 5px 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

th {
  font-size: 1vw;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px 5px;
}

tr:nth-of-type(even) {
  background-color: rgba(194, 189, 189, 0.1);
}

table {
  width: 49vw;
  overflow: hidden;
}
</style>
