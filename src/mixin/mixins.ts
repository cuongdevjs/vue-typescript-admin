import { Vue, Component } from "vue-property-decorator";
import { objInstance } from "../store/types/index";
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
    this.$message({
      message: message,
      type: "success",
      showClose: true
    });
  }

  public $messageError(message: string) {
    this.$message({
      message: message,
      type: "error",
      showClose: true
    });
  }

  private hasKey<O>(obj: O, key: string | number | symbol): key is keyof O {
    return key in obj;
  }

  public $notification(message: string, type: string, content: string) {
    let config: any = {
      title: message,
      message: content,
      type: type
    };
    this.$notify(config);
  }

  public $confirmPopup(title: string, content: string, callback?: any) {
    this.$confirm(content, title, {
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Huỷ bỏ",
      type: "warning"
    })
      .then(() => {
        callback();
      })
      .catch(() => {});
  }
}
