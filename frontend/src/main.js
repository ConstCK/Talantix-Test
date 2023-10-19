import { createApp } from "vue";
import App from "./App.vue";
import VueCookies from "vue-cookies";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(VueCookies);
app.mount("#app");
