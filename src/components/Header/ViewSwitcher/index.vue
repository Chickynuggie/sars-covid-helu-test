<template>
  <div class="view-switcher">
    <button type="button" class="btn btn-primary"><i class="bi bi-bar-chart-line-fill"></i>Chart view</button>
    <button type="button" class="btn btn-secondary"><i class="bi bi-table"></i>Table view</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'ViewSwitcher',
  setup() {
    const store = useStore();
    const currentView = computed(() => store.getters.getCurrentView);

    return {
      currentView
    }
  }
}
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