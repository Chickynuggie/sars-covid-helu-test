<template>
  <div class="country-input-wrapper">
    <n-auto-complete
      :options="options"
      v-model:value="selectedCountry"
      :blur-after-select="true"
      :on-blur="handleChange"
      placeholder="Start typing country name"
    />
    <i class="bi bi-x-circle country-input-clear" @click="clearCountryFilter"></i>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CountryInput",
  setup() {
    const selectedCountry = ref("");
    const store = useStore();
    const options = computed(() =>
      store.getters.getCountryNames?.filter(
        (item) => item.toLowerCase().search(selectedCountry.value?.toLowerCase()) !== -1
      )
    );

    const clearCountryFilter = () => {
      if(selectedCountry.value) {
        selectedCountry.value = "";
      }

      store.commit("clearCountryFilter");
    }

    const handleChange = () =>
      selectedCountry.value
        ? store.commit("setCountryFilter", selectedCountry.value)
        : clearCountryFilter();

    return {
      selectedCountry,
      options,
      handleChange,
      clearCountryFilter
    };
  },
};
</script>

<style scoped>
h4 {
  padding: 15px;
  border-radius: 3px;
  border: 1px solid black;
  margin: 0;
}

.n-auto-complete {
  max-width: 20rem;
  border: 2px solid black;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 15px -1px #000000;
  box-shadow: 5px 5px 15px -1px #000000;
}

.country-input-wrapper {
  width: 50vw;
  margin: 0 auto 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.country-input-clear {
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.1s ease-in-out;
  margin-left: 1.5rem;
}

.country-input-clear:hover {
  color: rgba(160, 157, 157, 0.3);
}
</style>
