<template>
  <div class="map">
    <div v-show="lat != 0 && long != 0" ref="mapElem" class="map-elem"></div>
  </div>
</template>


<script>
export default {
  name: "Event-Mappy",
  props: {
    lat: {
      type: Number,
      default: 0
    },
    long: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.initMap();
  },
  watch: {
    lat: function(newLat) {
      this.initMap();
    },
    long: function(newLong) {
      this.initMap();
    }
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
        zoom: 14
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