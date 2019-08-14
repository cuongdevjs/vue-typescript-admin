import { Vue, Component } from "vue-property-decorator";
import {
  checkNotSpecialCharacter,
  allowOnlyTypeNumber,
  checkEmail
} from "./validateForm";

@Component
export default class Mixin extends Vue {
  public mapOptions: object = {
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: true,
    clickableIcons: false,
    fullscreenControl: true,
    disableDefaultUi: true
  };

  public perfectScrollbarSetting: object = {
    maxScrollbarLength: 750
  };
  public widthClient: number = 0;
  public heightClient: number = 0;
  public validationRules: object = {
    emailRequire: {
      validateTrigger: ["change", "blur"],
      rules: [
        { required: true, message: "Field not empty" },
        { validator: checkEmail }
      ]
    },
    textRequire: {
      validateTrigger: ["change", "blur"],
      rules: [
        { required: true, message: "Field not empty" },
        { validator: checkNotSpecialCharacter }
      ]
    },
    numberRequire: {
      validateTrigger: ["change", "blur"],
      rules: [
        { required: true, message: "Field not empty" },
        { validator: allowOnlyTypeNumber }
      ]
    },
    inputRequire: {
      validateTrigger: ["change", "blur"],
      rules: [{ required: true, message: "Field not empty" }]
    },
    email: {
      validateTrigger: ["change", "blur"],
      rules: [{ required: false }, { validator: checkEmail }]
    },
    text: {
      validateTrigger: ["change", "blur"],
      rules: [{ required: false }, { validator: checkNotSpecialCharacter }]
    },
    number: {
      validateTrigger: ["change", "blur"],
      rules: [{ required: false }, { validator: allowOnlyTypeNumber }]
    }
  };

  public getNumberRandom(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  public $messageSuccess(message: string) {
    this.$message.success(message);
  }

  public $messageError(message: string) {
    this.$message.error(message);
  }

  private hasKey<O>(obj: O, key: string | number | symbol): key is keyof O {
    return key in obj;
  }

  // public $notify(message: string, type: string, content: string) {
  //   let config: any = {
  //     message: message,
  //     description: content,
  //     duration: 3.5
  //   };
  //   if (this.hasKey(this.$notification, type)) {
  //     this.$notification[type](config);
  //   }
  // }

  public $confirmPopup(title: string, content: string, callback?: any) {
    let config: any = {
      title: title,
      content: content,
      okText: "Submit",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        callback();
      },
      onCancel() {
        () => {};
      }
    };
    this.$confirm(config);
  }
}
