<template>
  <div class="overlay" v-if="isSpinning">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import { axios } from "axios";
import { onMounted, computed } from "vue";

export default {
  name: "Spinner",
  components: {},
  setup() {
    const store = useStore();
    const isSpinning = computed(() => store.getters.isSpinning);

    onMounted(() => {
      axios.interceptors.request.use(
        function(config) {
          store.dispatch("startSpinner");
          return config;
        },
        function(error) {
          store.dispatch("stopSpinner");
          return Promise.reject(error);
        }
      );

      axios.interceptors.response.use(
        function(response) {
          store.dispatch("stopSpinner");
          return response;
        },
        function(error) {
         store.dispatch("stopSpinner");
          return Promise.reject(error);
        }
      );
    });

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
