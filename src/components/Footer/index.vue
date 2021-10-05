<template>
  <div :v-if="globalCovidData" class="footer">
      <div class="global-data-wrapper">
        <span class="warning">Global Cases: {{ globalCovidData.TotalConfirmed }}</span>
        <span class="danger">Global Deaths: {{ globalCovidData.TotalDeaths }}</span>
        <span class="pass">Global Recoveries: {{ globalCovidData.TotalRecovered }}</span>
      </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Footer',
  setup() {
    const store = useStore();
    const globalCovidData = computed(() => store.getters.getGlobalCovidData);

    onMounted(() => {
      store.dispatch('fetchGlobalCovidData');
    });

    return {
      globalCovidData
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100vw;
  height: 5vh;
  color: white;
  position: fixed;
  bottom: 0;
  font-size: 1vw;
  margin: 0 auto;
  padding: 0 25vw;
}

h4 {
  max-width: 25vw;
  margin: 0 auto;
  text-align: center;
}

.global-data-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

span {
  width: 33%;
  text-align: center;
}
</style>