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
      <button class="btn btn-success" @click="RSVPyes">Yes</button>
      <button class="btn btn-danger" @click="RSVPno">No</button>
    </div>
    <div class="row justify-content-around">
      <div class="col-4">
        <button class="home-button" @click="addSide">Sides</button>
        <button class="home-button" @click="addDrink">Drinks</button>
        <button class="home-button" @click="addDessert">Desserts</button>
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
        </div>
      </div>
    </div>
    <div>
      <button class="logout-button" @click="goHome">Go Home</button>
    </div>
  </div>
</template>
<script>
import mainCourseModal from "../Components/MainCourseModal";
export default {
  name: "guestView",
  data() {
    return {};
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
    RSVPyes() {
      console.log("no");
    },
    RSVPno() {
      this.$store.dispatch("setRSVPno", {
        declined: this.user.name,
        eventId: this.event._id
      });
      goHome();
    }
  },
  components: { mainCourseModal }
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