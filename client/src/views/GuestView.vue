<template>
  <div class="row justify-content-center">
    <div class="col">
      <div class="row justify-content-center">
        <img
          class="col-12 image"
          alt="Hunger Haven Logo"
          src="../assets/HH-Logo-Transparent-Color-Wings.png"
        />
        <div class="col">
          <h2>Event:{{this.event.pin}}</h2>
          <h5>Would you like to attend this event?</h5>
          <div class="row justify-content-center">
            <button class="register-button" @click="RSVP('accepted')">Yes</button>
            <button class="logout-button" @click="RSVP('declined')">No</button>
          </div>
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="col-2">
          <button class="home-button" data-toggle="modal" data-target="#sideModal">Sides</button>
        </div>
        <div class="col-2">
          <button class="home-button" data-toggle="modal" data-target="#drinkModal">Drinks</button>
        </div>
        <div class="col-2">
          <button class="home-button" data-toggle="modal" data-target="#dessertModal">Desserts</button>
        </div>
        <div class="col-2">
          <button class="home-button" data-toggle="modal" data-target="#plusOneModal">+1s</button>
        </div>
      </div>
      <sideModal :takenSides="takenSides" />
      <drinkModal :takenDrinks="takenDrinks" />
      <dessertModal :takenDesserts="takenDesserts" />
      <plusOneModal />
      <div class="row justify-content-center">
        <div class="col-12 mt-2">
          <div class="card container-fluid justify-content-center" style="width: 18rem;">
            <div class="card-header card-bg">Your Potluck:</div>
            <EventInfo />
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-2">
        <a :href="`https://www.google.com/maps/search/${this.address}`" class="col">
          <map-elem :lat="coords.lat" :long="coords.lng" />
        </a>
      </div>
      <div class="row justify-content-center mt-2">
        <button class="logout-button" @click="goHome">Go Home</button>
      </div>
    </div>
  </div>
</template> 
<script>
import MapElem from "@/Components/Map.vue";
import mainCourseModal from "../Components/MainCourseModal";
import plusOneModal from "../Components/PlusOneModal";
import sideModal from "../Components/SideModal";
import drinkModal from "../Components/DrinkModal";
import dessertModal from "../Components/DessertModal";
import swal from "sweetalert2";
import EventInfo from "../Components/EventInfo";
import Map from "@/Components/Map.vue";
import io from "socket.io-client";
export default {
  name: "guestView",
  data() {
    return {
      extras: 0,
      takenSides: [],
      takenDrinks: [],
      takenDesserts: [],
      socket: io("localhost:3001")
    };
  },
  props: [],
  mounted() {
    this.$store.dispatch("authenticate");
    this.$store.dispatch("getEventInfo", this.$route.params).then(res => {
      this.event.attendees.forEach(user => {
        user.sides.forEach(side => {
          this.takenSides.push(side);
        });
      });
      this.event.attendees.forEach(user => {
        user.drinks.forEach(drink => {
          this.takenDrinks.push(drink);
        });
      });
      this.event.attendees.forEach(user => {
        user.desserts.forEach(dessert => {
          this.takenDesserts.push(dessert);
        });
      });
    });
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
    event() {
      return this.$store.state.event;
    },
    address() {
      if (this.$store.state.event.place) {
        let eventPlace = this.$store.state.event.place.replace(/ /g, "+");
        return eventPlace;
      }
    },
    time() {
      let ampm = this.$store.state.event.ampm;
      let hours = this.$store.state.event.hours;
      let minutes = this.$store.state.event.minutes;
      let month = this.$store.state.event.month;
      let day = this.$store.state.event.day;
      let year = this.$store.state.event.year;
      if (ampm == "PM") {
        hours += 12;
      }
      let EventDate = new Date(year, month - 1, day, hours, minutes);
      let CurrentDate = new Date();
    },
    coords() {
      let geo = this.$store.state.coords.geometry;
      if (geo) {
        return this.$store.state.coords.geometry.location;
      }
      return {};
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
    },
    attendee() {
      for (let user in this.event.attendees) {
        if (this.event.attendees[user].userId == this.$store.state.user._id) {
          return this.event.attendees[user];
        }
      }
    }
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    RSVP(msg) {
      let ampm = this.$store.state.event.ampm;
      let hours = this.$store.state.event.hours;
      let minutes = this.$store.state.event.minutes;
      let month = this.$store.state.event.month;
      let day = this.$store.state.event.day;
      let year = this.$store.state.event.year;
      if (ampm == "PM") {
        hours = parseInt(hours, 10);
        hours += 12;
        hours = hours.toString();
      }
      let EventDate = new Date(year, month - 1, day, hours, minutes);
      let CurrentDate = new Date();
      if (CurrentDate < EventDate) {
        let payload = {
          eventId: this.event._id,
          status: msg,
          attendeeId: this.attendee._id,
          allergies: []
        };
        if (msg == "accepted") {
          payload.allergies = this.user.allergies;
          this.$store.dispatch("joinEvent", {
            pin: this.$store.state.event.pin
          });
        }
        this.$store.dispatch("setRSVP", payload);
        this.socket.emit("SEND_CHANGESTATUS", payload);
        const toast = swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000
        });
        toast.fire({
          type: "success",
          title: "Event " + msg
        });
        if (msg == "declined") {
          this.goHome();
        }
      } else {
        const RSVPExpiredToast = swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });
        RSVPExpiredToast.fire({
          type: "warning",
          title: "Event Expired"
        });
      }
    },
    addPlusOnes() {
      debugger;
      let index = this.event.attendees.findIndex(
        attendee => attendee.userId == this.user._id
      );
      debugger;
      let plusOnes = this.event.attendees[index].plusOnes;
      plusOnes = this.extras;
      let payload = {
        plus: plusOnes,
        hostId: this.event.hostId
      };
      this.$store.dispatch("addPlusOnes", payload);
    }
  },
  components: {
    mainCourseModal,
    sideModal,
    drinkModal,
    dessertModal,
    EventInfo,
    MapElem,
    plusOneModal
  }
};
</script>
<style>
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