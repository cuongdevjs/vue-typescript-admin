import Vue from "vue";
import Router from "vue-router";
import { concat } from "lodash";
import auth from "@/config/auth";
Vue.use(Router);

const routerInstance: any = new Router({
  routes: concat(
    [
      {
        path: "/app",
        name: "app",
        component: () => import("../App.vue"),
        children: concat([
          {
            path: "home",
            component: () => import("../views/home/index.vue"),
            name: "home"
          },
          {
            path: "app/*",
            redirect: {
              name: "home"
            }
          }
        ])
      }
    ],
    [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/login/index.vue")
      }
    ],
    [
      {
        path: "*",
        redirect: {
          name: "home"
        }
      }
    ]
  )
});

routerInstance.beforeEach((to: any, from: any, next: any) => {
  auth.checkIsAuthenticated().then((valid: any) => {
    if (valid) {
      to.name === "login" ? next({ name: "home" }) : next();
    } else {
      to.name !== "login" ? next({ name: "login" }) : next();
    }
  });
});

export default routerInstance;
