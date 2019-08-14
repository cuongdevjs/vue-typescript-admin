<template>
  <div id="app" class="main-app">
    <mainHeader />
    <div class="pMain">
      <mainSidebar />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    mainSidebar: () => import("./views/layout/sidebar/main-sidebar.vue"),
    mainHeader: () => import("./views/layout/header/main-header.vue")
  }
})
export default class App extends Vue {}
</script>
<style lang="scss" scoped></style>
