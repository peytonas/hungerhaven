<template>
  <div>
    <div class="home row justify-content-center">
      <img
        class="col-12"
        alt="Hunger Haven Logo"
        src="../assets/HH-Logo-Transparent-Color-Wings.png"
      />
      <h2>Welcome back, {{user.name}}!</h2>
    </div>
    <div class="row justify-content-center">
      <form @submit="findEvent">
        <label for="pin">Enter Event PIN:</label>
        <div class="input-group">
          <input v-model="pin" type="string" class="form-control" id="PIN" placeholder="ex:12345" />
          <div class="input-group-append">
            <button type="submit">🍕</button>
          </div>
        </div>
      </form>
    </div>
    <div class="row justify-content-center">
      <button class="home-button" @click="goHost()">Host an Event</button>
    </div>
    <div class="row justify-content-center">
      <div>
        <!-- <h5>My Events</h5> -->
        <div class="card" style="width: 18rem;">
          <div class="card-header card-bg">My Events:</div>
          <ul class="list-group list-group-flush scroll">
            <!-- instead of 30 list items, this will be a v-for to populate each event the user is attending/hosting -->
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">examples</li>
            <li class="list-group-item">of the</li>
            <li class="list-group-item">scrollcard</li>
            <li class="list-group-item">working</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <button class="register-button text-dark" @click="goEdit()">Edit Your Profile</button>
    </div>
    <div class="row justify-content-center">
      <button class="logout-button" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return { pin: "" };
  },
  mounted() {
    this.$store.dispatch("authenticate");
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
    // pin() {
    //   return ''
    // }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    goEdit() {
      this.$router.push("/edit");
    },
    goHost() {
      this.$store.dispatch("createEvent");
      this.$router.push("/host");
    },
    addListItem() {
      //every time a user joins or creates an event, a list-item is populated pulling that event's data, and pushing it to the user's profile based on user ID.
    },
    findEvent() {
      this.$store.dispatch("getEventInfo", { pin: this.pin });
      if (this.$store.state.event.pin) {
        this.$router.push("/guest/" + this.pin);
      } else {
        console.log("ah ah ah, didn't say the magic word");
      }
    }
  }
};
</script>
<style>
.scroll {
  max-height: 170px;
  overflow-y: auto;
}
.card-bg {
  background-color: #b1dae7;
}
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
  margin-top: 4px;
  margin-bottom: 4px;
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
  margin-top: 4px;
  margin-bottom: 4px;
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
  margin-top: 4px;
  margin-bottom: 4px;
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

