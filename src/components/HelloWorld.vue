<template>
  <h1>{{ this.$store.getters.getGlobalCovidData }}</h1>
  <h2>{{ this.$store.getters.getCountriesCovidData }}</h2>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue';

export default {
  name: 'HelloWorld',
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
