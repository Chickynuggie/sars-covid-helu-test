<template>
  <h1>{{ this.$store.getters.getGlobalCovidData }}</h1>
  <!-- <Cell v-for="country in this.$store.getters.getCountriesCovidData" v-bind:key="country.Country" v-bind:country-data="country"  /> -->
  <Column header-title="Country Names" :display-data="this.$store.getters.getCountryNames" />
  <Column header-title="Total Cases" :display-data="this.$store.getters.getCountryTotalDeaths" />
  <Column header-title="Total Recoveries" :display-data="this.$store.getters.getCountryTotalRecovered" />
  <Column header-title="Total Deaths" :display-data="this.$store.getters.getCountryTotalDeaths" />
</template>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import Column from './Column';

export default {
  name: 'HelloWorld',
  components: {
    Column
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('fetchOverallCovidData');
    })
  }
}
</script>


<style scoped>

</style>
