import Vue from "vue";
import Vuex from "vuex";
import { IGeneralApp } from "./modules/generalApp";
import { ILogin } from "./modules/login";
import { IDrawing } from "./modules/userDrawing";

Vue.use(Vuex);

export interface IRootState {
  IGeneralApp: IGeneralApp;
  ILogin: ILogin;
  IDrawing: IDrawing;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({});
