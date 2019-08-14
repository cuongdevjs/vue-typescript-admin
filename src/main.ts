import Vue from "vue";
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/vi";
import "element-ui/lib/theme-chalk/index.css";
import * as VueGoogleMaps from "vue2-google-maps";
import VueProgressBar from "vue-progressbar";
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";

// router, store
import App from "./App-main.vue";
import router from "./router";
import store from "./store";
import "./config/axios";

// import utilities
import "@/assets/style/index.scss";
import "@/registerHooks.ts";
import mixins from "./mixin/mixins";
import httpSevice from "./config/httpService";

// import dependency
Vue.use(Element, { locale });
Vue.use(VueGoogleMaps, {
  load: {
    region: "VI",
    language: "vi",
    key: "AIzaSyDemuTXbh1ONO1hYzbfP-TGCkPRI2jwaPA",
    libraries: "places,drawing,visualization",
    autobindAllEvents: false,
    installComponents: true
  }
});

Vue.use(VueProgressBar, {
  color: "red",
  failedColor: "red",
  thickness: "2px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  }
});

Vue.mixin(mixins);
Vue.mixin(httpSevice);
Vue.component(CollapseTransition.name, CollapseTransition);

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
