import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    mapOptions: object;
    perfectScrollbarSetting: object;
    widthClient: number;
    heightClient: number;
    validationRules: object;
    getNumberRandom(min: number, max: number): number;
    getRandomColor(): void;
    $messageSuccess(message: string): void;
    $messageError(message: string): void;
    // $notify(message: string, type: string, content: string): void;
    $confirmPopup(title: string, content: string, callback?: any): void;

    $post(key: string, params?: any): any;
    $get(key: string, params?: any): any;
    $put(key: string, params?: any): any;
  }
}
