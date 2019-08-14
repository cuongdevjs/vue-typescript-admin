<template>
  <div class="pSidebar">
    <menuLeft />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    menuLeft: () => import("./components/menuLeft.vue")
  }
})
export default class mainSidebar extends Vue {
  public listUser: Array<object> = [
    {
      username: "Account 1",
      listDevices: [
        {
          Device_id: 0,
          Device_name: "Device 1"
        }
      ]
    }
  ];
}
</script>

<style lang="scss" scoped></style>
