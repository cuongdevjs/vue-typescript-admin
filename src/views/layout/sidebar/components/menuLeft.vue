<template>
  <VuePerfectScrollbar class="pSidebar-drawMap">
    <el-collapse v-model="itemActive">
      <el-collapse-item
        v-for="(category, $index) in listCategories"
        :key="$index"
        :name="category.name"
      >
        <template slot="title">
          <div class="title">
            <el-checkbox
              v-model="category.selected"
              @change="showListInMap(category.key, category.selected)"
            ></el-checkbox>
            <div class="name">
              <i class="fad fa-draw-square"></i>
              {{ category.name }}
            </div>
          </div>
        </template>
        <div class="category">
          <div
            v-for="(item, index) in category.list"
            :key="index"
            class="item clickable flex-row__between"
            @click="triggerPopupDetail(item.form)"
          >
            <div class="overview flex-row__left">
              <span class="dot"></span>
              <span>{{ item.form.name }}</span>
            </div>
            <i class="option fad fa-pencil"></i>
          </div>
        </div>
        <div class="action">
          <el-button
            type="primary"
            size="mini"
            class="btnAdd"
            @click="addNew(category.key)"
          >
            <i class="fal fa-plus" />
            &nbsp;Thêm
          </el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </VuePerfectScrollbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    VuePerfectScrollbar: () => import("vue-perfect-scrollbar")
  }
})
export default class menuLeft extends Vue {
  public listCategories: any = [
    {
      key: "duongong",
      name: "Đường ống",
      selected: false,
      list: [
        {
          info: {
            id: "_2gah82okz",
            paths: [
              { lat: 21.10546336209958, lng: 105.78726572990149 },
              { lat: 21.079837760137817, lng: 105.78486247062415 },
              { lat: 21.06542141699082, lng: 105.78486247062415 },
              { lat: 21.051324085957972, lng: 105.78177256583899 },
              { lat: 21.037866297189016, lng: 105.78039927482337 },
              { lat: 21.022484478344207, lng: 105.77902598380774 },
              { lat: 21.007421576134377, lng: 105.78966898917884 },
              { lat: 20.99460088691027, lng: 105.7989387035343 },
              { lat: 20.981137978269384, lng: 105.8099250316593 },
              { lat: 20.971841452296957, lng: 105.81644816398352 },
              { lat: 20.965429718174452, lng: 105.83086771964759 },
              { lat: 20.9631855462731, lng: 105.8483771800968 },
              { lat: 20.9631855462731, lng: 105.86794657706946 },
              { lat: 20.965429718174452, lng: 105.87721629142493 },
              { lat: 20.97536778884558, lng: 105.88545603751868 },
              { lat: 20.98594629923397, lng: 105.89541239738196 }
            ]
          },
          form: {
            id: "duongong1",
            name: "Đường ống 1",
            length: 100,
            status: "Good",
            diameter: 120,
            constructionUnit: "Nhà máy Vĩnh Phúc"
          }
        },
        {
          info: {
            id: "_xhoefxlrn",
            paths: [
              { lat: 21.166738896463276, lng: 105.48154808807226 },
              { lat: 21.156173239517525, lng: 105.51210381316992 },
              { lat: 21.150409836063933, lng: 105.54815270233007 },
              { lat: 21.155212687853684, lng: 105.58145500945898 },
              { lat: 21.161936418622435, lng: 105.60583092498632 },
              { lat: 21.170260614489997, lng: 105.62437035369726 },
              { lat: 21.16737921506655, lng: 105.63467003631445 },
              { lat: 21.15201080396896, lng: 105.64599968719335 },
              { lat: 21.133118280107006, lng: 105.67552544402929 },
              { lat: 21.13952279538182, lng: 105.69303490447851 },
              { lat: 21.138882356309086, lng: 105.70539452361913 },
              { lat: 21.13087663438017, lng: 105.71569420623632 },
              { lat: 21.112301694658676, lng: 105.72633721160742 },
              { lat: 21.099490036416057, lng: 105.74830986785742 }
            ]
          },
          form: {
            id: "duongong2",
            name: "Đường ống 2",
            length: 10042,
            status: "Medium",
            diameter: 1200,
            constructionUnit: "Nhà máy Vĩnh Phúc 2"
          }
        },
        {
          info: {
            id: "_rhdh1kd9h",
            paths: [
              { lat: 21.13145594624905, lng: 105.51169491932706 },
              { lat: 21.107436280698927, lng: 105.5364141576083 },
              { lat: 21.100069470850045, lng: 105.55667020008877 },
              { lat: 21.090780363560505, lng: 105.58447934315518 },
              { lat: 21.085655090185142, lng: 105.60919858143643 },
              { lat: 21.084053405999313, lng: 105.62602139637784 },
              { lat: 21.08789741904157, lng: 105.65520383045987 },
              { lat: 21.084373744217558, lng: 105.6627569310458 },
              { lat: 21.084053405999313, lng: 105.66653348133877 },
              { lat: 21.078927900603045, lng: 105.68129635975674 },
              { lat: 21.068676359633045, lng: 105.70876218006924 },
              { lat: 21.06098724013782, lng: 105.72215176747159 }
            ]
          },
          form: {
            id: "duongong4",
            name: "Đường ống 4",
            length: 1200,
            status: "Good",
            diameter: 1120,
            constructionUnit: "Nhà máy nước Vĩnh Phúc"
          }
        },
        {
          info: {
            id: "_pwu8viixg",
            paths: [
              { lat: 21.25465561959485, lng: 105.29883481190518 },
              { lat: 21.248896057871402, lng: 105.30879117176846 },
              { lat: 21.245056224972064, lng: 105.31977749989346 },
              { lat: 21.236736243816356, lng: 105.33900357411221 },
              { lat: 21.23033593880172, lng: 105.35685635731534 },
              { lat: 21.22841579313097, lng: 105.37608243153409 },
              { lat: 21.21977482830603, lng: 105.39221860096768 },
              { lat: 21.214333961211754, lng: 105.40492154286221 },
              { lat: 21.209212961912343, lng: 105.4155645482333 },
              { lat: 21.197690064106144, lng: 105.42380429432706 },
              { lat: 21.188086962650402, lng: 105.43616391346768 },
              { lat: 21.17592213844984, lng: 105.45092679188565 }
            ]
          },
          form: {
            id: "duongong3",
            name: "Đường ống 3",
            length: 1300,
            status: "Good",
            diameter: 4120,
            constructionUnit: "Nhà máy Vĩnh Phúc 3"
          }
        }
      ]
    },
    {
      key: "khuvuc",
      name: "Khu vực",
      selected: false,
      list: [
        {
          info: {
            id: "_nijz1atrs",
            paths: [
              { lat: 21.192209133167914, lng: 105.5462531566593 },
              { lat: 21.179404384386206, lng: 105.73164744376868 },
              { lat: 21.251096679780417, lng: 105.67122263908118 }
            ]
          },
          form: {
            id: "khuvuc1",
            name: "Khu vực 1",
            length: 1200,
            status: "Good",
            diameter: 2120,
            constructionUnit: "Nhà máy Vĩnh Phúc 1"
          }
        },
        {
          info: {
            id: "_33mrbhbph",
            paths: [
              { lat: 21.125612336854847, lng: 105.3320197582218 },
              { lat: 21.18324592547798, lng: 105.4748420238468 },
              { lat: 20.911532189179674, lng: 105.42815012931555 }
            ]
          },
          form: {
            id: "khuvuc2",
            name: "Khu vực 2",
            length: 12020,
            status: "Good",
            diameter: 21220,
            constructionUnit: "Nhà máy Vĩnh Phúc 2"
          }
        },
        {
          info: {
            id: "_dy9lp7x8v",
            paths: [
              { lat: 20.889722392139817, lng: 105.51054759025305 },
              { lat: 20.907683631856777, lng: 105.77559275626868 },
              { lat: 20.789613326710572, lng: 105.61629099845618 }
            ]
          },
          form: {
            id: "khuvuc3",
            name: "Khu vực 3",
            length: 11200,
            status: "Good",
            diameter: 12120,
            constructionUnit: "Nhà máy Vĩnh Phúc 3"
          }
        }
      ]
    },
    {
      key: "trambom",
      name: "Trạm bơm",
      selected: false,
      list: [
        {
          info: {
            id: "_6wlt6oy1b",
            path: { lat: 21.068883253130444, lng: 105.74027232226558 }
          },
          form: {
            id: "van1",
            name: "Van 1",
            length: 1200,
            status: "Good",
            diameter: 2120,
            constructionUnit: "Nhà máy Vĩnh Phúc 1"
          }
        },
        {
          info: {
            id: "_9hmiz0vp0",
            path: { lat: 21.027229161930382, lng: 105.76979807910152 }
          },
          form: {
            id: "van2",
            name: "Van 2",
            length: 11200,
            status: "Good",
            diameter: 12120,
            constructionUnit: "Nhà máy Vĩnh Phúc 2"
          }
        },
        {
          info: {
            id: "_9ieucp298",
            path: { lat: 21.000308016753216, lng: 105.66886118945308 }
          },
          form: {
            id: "van3",
            name: "Van 3",
            length: 1200,
            status: "Good",
            diameter: 2120,
            constructionUnit: "Nhà máy Vĩnh Phúc 3"
          }
        }
      ]
    }
  ];
  public itemActive: Array<any> = [];
}
</script>

