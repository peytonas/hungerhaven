<template>
  <div class="map">
    <div ref="mapElem" class="map-elem"></div>
  </div>
</template>


<script>
export default {
  name: "Event-Mappy",
  props: {
    lat: {
      type: Number,
      default: -34.397
    },
    long: {
      type: Number,
      default: 150.644
    }
  },
  mounted() {
    this.initMap();
  },
  data() {
    return {
      map: {}
    };
  },
  computed: {},
  methods: {
    initMap() {
      this.map = new google.maps.Map(this.$refs.mapElem, {
        center: { lat: this.lat, lng: this.long },
        zoom: 8
      });
    }
  },
  components: {}
};
</script>


<style scoped>
.map-elem {
  height: 25vh;
}
</style>