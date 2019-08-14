import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import {Vue} from 'vue-property-decorator';
import store from '@/store';
import { objInstance } from '../types/index';
import auth from '@/config/auth';
import router from '@/router';


export interface ILogin {
  isLogged: boolean
}


@Module({dynamic: true, store, name: "login"});
class Login extends VuexModule implements ILogin {
  public isLogged: boolean = false;
  public vm = new Vue();

  @Mutation
  setLogged(payload: boolean) {
    this.isLogged = payload;
  }

  @Mutation
  logout() {
    auth.removeToken();
    router.push({name: "login"})
  }

  @Action
  SET_LOGGED(payload: boolean) {
    this.context.commit("setLogged", payload)
  }

  @Action({rawError: true})
  LOGIN(payload: objInstance) {
    return this.vm.$post("Account/Login", JSON.stringify(payload));
  }


  @Action({rawError: true})
  CHANGE_PW(payload: objInstance) {
    return this.vm.$post('Account/UserChangePassword', JSON.stringify(payload));
  }

  @Action({rawError: true})
  CREATE_USER(payload: objInstance) {
    return this.vm.$post('Account/CreateUser', JSON.stringify(payload));
  }

  @Action({rawError: true})
  REMOVE_USER(payload: objInstance) {
    return this.vm.$post('Account/RemoveUser', JSON.stringify(payload));
  }

  @Action
  LOGOUT() {
    this.context.commit("logout");
  }
}


export const LoginModule = getModule(Login);
