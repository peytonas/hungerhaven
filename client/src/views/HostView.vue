<template>
  <div>
    <img class="col-12" alt="Hunger Haven Logo" src="../assets/HH-Logo-Transparent-Color-Wings.png" />
    <div>
      <h1>Your Event</h1>
      <p>Event #8675309</p>
      <h3>What would you like to make?</h3>
    </div>
    <div>
      <button class="btn btn-info" @click="goHome">Go Home</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "hostView",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("authenticate");
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style>
</style>