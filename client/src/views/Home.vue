<template>
  <div class="home row">
    <img class="col-12" alt="Hunger Haven Logo" src="../assets/HungerHavenLogo.png" />
    <HelloWorld msg="Welcome to Your Worst Nightmare" />
    <button class="btn btn-danger" @click="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