<style lang="scss" scoped>
.el-form-item__error {
  position: relative;
  margin: 10px 0 0;
  float: right;
  background: rgba(229, 77, 66, 0.2);
  border-radius: 4px;
  padding: 4px 6px;
}

.title {
  display: flex;
  margin-left: 8px;
  .name {
    i {
      margin: 0 4px 0 8px;
    }
    .dot {
      display: none;
      width: 10px;
      height: 10px;
      background-color: var(--color-blue);
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}

.option {
  position: relative;
  font-size: 18px;
  color: var(--color-blue);
  transition: all 0.25s ease-out;
  opacity: 0;
  transform: scale(0.5, 0.5);
}

.item:hover .option {
  opacity: 1;
  transform: none;
}

.action {
  margin: 8px;

  .btnAdd {
    border-radius: 2px;
    padding: 0 12px;
    height: 24px;
    display: flex;
    align-items: center;
    transition: all 0.25s ease-out;
    border: none;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    color: var(--color-blue);

    &:hover {
      background: var(--color-blue);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
      transform: translate(0, 2px);
      color: white;
    }
  }
}

.category {
  padding: 0 8px;

  .item {
    padding: 0 8px;
    height: 32px;
    font-size: 13px;
    transition: all 0.15s ease-in-out;
    margin-bottom: 2px;
    border-radius: 4px;
    border: 1px solid var(--color-light-2);
    background-color: var(--color-light-2);

    &:hover {
      background-color: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      z-index: 10;
      border-color: transparent;
    }
  }
}
</style>
