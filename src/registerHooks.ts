import Component from "vue-class-component";

Component.registerHooks([
  "beforeRouterUpdate",
  "beforeRouterEnter",
  "beforeRouterLeave"
]);
