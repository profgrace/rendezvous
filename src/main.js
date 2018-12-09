import Vue from "vue";
import "./plugins/vuetify";
import Vuetify from "vuetify";
import VueFire from "vuefire";
import firebase from "./firebase";
import "firebase/firestore";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";

Vue.config.productionTip = false;

let app = "";

Vue.use(VueFire);

Vue.use(Vuetify, {
  theme: {
    primary: "#000000",
    secondary: "#BEA100",
    blue: "#425BC3",
    btnColor: "#FFD700",
    burntYellow: "#847000",
    burntRed: "#980000",
    darkBrown: "#4D4D4D"
  }
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
