import Vue from "vue";
import Router from "vue-router";
import Splash from "./views/Splash.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "splash",
      component: Splash
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
