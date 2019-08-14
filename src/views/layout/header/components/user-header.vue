<template>
  <div class="userSegment flex-row__end">
    <el-popover
      placement="bottom-start"
      trigger="click"
      popper-class="user-popover"
    >
      <div class="menu-user">
        <div class="menu-user__profile">
          <div class="thumbnail flex-row__center">
            <span>A</span>
          </div>
          <div class="name">
            {{ user.name }}
          </div>
          <div class="metaInfo">
            <div class="item">
              <i class="fas fa-mobile color__silver margin-right__10"></i>
              <span>{{ user.role }}</span>
            </div>
          </div>
        </div>
        <div class="flex-row__center">
          <el-button size="mini" class="btnSolid__blue">
            <i class="fas fa-sign-out-alt"></i>
            &nbsp;Đăng xuất
          </el-button>
        </div>
      </div>
      <div slot="reference" class="profile mouse-clickable">
        <div class="thumbnail flex-row__center">
          A
        </div>
        <div class="txt">
          <span class="name">{{ user.name }}</span>
          <span class="role">{{ user.role }}</span>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class userHeader extends Vue {
  public user: object = {
    name: "Nguyễn Mạnh Cường",
    role: "Admin"
  };
}
</script>
<style lang="scss" scoped></style>
