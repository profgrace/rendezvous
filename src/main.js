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
import VueToastr from "@deveodk/vue-toastr";
import "@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css";

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

Vue.use(VueToastr, {
  defaultPosition: "toast-top-center",
  defaultType: "success",
  defaultTimeout: 5000
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
