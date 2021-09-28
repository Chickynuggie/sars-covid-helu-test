import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = new createStore({
  state: {},
  mutations: {},
  getters: {},
  actions: {}
});

createApp(App).use(store).mount("#app");
