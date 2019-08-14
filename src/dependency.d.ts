declare module "element-ui/lib/locale/lang/vi";
declare module "vue-perfect-scrollbar";
declare module "qs";
declare module "vue2-google-maps";
declare module "element-ui/lib/transitions/collapse-transition";

declare module "vue-progressbar" {
  import { PluginFunction } from "vue";

  export const install: PluginFunction<{}>;

  interface ProgressMethods {
    start(): void;
    finish(): void;
    fail(): void;
  }

  module "vue/types/vue" {
    interface Vue {
      $Progress: ProgressMethods;
    }
  }
}
