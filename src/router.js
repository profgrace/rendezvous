import firebase from "firebase";
import Vue from "vue";
import Router from "vue-router";
import Splash from "./views/Splash.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import Feed from "./views/Feed.vue";
import Notifications from "./views/Notifications.vue";

// import BottomNav from "./components/BottomNav.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "splash",
      component: Splash
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        // {
        //   path: "/home",
        //   name: "BottomNav",
        //   component: BottomNav
        // },
        {
          path: "/home",
          name: "Profile",
          component: Profile
        },
        {
          path: "/home/feed",
          name: "Feed",
          component: Feed
        },
        {
          path: "/home/notifications",
          name: "Notifications",
          component: Notifications
        }
      ],
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("splash");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router;
