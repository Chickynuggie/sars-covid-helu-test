import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";

const store = new createStore({
  state: {},
  mutations,
  actions,
  getters: {}
});

export default store;
