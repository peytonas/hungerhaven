<template>
  <div class="home row">
    <img class="col-12" alt="Hunger Haven Logo" src="../assets/HungerHavenLogo.png" />
    <h1>Welcome, {{user.name}}</h1>
    <button class="btn btn-danger" @click="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  mounted() {
    this.$store.dispatch("authenticate");
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
