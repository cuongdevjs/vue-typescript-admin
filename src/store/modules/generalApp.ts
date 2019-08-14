import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { Vue } from "vue-property-decorator";
import store from "@/store";
import auth from "@/config/auth";
import router from "@/router";
import { objInstance } from "../types";

export interface IGeneralApp {
  flagLoading: number;
  isCollapse: boolean;
  infoUser: object;
}

@Module({ dynamic: true, store, name: "generalInfo" })
class General extends VuexModule implements IGeneralApp {
  public flagLoading: number = 0;
  public isCollapse: boolean = false;
  public infoUser: object = {};
  public vm: Vue = new Vue();

  @Mutation
  private startLoading() {
    this.flagLoading++;
  }

  @Mutation
  private stopLoading() {
    this.flagLoading--;
  }

  @Mutation
  private setCollapse() {
    this.isCollapse = !this.isCollapse;
  }

  @Mutation
  private setInfoUser(payload: objInstance) {
    this.infoUser = payload;
  }

  @Action
  public SET_START_LOADING() {
    this.context.commit("startLoading");
  }

  @Action
  public SET_STOP_LOADING() {
    this.context.commit("stopLoading");
  }

  @Action
  public SET_COLLAPSE() {
    this.context.commit("setCollapse");
  }

  @Action
  public SET_INFO_USER(payload: objInstance) {
    this.context.commit("setInfoUser", payload);
  }
}

export const generalInfo = getModule(General);
