<template>
  <el-collapse-transition>
    <div class="pPopupDetail">
      <div class="header">
        <h3 class="pPopupDetail-title">
          Chi tiết
        </h3>
        <div class="pPopupDetail-iClose mouse-clickable flex-row__center">
          <i class="fad fa-times"></i>
        </div>
      </div>
      <VuePerfectScrollbar class="form">
        <el-form
          ref="form"
          :model="form"
          label-width="0"
          :rules="validationRules"
        >
          <el-form-item class="custom-form-item" prop="name">
            <span class="label">Tên đường ống</span>
            <el-input
              v-model="form.name"
              size="medium"
              class="style-fullWidth input-border-radius-left__0"
            ></el-input>
          </el-form-item>
          <el-form-item class="custom-form-item" prop="status">
            <span class="label">Hiện trạng</span>
            <el-input
              size="medium"
              v-model="form.status"
              class="style-fullWidth input-border-radius-left__0"
            ></el-input>
          </el-form-item>
          <el-form-item class="custom-form-item" prop="length">
            <span class="label">Chiều dài</span>
            <el-input
              v-model="form.length"
              size="medium"
              class="style-fullWidth input-border-radius-left__0"
            ></el-input>
          </el-form-item>
          <el-form-item class="custom-form-item" prop="diameter">
            <span class="label">Đường kính ống</span>
            <el-input
              v-model="form.diameter"
              size="medium"
              class="style-fullWidth input-border-radius-left__0"
            ></el-input>
          </el-form-item>
          <el-form-item class="custom-form-item" prop="constructionUnit">
            <span class="label">Đơn vị thi công</span>
            <el-input
              v-model="form.constructionUnit"
              size="medium"
              class="style-fullWidth input-border-radius-left__0"
            ></el-input>
          </el-form-item>
        </el-form>
      </VuePerfectScrollbar>
      <div class="actions">
        <el-button
          type="primary"
          size="medium"
          class="btnSave"
          @click="submitCreate('form')"
        >
          <i class="fad fa-save"></i>
          {{ isCreate ? "Tạo mới" : "Lưu" }}
        </el-button>
        <el-button type="info" size="medium" class="btnDelete">
          <i class="fad fa-trash"></i>
          {{ isCreate ? "Huỷ" : "Xoá" }}
        </el-button>
      </div>
    </div>
  </el-collapse-transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    VuePerfectScrollbar: () => import("vue-perfect-scrollbar")
  }
})
export default class popupDetail extends Vue {
  public form: object = {};
  public isCreate: boolean = false;
}
</script>
<style lang="scss" scoped></style>
