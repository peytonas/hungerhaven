<template>
  <div>
    <div class="home row justify-content-center">
      <img
        class="col-12"
        alt="Hunger Haven Logo"
        src="../assets/HH-Logo-Transparent-Color-Wings.png"
      />
      <h1>He's dead {{user.name}}</h1>
    </div>
    <div class="row justify-content-center">
      <form>
        <label for="pin">Enter A PIN</label>
        <div class="input-group">
          <input type="string" class="form-control" id="PIN" placeholder="12345" />
          <div class="input-group-append">
            <button type="submit" class="btn btn-outline-info">🍕</button>
          </div>
        </div>
      </form>
      <button class="btn btn-outline-primary mt-2">Host An Event</button>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 mt-2">
        <h5>My Events</h5>
      </div>
      <hr />
    </div>
    <div class="fixed-bottom">
      <button class="btn btn-danger" @click="logout">Logout</button>
    </div>
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

