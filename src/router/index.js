import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Login.vue"
import store from "../store"
// import Sidebar from "../components/Sidebar.vue";
import Dashboard from "../views/Dashboard.vue";
import AddEvent from "../components/AddEvent.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") != null) {
        next("/dashboard");
      } else {
        next();
      }

    },
  },
  {
    path: "/",
    redirect: {
      path: "/admin"
    }
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") == null) {
        next("/admin");
      } else {
        next();
      }
    }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      tokenRequired: false
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") == null) {
        next("/admin");
      } else {
        next();
      }
    }
  },
  {
    path: "/addevent",
    name: "addevent",
    component: AddEvent,
    meta: {
      tokenRequired: false
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") == null) {
        next("/admin");
      } else {
        next();
      }
    }
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") == null) {
        next("/admin");
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
