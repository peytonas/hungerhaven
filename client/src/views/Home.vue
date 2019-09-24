<template>
  <div>
    <div class="home row justify-content-center">
      <img class="col-12" alt="Hunger Haven Logo" />
      <h1>He's dead {{user.name}}</h1>
    </div>
    <div class="row justify-content-center">
      <form>
        <label for="pin">Enter A PIN</label>
        <div class="input-group">
          <input type="string" class="form-control" id="PIN" placeholder="12345" />
          <div class="input-group-append">
            <p type="submit" class="btn btn-light">🍕</p>
          </div>
        </div>
      </form>
      <button class="btn">Host An Event</button>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
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

