<template>
  <div class="container">
    <div class="row justify-content-center">
      <img
        class="col-12 image"
        alt="Hunger Haven Logo"
        src="../assets/HH-Logo-Transparent-Color-Wings.png"
      />
    </div>
    <div class="row justify-content-center">
      <audio id="oof">
        <source src="../assets/roblox-oof.mp3" type="audio/mpeg" />
      </audio>
      <h2>Event #{{event.pin}}</h2>
      <span class="logout-button-color cursor" @click.prevent="cancelEvent">&times;</span>
    </div>
    <div class="row justify-content-center">
      <p>What are you providing?</p>
    </div>
    <div class="row justify-content-around">
      <div class="col-md-4">
        <div class="row justify-content-between">
          <div class="col-4">
            <button
              class="home-button"
              data-toggle="modal"
              data-target="#mainCourseModal"
            >Main Course</button>
            <button class="home-button" data-toggle="modal" data-target="#sideModal">Sides</button>
            <button class="home-button" data-toggle="modal" data-target="#drinkModal">Drinks</button>
            <button class="home-button" data-toggle="modal" data-target="#dessertModal">Desserts</button>
          </div>
          <mainCourseModal />
          <sideModal :takenSides="takenSides" />
          <drinkModal :takenDrinks="takenDrinks" />
          <dessertModal :takenDesserts="takenDesserts" />
          <timeModal />
          <placeModal />
          <reqSideModal />
          <reqDrinkModal />
          <reqDessertModal />
          <div class="col-4">
            <button class="home-button" data-toggle="modal" data-target="#timeModal">Time</button>
            <button class="home-button" data-toggle="modal" data-target="#placeModal">Place</button>
            <button class="home-button" data-toggle="modal" data-target="#reqSideModal">Request Side</button>
            <button
              class="home-button"
              data-toggle="modal"
              data-target="#reqDrinkModal"
            >Request Drink</button>
            <button
              class="home-button"
              data-toggle="modal"
              data-target="#reqDessertModal"
            >Request Dessert</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="mt-2">
        <div class="card">
          <div class="card-header card-bg">Your Potluck:</div>
          <EventInfo />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <button class="logout-button" @click="goHome">Go Home</button>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert2";
import mainCourseModal from "../Components/MainCourseModal";
import sideModal from "../Components/SideModal";
import drinkModal from "../Components/DrinkModal";
import dessertModal from "../Components/DessertModal";
import timeModal from "../Components/TimeModal";
import placeModal from "../Components/PlaceModal";
import EventInfo from "../Components/EventInfo";
import reqSideModal from "../Components/ReqSideModal";
import reqDrinkModal from "../Components/ReqDrinkModal";
import reqDessertModal from "../Components/ReqDessertModal";

export default {
  name: "hostView",
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
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    cancelEvent() {
      let roblox = document.getElementById("oof");
      const toast = swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000
      });
      swal
        .fire({
          title: "Are you sure?",
          text: "People are relying on you for food and entertainment...",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, cancel the potluck."
        })
        .then(result => {
          if (result.value) {
            //put the sound below
            roblox.play();
            setTimeout(() => {
              toast.fire("Cancelled Potluck!", "", "success");
              this.$store.dispatch("cancelEvent", this.event).then(res => {
                this.$router.push("/home");
              });
            }, 500);
          }
        });
    }
  },
  data() {
    return {
      takenSides: [],
      takenDesserts: [],
      takenDrinks: []
    };
  },
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
  components: {
    mainCourseModal,
    sideModal,
    drinkModal,
    dessertModal,
    timeModal,
    placeModal,
    EventInfo,
    reqSideModal,
    reqDrinkModal,
    reqDessertModal
  }
};
</script>
<style>
.cursor {
  cursor: pointer;
}

.image {
  max-height: 100px;
  max-width: 185px;
}
</style>