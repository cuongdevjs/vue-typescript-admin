import axios from "axios";
import { Vue, Component } from "vue-property-decorator";

@Component
export default class httpService extends Vue {
  public $post(url: string, params?: any): any {
    return axios.post(url, params);
  }

  public $get(url: string, params?: any): any {
    return axios.get(url, {
      params: params
    });
  }

  public $put(url: string, params?: any): any {
    return axios.put(url, params);
  }
}
