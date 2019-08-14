<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LoginModule } from "./store/modules/login";
import { generalInfo } from "./store/modules/generalApp";
import { DrawingModule } from "./store/modules/userDrawing";
@Component
export default class AppMain extends Vue {
  // declare module
  public get isLogged() {
    return LoginModule.isLogged;
  }

  public get listNodes() {
    return DrawingModule.listNodes;
  }

  public get isCollapseMenu() {
    return generalInfo.isCollapse;
  }
}
</script>

<style scoped></style>
