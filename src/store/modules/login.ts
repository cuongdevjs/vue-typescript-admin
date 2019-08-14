import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { Vue } from "vue-property-decorator";
import store from "@/store";
import { objInstance } from "../types/index";
import auth from "@/config/auth";
import router from "@/router";

export interface ILogin {
  isLogged: boolean;
  infoUser: object;
}

@Module({ dynamic: true, store, name: "login" })
class Login extends VuexModule implements ILogin {
  public isLogged: boolean = false;
  public infoUser: object = {};

  public vm = new Vue();

  @Mutation
  private setLogged(payload: boolean) {
    this.isLogged = payload;
  }

  @Mutation
  private logout() {
    auth.removeToken();
    router.push({ name: "login" });
  }

  @Mutation
  private setInfoUser(payload: objInstance) {
    this.infoUser = payload;
  }

  @Action
  public SET_LOGGED(payload: boolean) {
    this.context.commit("setLogged", payload);
  }

  @Action({ rawError: true })
  public LOGIN(payload: objInstance) {
    return this.vm.$post("Account/Login", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  public CHANGE_PW(payload: objInstance) {
    return this.vm.$post("Account/UserChangePassword", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  public CREATE_USER(payload: objInstance) {
    return this.vm.$post("Account/CreateUser", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  public REMOVE_USER(payload: objInstance) {
    return this.vm.$post("Account/RemoveUser", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  public VIEW_ALL_ACCOUNT_ADMIN(payload: objInstance) {
    return this.vm.$post(
      "Account/ViewAll",
      JSON.stringify({
        tokenkey: auth.getToken()
      })
    );
  }

  @Action
  public LOGOUT() {
    this.context.commit("logout");
  }

  @Action
  public SET_INFO_USER(payload: objInstance) {
    this.context.commit("setInfoUser", payload);
  }
}

export const LoginModule = getModule(Login);
