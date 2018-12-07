import Vue from "vue";
import "./plugins/vuetify";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: "#000000",
    secondary: "#FFD700",
    blue: "#425BC3"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
