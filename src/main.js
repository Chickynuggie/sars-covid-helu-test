import { createApp } from "vue";
import store from './store';
import './styles/settings.css';

import App from "./App.vue";

createApp(App).use(store).mount("#app");
