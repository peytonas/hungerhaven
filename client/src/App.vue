<template>
  <div id="app">
    <map-elem :lat="43.5948973" :long="-116.2803016" />
    <router-view />
  </div>
</template>

<script>
import MapElem from "@/Components/Map.vue";
export default {
  name: "app",
  components: { MapElem }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
