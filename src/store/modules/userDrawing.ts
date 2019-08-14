import {
  VuexModule,
  Module,
  getModule,
  Action,
  Mutation
} from "vuex-module-decorators";
import { Vue } from "vue-property-decorator";
import store from "@/store";
import { objInstance } from "../types";

export interface IDrawing {
  listNodes: Array<objInstance>;
  listLines: Array<objInstance>;
  isShowPopupDetail: boolean;
}

@Module({ dynamic: true, store, name: "Drawing" })
class Drawing extends VuexModule implements IDrawing {
  public listNodes: Array<objInstance> = [];
  public listLines: Array<objInstance> = [];
  public isShowPopupDetail: boolean = false;
  public vm = new Vue();

  @Mutation
  private setListNodes(payload: Array<objInstance>) {
    this.listNodes = payload;
  }

  @Mutation
  private setListLines(payload: Array<objInstance>) {
    this.listLines = payload;
  }

  @Mutation
  private setIsShowPopupDetail(payload: boolean) {
    this.isShowPopupDetail = payload;
  }

  @Action({ rawError: true })
  GET_LIST_NODES(payload: objInstance) {
    this.vm
      .$post("Draw/ViewAllNode", JSON.stringify(payload))
      .then((res: any) => {
        this.context.commit("setListNodes", res);
      });
  }

  @Action({ rawError: true })
  ADD_NODE(payload: objInstance) {
    return this.vm.$post("Draw/AddNode", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  REMOVE_NODE(payload: objInstance) {
    return this.vm.$post("Draw/RemoveNode", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  DETAIL_NODE(payload: objInstance) {
    return this.vm.$post("Draw/ViewNode", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  UPDATE_NODE(payload: objInstance) {
    return this.vm.$post("Draw/EditNode", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  GET_LIST_LINES(payload: objInstance) {
    this.vm
      .$post("Draw/ViewAllLine", JSON.stringify(payload))
      .then((res: any) => {
        this.context.commit("setListLines", res);
      });
  }

  @Action({ rawError: true })
  ADD_LINE(payload: objInstance) {
    return this.vm.$post("Draw/AddLine", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  REMOVE_LINE(payload: objInstance) {
    return this.vm.$post("Draw/RemoveLine", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  DETAIL_LINE(payload: objInstance) {
    return this.vm.$post("/Draw/ViewLine", JSON.stringify(payload));
  }

  @Action({ rawError: true })
  UPDATE_LINE(payload: objInstance) {
    return this.vm.$post("Draw/EditLine", JSON.stringify(payload));
  }

  @Action
  SET_IS_SHOW_POPUP_DETAIL(payload: boolean) {
    this.context.commit("setIsShowPopupDetail", payload);
  }
}

export const DrawingModule = getModule(Drawing);
