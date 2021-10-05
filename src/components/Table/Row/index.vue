<template>
  <div class="covid-table-row">
    <Column header-title="Country Names" :display-data="getCountryNames" />
    <Column
      header-title="Total Cases"
      :display-data="getCountryTotalDeaths"
      custom-class="warning"
    />
    <Column
      header-title="Total Recoveries"
      :display-data="getCountryTotalRecovered"
      custom-class="pass"
    />
    <Column
      header-title="Total Deaths"
      :display-data="getCountryTotalDeaths"
      custom-class="danger"
    />
  </div>
</template>

<script>
import Column from "../Column";
import useStore from "vuex";

export default {
  name: "Row",
  components: {
    Column,
  },
  setup() {
    const store = useStore();
    const {
      getCountryTotalDeaths,
      getCountryTotalRecovered,
      getCountryTotalDeaths,
      getCountryNames,
    } = store.getters;

    return {
      getCountryTotalDeaths,
      getCountryTotalRecovered,
      getCountryTotalDeaths,
      getCountryNames
    };
  },
};
</script>

<style scoped>
.covid-table-row {
  display: flex;
}
</style>
