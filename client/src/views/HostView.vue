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
      <span class="logout-button-color" @click.prevent="cancelEvent">&times;</span>
    </div>
    <div class="row justify-content-center">
      <p>What are you providing?</p>
    </div>
    <div class="row justify-content-around">
      <div class="col-4">
        <button class="home-button" data-toggle="modal" data-target="#mainCourseModal">Main Course</button>
        <button class="home-button" data-toggle="modal" data-target="#sideModal">Sides</button>
        <button class="home-button" data-toggle="modal" data-target="#drinkModal">Drinks</button>
        <button class="home-button" data-toggle="modal" data-target="#dessertModal">Desserts</button>
      </div>
      <mainCourseModal />
      <sideModal />
      <drinkModal />
      <dessertModal />
      <timeModal />
      <placeModal />
      <div class="col-4">
        <button class="home-button" data-toggle="modal" data-target="#timeModal">Time</button>
        <button class="home-button" data-toggle="modal" data-target="#placeModal">Place</button>
        <button class="home-button" @click="reqSide">Request Side</button>
        <button class="home-button" @click="reqDrink">Request Drink</button>
        <button class="home-button" @click="reqDessert">Request Dessert</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="mt-2">
        <div class="card" style="width: 18rem;">
          <div class="card-header card-bg">Your Potluck:</div>
          <EventInfo />
          <!-- 9481618 -->
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

export default {
  name: "hostView",
  mounted() {
    this.$store.dispatch("authenticate");
    this.$store.dispatch("getEventInfo", this.$route.params);
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
        timer: 3000
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
    },
    async reqSide() {
      const sideSwal = swal.mixin({
        title: "Enter a side to request",
        input: "text",
        showCancelButton: true,
        inputValidator: value => {
          if (!value) {
            return "You need to write something!";
          }
        }
      });
      if (this.event.reqSides) {
        let sidesList = "You have requested: ";
        for (let side in this.event.reqSides) {
          if (side == 0) {
            sidesList += this.event.reqSides[side];
          } else {
            sidesList += ", " + this.event.reqSides[side];
          }
        }
        console.log(sidesList);

        // sideSwal.update({
        //   text: sidesList
        // });
      }
      let side = await sideSwal.fire();
      if (side.value) {
        this.event.reqSides.push(side.value);
        this.$store.dispatch("editEvent", {
          eventId: this.event._id,
          pin: this.event.pin,
          reqSides: this.event.reqSides
        });
      }
    },
    async reqDrink() {
      let drink = await swal.fire({
        title: "Enter a drink to request",
        input: "text",
        showCancelButton: true,
        inputValidator: value => {
          if (!value) {
            return "You need to write something!";
          }
        }
      });
      if (drink.value) {
        this.event.reqDrinks.push(drink.value);
        this.$store.dispatch("editEvent", {
          eventId: this.event._id,
          pin: this.event.pin,
          reqDrinks: this.event.reqDrinks
        });
      }
    },
    async reqDessert() {
      let dessert = await swal.fire({
        title: "Enter a dessert to request",
        input: "text",
        showCancelButton: true,
        inputValidator: value => {
          if (!value) {
            return "You need to write something!";
          }
        }
      });
      if (dessert.value) {
        this.event.reqDesserts.push(dessert.value);
        this.$store.dispatch("editEvent", {
          eventId: this.event._id,
          pin: this.event.pin,
          reqDesserts: this.event.reqDesserts
        });
      }
    }
  },
  data() {
    return {};
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
    EventInfo
  }
};
</script>
<style>
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
.logout-button-color {
  color: #ff6242;
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
</style>