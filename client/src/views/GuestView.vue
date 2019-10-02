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
            <button class="register-button text-dark" @click="RSVP('accepted')">Yes</button>
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
export default {
  name: "guestView",
  data() {
    return { extras: 0, takenSides: [], takenDrinks: [], takenDesserts: [] };
  },
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
  props: [],
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
        this.$store.dispatch("joinEvent", { pin: this.$store.state.event.pin });
      }
      this.$store.dispatch("setRSVP", payload);
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
    },
    addPlusOnes() {
      let index = this.event.attendees.findIndex(
        attendee => attendee.userId == this.user._id
      );
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
  min-width: 30px;
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