<template>
  <header :class="['flex-row__between', 'pHeader']">
    <div :class="['pHeader-left flex-row__left margin-left__10']">
      <i class="iconCollapse fas fa-bars margin-right__10 mouse-clickable"></i>
      <slot name="filterByStatus">
        <h2 class="header-title">
          Vẽ mạng nước Aquasoft
        </h2>
      </slot>
    </div>
    <user-header />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    userHeader: () => import("./components/user-header.vue")
  }
})
export default class mainHeader extends Vue {}
</script>
<style lang="scss" scoped></style>
