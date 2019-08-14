import axios from "axios";
import app from "../main";
import auth from "./auth";
import { Vue } from "vue-property-decorator";
import store from "@/store";
import Qs from "qs";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL_API;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

var temp: number = 0;

axios.interceptors.request.use(
  (config: any) => {
    auth.checkIsAuthenticated().then((valid: any) => {
      valid
        ? (config.headers.Authorization = `Bearer ${auth.getToken()}`)
        : store.dispatch("LOGOUT");
    });
    // config progressbar start
    temp === 0 && app.$Progress.start();
    temp++;
    // config data not auto convert to json data that convert to type object[key]=value
    config.paramsSerializer = (params: any) => {
      return Qs.stringify(params, {
        arrayFormat: "brackets",
        encode: false
      });
    };
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: any) => {
    // config progressbar finish
    temp--;
    temp === 0 && app.$Progress.finish();

    return response.data;
  },
  (error: any) => {
    temp--;
    temp === 0 && app.$Progress.fail();

    if (error.response.status === 500) {
      new Vue().$messageError("Server errors! Try again!");
    } else if (error.response.status === 400) {
      return Promise.reject(error.response);
    } else if (error.response.status === 401) {
      store.dispatch("LOGOUT");
      new Vue().$messageError(
        "Session login is expired! Redirect to login page!"
      );
    }
  }
);
