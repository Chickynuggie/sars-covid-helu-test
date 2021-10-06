<template>
  <div class="view-switcher">
    <button
      type="button"
      :class="{
        'btn btn-primary': currentView === 'chart',
        'btn btn-secondary': currentView === 'table',
      }"
      @click="() => switchView('chart')"
    >
      <i class="bi bi-bar-chart-line-fill"></i>Chart view
    </button>
    <button
      type="button"
      :class="{
        'btn btn-primary': currentView === 'table',
        'btn btn-secondary': currentView === 'chart',
      }"
      @click="() => switchView('table')"
    >
      <i class="bi bi-table"></i>Table view
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "ViewSwitcher",
  setup() {
    const store = useStore();
    const currentView = computed(() => store.getters.getCurrentView);
    const switchView = (targetView) => {
      if (targetView !== currentView.value) {
        console.log(currentView.value);
        console.log(targetView);
        store.commit("switchView", targetView);
      }
    };

    return {
      currentView,
      switchView,
    };
  },
};
</script>

<style scoped>
.view-switcher {
  padding: 10px;
}

i {
  margin: 10px;
  font-size: 1vw;
}

button {
  margin: 0 10px;
}
</style>
