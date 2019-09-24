<template>
  <div class="home row">
    <img class="col-12" alt="Hunger Haven Logo" src="../assets/HH-Logo-Transparent-Color-Wings.png" />
    <h1>Welcome, {{user.name}}</h1>
    <button class="btn btn-info col-4 offset-4">Edit Profile</button>
    <button class="btn btn-danger fixed-bottom" @click="logout">Logout</button>
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
