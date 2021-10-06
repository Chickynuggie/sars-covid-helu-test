<template> </template>

<script>
import { Bar } from "vue3-chart-v2";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "MonthlyChart",
  extends: Bar,
  setup() {
    const store = useStore();

    onMounted = () => {
      this.renderChart({
        labels: computed(() => store.getters.getCountryNames),
        datasets: [
          {
            label: "GitHub Commits",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
        ],
      });
    };
  },
};
</script>

<style></style>
