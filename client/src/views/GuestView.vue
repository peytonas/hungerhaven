<template>
  <div class="row justify-content-center">
    <img
      class="col-12 image"
      alt="Hunger Haven Logo"
      src="../assets/HH-Logo-Transparent-Color-Wings.png"
    />
    <div>
      <h2>Event:{{this.event.pin}}</h2>
      <h3>Would you like to attend this event?</h3>
      <button class="register-button text-dark" @click="RSVP('accepted')">Yes</button>
      <button class="logout-button" @click="RSVP('declined')">No</button>
    </div>
    <div class="row justify-content-around">
      <div>
        <button class="home-button" @click="addSide">Sides</button>
        <button class="home-button" @click="addDrink">Drinks</button>
        <button class="home-button" @click="addDessert">Desserts</button>
        <form class="form-group mt-2" @submit="addPlusOnes">
          <input type="number" v-model="extras" class="form-control" placeholder="# of plus one's" />
          <button class="home-button mt-2" type="submit">submit</button>
        </form>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 mt-2">
        <!-- <h5>My Events</h5> -->
        <div class="card container-fluid justify-content-center" style="width: 18rem;">
          <div class="card-header card-bg">Your Potluck:</div>
          <div class="card-body row">
            <p class="card-text col-6">
              Main Course: {{this.event.maincourse}}
              <br />Sides:
              <br />Drinks:
            </p>
            <p class="card-text col-6">
              {{this.event.time}}
              <br />
              {{this.event.place}}
            </p>
          </div>
          <div class="row">
            <p class="card-text col-6">
              <span v-for="attendee in this.event.attendees">
                {{attendee.name}}: {{attendee.status}}
                <br />
              </span>
            </p>
            <div class="col-6">
              <div class="dropdown">
                <button
                  class="btn blue-grade dropdown-toggle"
                  id="menu1"
                  type="button"
                  data-toggle="dropdown"
                >
                  Allergies
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu blue-grade" role="menu" aria-labelledby="menu1">
                  <li
                    class="d-flex justify-content-center text-center"
                    role="presentation"
                    v-for="allergy in this.allergies"
                  >• {{allergy}}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <p class="card-text col-6">
              <span v-for="allergy in this.allergies">
                {{allergy}}
                <hr />
              </span>
          </p>-->
        </div>
      </div>
      <div class="row">
        <button class="logout-button" @click="goHome">Go Home</button>
      </div>
    </div>
  </div>
</template>
<script>
import mainCourseModal from "../Components/MainCourseModal";
import swal from "sweetalert2";
export default {
  name: "guestView",
  data() {
    return { extras: null };
  },
  mounted() {
    this.$store.dispatch("authenticate");
    this.$store.dispatch("getEventInfo", this.$route.params);
  },
  props: ["hostProp"],
  computed: {
    user() {
      return this.$store.state.user;
    },
    event() {
      return this.$store.state.event;
    },
    attendees() {
      return this.$store.state.event.attendees;
    },
    allergies() {
      let output = [];
      for (let i = 0; i < this.attendees.length; i++) {
        for (let j = 0; j < this.attendees[i].allergies.length; j++) {
          output.push(this.attendees[i].allergies[j]);
        }
      }
      return output;
    }
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    addMainCourse() {
      console.log("no");
    },
    addSide(side) {
      this.event.sides.push(side);
    },
    addDrink() {
      console.log("no");
    },
    addDessert() {
      console.log("no");
    },
    RSVP(msg) {
      let payload = {
        eventId: this.event._id,
        status: msg,
        allergies: []
      };
      if (msg == "accepted") {
        payload.allergies = this.user.allergies;
      }
      this.$store.dispatch("setRSVP", payload);
      const toast = swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 500
      });
      toast.fire({
        type: "success",
        title: "Event " + msg
      });
      if (msg == "declined") {
        this.goHome();
      }
    },
    addPlusOnes() {
      debugger;
      let index = this.event.attendees.findIndex(
        attendee => attendee.userId == this.user._id
      );
      this.event.attendees[index].plusOnes = this.extras;
      console.log(events.attendees);
    }
  },
  components: { mainCourseModal }
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
.home-button {
  background-color: #016fff;
  border: none;
  border-radius: 25px;
  min-width: 100px;
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
.image {
  max-height: 100px;
  max-width: 185px;
}
.blue-grade {
  background: linear-gradient(#add8e6, white) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>