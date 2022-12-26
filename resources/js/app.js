// import './bootstrap';

import { createApp } from "vue";
import Root from "./components/Root.vue";
import router from "./router";

createApp(Root).use(router).mount("#app");
