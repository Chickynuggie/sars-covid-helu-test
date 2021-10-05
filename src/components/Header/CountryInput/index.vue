<template>
  <n-auto-complete
    :options="options"
    v-model:value="value"
    :on-select="handleChange"
    placeholder="Start typing country name"
  />
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CountryInput",
  setup() {
    const valueRef = ref("");
    const store = useStore();
    const options = computed(() =>
      store.getters.getCountryNames.filter(
        (item) =>
          item.toLowerCase().search(valueRef.value?.toLowerCase()) !== -1
      )
    );

    const handleChange = () => {
      store.dispatch('setCountryFilter', valueRef.value);
    }

    return {
      value: valueRef,
      options,
      handleChange
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
  margin-left: 10rem;
  border: 2px solid black;
  border-radius: 5px;
}
</style>
