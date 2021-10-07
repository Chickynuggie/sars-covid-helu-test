import { createApp } from "vue";
import naive from "naive-ui";
import store from "./store";
import "./styles/settings.css";

import App from "./App.vue";

createApp(App)
  .use(store)
  .use(naive)
  .mount("#app");
