<template>
  <div class="pLogin flex-row__between">
    <div class="leftSection">
      <div class="intro padding-left-10">
        <div class="flex-row__left">
          <img
            src="../../../public/logo_transparent.png"
            alt=""
            class="logo-lv1"
          />
          <div class="txt">
            <div class="pHeader padding-bottom__10 has-border__bottom ">
              Water Network Draw System
            </div>
            <p class="tt-2 margin-top__10 padding-top__10">
              Chào mừng bạn đến với hệ thống vẽ mạng nước
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="rightSection">
      <VuePerfectScrollbar
        class="scroll-pLogin"
        :settings="perfectScrollbarSetting"
      >
        <img
          class="logo-lv2"
          src="../../../public/logo_transparent.png"
          alt=""
        />
        <div class="title margin-bottom-10 txt-center font-weight__bold">
          ĐĂNG NHẬP VÀO HỆ THỐNG
        </div>

        <div class="form width__100">
          <el-form
            :model="form"
            status-icon
            ref="form"
            :rules="ruleForm"
            class="demo-form"
          >
            <el-form-item prop="userName">
              <el-input
                size="large"
                v-model="form.username"
                placeholder="Tài khoản"
                class="style-fullWidth input-font__bold"
                @change="checkValidationForms('form')"
              >
                <template slot="append">
                  <i class="fas fa-envelope-open-text clickable font-size__medium"></i>
                </template>
              </el-input>
            </el-form-item>
            <div class="padding-top__10 margin-bottom__5"></div>
            <el-form-item>
              <el-input
                size="large"
                class="style-fullWidth input-font__bold"
                placeholder="Mật khẩu"
                :type="isShowPassword ? 'text' : 'password'"
                v-model="form.password"
              >
                <template slot="append">
                  <i
                    :class="[
                      'clickable far font-size__medium',
                      isShowPassword ? 'fa-eye' : 'fa-eye-slash'
                    ]"
                    @click="isShowPassword = !isShowPassword"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                class="btnSubmit margin-top-10"
              >Đăng nhập</el-button>
            </el-form-item>
          </el-form>
        </div>
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    VuePerfectScrollbar: () => import("vue-perfect-scrollbar")
  }
})
export default class element extends Vue {
  public isShowPassword: boolean = false;
  public form: object = {};
  public ruleForm: object = {
    username: [
      {
        required: true,
        message: "Trường này là bắt buộc",
        trigger: "blur"
      }
    ]
  };
}
</script>
<style lang="scss" scoped>
.pLogin {
  height: 100vh;
  width: 100%;
  background: #20a8d8 !important;
  font-family: "Nunito", sans-serif;
}

.pLogin .pHeader {
  font-size: 55px;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
}

.tt-2 {
  font-size: 20px;
  opacity: 0.8;
  width: 80%;
}

.leftSection {
  color: #ffffff;
}

.logo-lv1 {
  width: 200px;
}

.logo-lv2 {
  width: 150px;
  margin-top: -25px;
}

.rightSection {
  max-width: 500px;
  width: 40%;
  height: 100%;
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  min-width: 350px;
  position: relative;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px 0 0px 8px;
}

.scroll-pLogin {
  width: 100%;
  height: calc(100% - 20px);
  padding: 50px 38px 125px 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 18px;
  text-align: center;
  margin: 20px 0 10px 0;
  margin-top: -15px;
}

.btnSubmit {
  width: 100%;
  background-color: #039be5;
}
</style>
