<template>
  <div class="covid-table">
    <Column header-title="Country Names" :display-data="this.$store.getters.getCountryNames" />
    <Column header-title="Total Cases" :display-data="this.$store.getters.getCountryTotalDeaths" custom-class="warning"/>
    <Column header-title="Total Recoveries" :display-data="this.$store.getters.getCountryTotalRecovered" custom-class="pass"/>
    <Column header-title="Total Deaths" :display-data="this.$store.getters.getCountryTotalDeaths" custom-class="danger" />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import Column from './Column';

export default {
  name: 'Table',
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
.covid-table {
  max-height: 50vh;
  overflow-y: scroll;
  width: 50vw;
  margin: 0 auto;
  display: flex;
}
</style>
