<template>
  <div>
    <div class="home row justify-content-center">
      <img
        class="col-12"
        alt="Hunger Haven Logo"
        src="../assets/HH-Logo-Transparent-Color-Wings.png"
      />
      <h1>Welcome back, {{user.name}}!</h1>
      <button class="register-button text-dark" @click="goEdit()">Edit Your Profile</button>
    </div>
    <div class="row justify-content-center">
      <form>
        <label for="pin">Enter Event PIN:</label>
        <div class="input-group">
          <input type="string" class="form-control" id="PIN" placeholder="ex:12345" />
          <div class="input-group-append">
            <button type="submit">🍕</button>
          </div>
        </div>
      </form>
      <button class="home-button mt-2">Host an Event</button>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 mt-2">
        <h5>My Events</h5>
      </div>
      <hr />
    </div>
    <div class="fixed-bottom">
      <button class="logout-button mb-2" @click="logout">Logout</button>
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
    },
    goEdit() {
      this.$router.push("/edit");
    }
  }
};
</script>
<style>
.register-button {
  background-color: #ffe501;
  border: none;
  border-radius: 25px;
  color: white;
  padding: 8px 16px;
  text-align: center;
  font-size: 12px;
  transition: 0.1s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}
.register-button:hover {
  background-color: #ffef5c;
}
.register-button:active {
  background-color: #ffe501;
}
.register-button:focus {
  outline: 0;
}
.logout-button {
  background-color: #ff6242;
  border: none;
  border-radius: 25px;
  color: white;
  padding: 8px 16px;
  text-align: center;
  font-size: 12px;
  transition: 0.1s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}
.logout-button:hover {
  background-color: #ff7256;
}
.logout-button:active {
  background-color: #ff6242;
}
.logout-button:focus {
  outline: 0;
}
.home-button {
  background-color: #016fff;
  border: none;
  border-radius: 25px;
  color: white;
  padding: 8px 16px;
  text-align: center;
  font-size: 12px;
  transition: 0.1s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}
.home-button:hover {
  background-color: #4595fe;
}
.home-button:active {
  background-color: #016fff;
}
.home-button:focus {
  outline: 0;
}
</style>

