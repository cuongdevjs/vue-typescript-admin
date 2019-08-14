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
        class="pLogin-scroll"
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
                  <i
                    class="fas fa-envelope-open-text clickable font-size__medium"
                  ></i>
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
                :disabled="!isValidForm"
                @click="login"
              >
                Đăng nhập
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LoginModule } from "../../store/modules/login";
import auth from "@/config/auth";

@Component({
  components: {
    VuePerfectScrollbar: () => import("vue-perfect-scrollbar")
  }
})
export default class element extends Vue {
  public isShowPassword: boolean = false;
  public isValidForm: boolean = false;
  public form: object = {};
  public ruleForm: object = {
    username: [
      {
        required: true,
        message: "Trường này là bắt buộc",
        trigger: ["blur", "change"]
      }
    ]
  };

  public checkValidationForms(formName: string) {
    (this.$refs.form as any).validate((valid: boolean) => {
      this.isValidForm = valid;
    });
  }

  public saveToLocalStorage(res: any) {
    auth.saveToken(res.tokenkey);
    auth.set("aquaDraw_username", res.username);
    auth.set("aquaDraw_info", res.info);
  }

  public redirectToHome() {
    this.$messageSuccess("Đăng nhập thành công!");
    this.$router.push({ name: "home" });
  }

  public login() {
    this.$store.dispatch("LOGIN", this.form).then((res: any) => {
      if (res.hasOwnProperty("tokenkey")) {
        this.saveToLocalStorage(res);
        LoginModule.SET_INFO_USER(res);
        this.redirectToHome();
      }
    });
  }
}
</script>
<style lang="scss" scoped></style>
