import Vue from "vue";
import "./plugins/vuetify";
import Vuetify from "vuetify";
import VueFire from "vuefire";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";

Vue.config.productionTip = false;

let app = "";

firebase.initializeApp({
  apiKey: "AIzaSyAmYb_2b9I3Ul667mioX_FR7kJ-4d_1TKc",
  authDomain: "rendezvous-26c3d.firebaseapp.com",
  databaseURL: "https://rendezvous-26c3d.firebaseio.com",
  projectId: "rendezvous-26c3d",
  storageBucket: "rendezvous-26c3d.appspot.com",
  messagingSenderId: "311131937755"
});

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
