<template>
  <!-- SECTION -->
  <div class="createEvent">
    <img
      class="col-12 image"
      alt="Hunger Haven Logo"
      src="../assets/HH-Logo-Transparent-Color-Wings.png"
    />
    <h2>Create your event</h2>
    <form @submit.prevent="createEvent()">
      <div class="row justify-content-center">
        <div class="col-7 mb-2">
          <label for="mainCourse">Main Course:</label>
          <input
            type="text"
            class="form-control"
            v-model="newEvent.mainCourse"
            placeholder="Main Course"
            id="mainCourse"
            required
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="form-group">
          <label for="title">Date:</label>
          <input
            class="border-left text-center"
            type="date"
            min="2019"
            max="3030"
            id="year"
            placeholder="2019"
            v-model="newEvent.year"
            required
          />
        </div>
        <!-- !SECTION -->
      </div>

      <!-- SECTION Change Time -->
      <div class="row justify-content-center">
        <div class="form-group">
          <label for="title">Time:</label>
          <input
            class="border-left text-center"
            type="time"
            min="1"
            max="12"
            id="hours"
            placeholder="12"
            v-model="newEvent.hours"
            required
          />
        </div>
      </div>
      <!-- !SECTION  -->
      <!-- SECTION -->
      <div class="row justify-content-center">
        <div class="col-7 form-group">
          <label for="title">Location:</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="add a place..."
            v-model="newEvent.place"
            required
          />
        </div>
      </div>
      <!-- !SECTION -->
      <button type="submit" class="btn home-button">Submit</button>
    </form>
  </div>
</template>


<script>
import swal from "sweetalert2";
export default {
  name: "createEvent",
  data() {
    return {
      newEvent: {}
    };
  },
  computed: {},
  methods: {
    changeMonth(month) {
      this.newEvent.month = month;
    },
    changeAMPM(ampm) {
      this.newEvent.ampm = ampm;
    },
    createEvent() {
      let pin = Math.floor(Math.random() * 9999999);
      let pinString = pin.toString();
      for (let i = pinString.length; i < 7; i++) {
        pinString = "0" + pinString;
      }
      this.newEvent.pin = pinString;
      this.$store.dispatch("createEvent", this.newEvent).then(res => {
        swal.fire({
          title: pinString,
          text: "Your event's pin is above, give it to someone to invite them."
        });
        this.$store.dispatch("setPending", {
          name: this.$store.state.user.name,
          allergies: this.$store.state.user.allergies
        });
        this.$store.dispatch("setRSVP", {
          eventId: this.newEvent._id,
          status: "accepted"
        });
        this.$store.dispatch("joinEvent", { pin: this.newEvent.pin });
        this.$router.push("/host/" + this.newEvent.pin);
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>