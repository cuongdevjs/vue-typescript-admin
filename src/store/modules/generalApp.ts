import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { Vue } from "vue-property-decorator";
import store from "@/store";

export interface IGeneralApp {
  flagLoading: number;
  isCollapse: boolean;
}

@Module({ dynamic: true, store, name: "generalInfo" })
class General extends VuexModule implements IGeneralApp {
  public flagLoading: number = 0;
  public isCollapse: boolean = false;
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
}

export const generalInfo = getModule(General);
