import Vue from "vue";
import VueRouter from "vue-router";
import Home_Admin from "../views/Home_Admin.vue";
import Admin from "../views/Login.vue"
import Home from "../views/Home.vue";
// import Sidebar from "../components/Sidebar.vue";
import Dashboard from "../views/Dashboard.vue";
import SubscriberList from "../views/Subscriber_List.vue";
import AddEvent from "../components/AddEvent.vue";
import Notification from "../components/PushNotification.vue"
import { homedir } from "os";
Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") != null) {
        next("/admin/dashboard");
      } else {
        next();
      }

    },
  },
  {
    path: "/",
    name: "home",
    component : Home
  },
  {
    path: "/admin/home",
    name: "admin/home",
    component: Home_Admin,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") == null) {
        next("/admin");
      } else {
        next();
      }
    }
  },
  {
    path: "/admin/dashboard",
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
    path: "/admin/subscriberlist",
    name: "subscriberlist",
    component: SubscriberList,
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
    path: "/admin/addevent",
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
    path: "/admin/about",
    name: "aboutus",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About_Admin.vue"),
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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
  path : "/notifications",
  name:'notification',
  component: Notification
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
