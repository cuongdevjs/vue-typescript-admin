<template>
  <div class="pDisplay-drawMap">
    <popupDetail />
    <GmapMap
      ref="gmap"
      :center="coordinateCenter"
      :zoom="zoomLevel"
      :options="mapOptions"
      style="width: 100%; height: 100%;"
    >
      <!-- @paths_changed="updateEdited($event,poly.id)"
        @click="showDescPolygon($event, poly.desc)" -->
      <gmap-polygon
        v-for="poly in listPolygon"
        :key="poly.info.id"
        :paths="poly.info.paths"
        :editable="true"
        :draggable="false"
        :options="{ ...lineOptions, clickable: false }"
        :clickable="false"
        ref="polygon"
      >
      </gmap-polygon>

      <gmap-polyline
        v-for="item in listPolyline"
        :key="item.info.id"
        :options="lineOptions"
        :path="item.info.paths"
        :editable="true"
        @click="triggerPopupDetail(item.form)"
        :draggable="false"
      >
      </gmap-polyline>

      <GmapMarker
        v-for="marker in listMarker"
        :key="marker.info.id"
        @click="triggerPopupDetail(marker.form)"
        :position="marker.info.path"
        :draggable="false"
        :icon="{
          url: 'https://img.icons8.com/doodle/35/000000/fire-hydrant.png'
        }"
      >
      </GmapMarker>
    </GmapMap>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as VueGoogleMaps from "vue2-google-maps";
import EventBus from "../../EventBus";

Vue.use(VueGoogleMaps, {
  load: {
    region: "VI",
    language: "vi",
    key: "AIzaSyC_KuBMwOqPu1IryAm8wb7m28No9fE7CpQ",
    libraries: "places,drawing,visualization"
  }
});
@Component({
  components: {
    popupDetail: () => import("../../components/popupDetail.vue")
  }
})
export default class Dashboard extends Vue {
  public listMarker: Array<object> = [];
  public listPolyline: Array<object> = [];
  public listPolygon: Array<object> = [];

  public zoomLevel: Number = 12;
  public lineOptions: object = {
    fillColor: "#21AADE",
    fillOpacity: 0.3,
    strokeColor: "#f00",
    strokeOpacity: 0.8,
    strokeWeight: 5
  };

  public typeDrawing: string = "";

  public indexCheck: Number = 0;
  public idDrawing: string = "";

  public coordinateCenter: object = {
    lat: 21.15648895639665,
    lng: 105.5981367021484
  };
}
</script>

<style lang="scss" scoped></style>
