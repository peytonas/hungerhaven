<template>
  <div class="login row">
    <img class="col-12" alt="Hunger Haven Logo" src="../assets/HungerHavenLogo.png" />
    <h2>Welcome to Hunger Haven, please log in</h2>
    <form class="col-10 offset-1" @submit="login(creds)">
      <input
        class="form-control mb-2"
        type="text"
        name="email"
        id="email"
        placeholder="email"
        v-model="creds.email"
      />
      <input
        class="form-control mb-2"
        type="password"
        name="password"
        id="password"
        placeholder="password"
        v-model="creds.password"
      />
      <button class="btn btn-success" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      creds: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login(creds) {
      this.$store.dispatch("login", creds);
    }
  }
};
</script>