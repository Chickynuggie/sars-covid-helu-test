<template>
  <div class="overlay" v-if="isSpinning">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from 'vuex';

export default {
  name: "Spinner",
  components: {},
  setup() {
    const store = useStore();
    const isSpinning = computed(() => store.getters.isSpinning);

    return {
      isSpinning
    }
  },
};
</script>

<style scoped>
  .overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
