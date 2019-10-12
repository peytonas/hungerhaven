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
      <form class="mb-2" @submit.prevent="findEvent">
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
      <div>
        <!-- <h5>My Events</h5> -->
        <div class="card" style="width: 18rem;">
          <div class="card-header card-bg">My Events:</div>
          <ul class="list-group list-group-flush scroll">
            <!-- instead of 30 list items, this will be a v-for to populate each event the user is attending/hosting -->
            <ListEvent
              class="list-group-item"
              v-for="event in user.events"
              :eventProp="event"
              :key="event"
            />
          </ul>
        </div>
        <div class="row justify-content-center">
          <button class="home-button mt-2" @click="goHost()">Host an Event</button>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <button class="register-button" @click="goEdit()">Edit Your Profile</button>
    </div>
    <div class="row justify-content-center">
      <button class="logout-button" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ListEvent from "../Components/ListEvent.vue";
export default {
  name: "home",
  components: { ListEvent },
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
      this.$router.push("/create");
    },
    addListItem() {
      //every time a user joins or creates an event, a list-item is populated pulling that event's data, and pushing it to the user's profile based on user ID.
    },
    findEvent() {
      this.$store.dispatch("getEventInfo", { pin: this.pin }).then(res => {
        if (this.$store.state.event.pin) {
          this.$store.dispatch("setPending", {
            eventId: this.$store.state.event._id,
            name: this.user.name,
            allergies: [],
            phoneNumber: this.user.phoneNumber
          });
          this.$router.push("/guest/" + this.pin);
        } else {
          console.log("Ah ah ah, you didn't say the magic word.");
        }
      });
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
  background-color: #ffe8a0;
  color: black;
}
</style>

