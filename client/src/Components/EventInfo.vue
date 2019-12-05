<template>
  <div class="eventInfo">
    <div class="card-body row">
      <p class="card-text col-6">
        <b>Main Course:</b>
        {{this.event.maincourse}}
        <br />
        <br />
        <b>Sides:</b>
        <br />
        <span v-for="user in this.attendees" :key="user">
          <span v-if="user.status == 'accepted'" v-for="side in user.sides" :key="side">
            • {{side}}
            <br />
          </span>
        </span>
        <br />
        <b>Drinks:</b>
        <br />
        <span v-for="user in this.attendees" :key="user">
          <span v-if="user.status == 'accepted'" v-for="drink in user.drinks" :key="drink">
            • {{drink}}
            <br />
          </span>
        </span>
        <br />
        <b>Desserts:</b>
        <br />
        <span v-for="user in this.attendees" :key="user">
          <span v-if="user.status == 'accepted'" v-for="dessert in user.desserts" :key="dessert">
            • {{dessert}}
            <br />
          </span>
        </span>
      </p>
      <p class="card-text col-6">
        <b>Time:</b>
        <br />
        {{this.event.month}}/{{this.event.day}}/{{this.event.year}}
        <br />
        {{this.event.hours}}{{this.event.minutes}} {{this.event.ampm}}
        <br />
        <b>Place:</b>
        <br />
        {{this.event.place}}
        <br />
        <b>Requested Sides:</b>
        <br />
        <span v-for="side in this.event.reqSides" :key="side">
          • {{side}}
          <br />
        </span>
        <br />
        <b>Requested Drinks:</b>
        <br />
        <span v-for="drink in this.event.reqDrinks" :key="drink">
          • {{drink}}
          <br />
        </span>
        <br />
        <b>Requested Desserts:</b>
        <br />
        <span v-for="dessert in this.event.reqDesserts" :key="dessert">
          • {{dessert}}
          <br />
        </span>
      </p>

      <p class="card-text col-6">
        <span v-for="attendee in this.event.attendees" :key="attendee.userId">
          <div
            class="attendee-button"
            data-toggle="modal"
            :data-target="'#AttendeeModal' + attendee._id"
          >
            <b>{{attendee.name}}:</b>
          </div>
          {{attendee.status}}
          <AttendeeModal :attendeeprop="attendee" />
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
              :key="allergy"
            >• {{allergy}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import io from "socket.io-client";
import AttendeeModal from "../Components/AttendeeModal";
export default {
  name: "eventInfo",

  data() {
    return {
      socket: io("localhost:3001")
    };
  },
  computed: {
    event() {
      return this.$store.state.event;
    },
    attendees() {
      return this.$store.state.event.attendees;
    },
    allergies() {
      if (this.attendees) {
        let output = [];
        for (let i = 0; i < this.attendees.length; i++) {
          for (let j = 0; j < this.attendees[i].allergies.length; j++) {
            output.push(this.attendees[i].allergies[j]);
          }
        }
        return output;
      }
      return {};
    },
    attendee() {
      for (let user in this.event.attendees) {
        if (this.event.attendees[user].userId == this.$store.state.user._id) {
          return this.event.attendees[user];
        }
      }
    }
  },
  methods: {},
  mounted() {
    this.socket.on("ADDATTENDEE", data => {
      this.$store.state.event.attendees.push(data.newAttendee);
    });
    this.socket.on("CHANGESTATUS", data => {
      let currentAttendee = this.$store.state.event.attendees.find(
        a => a._id == data.attendeeId
      );
      currentAttendee.status = data.status;
    });
    this.socket.on("BRINGSIDE", data => {
      let currentAttendee = this.$store.state.event.attendees.find(
        a => a._id == data.attendeeId
      );
      currentAttendee.sides.push(data.side);
    });
    this.socket.on("BRINGDRINK", data => {
      let currentAttendee = this.$store.state.event.attendees.find(
        a => a._id == data.attendeeId
      );
      currentAttendee.drinks.push(data.drink);
    });
    this.socket.on("BRINGDESSERT", data => {
      let currentAttendee = this.$store.state.event.attendees.find(
        a => a._id == data.attendeeId
      );
      currentAttendee.desserts.push(data.dessert);
    });
    this.socket.on("CHANGEMAINCOURSE", data => {
      this.$store.state.event.maincourse = data.maincourse;
    });
    this.socket.on("CHANGETIME", data => {
      this.$store.state.event.year = data.year;
      this.$store.state.event.month = data.month;
      this.$store.state.event.day = data.day;
      this.$store.state.event.hours = data.hours;
    });
    this.socket.on("CHANGEPLACE", data => {
      this.$store.state.event.place = data.newPlace;
    });
    this.socket.on("REQSIDE", data => {
      this.$store.state.event.reqSides.push(data.reqSide);
    });
    this.socket.on("REQDRINK", data => {
      this.$store.state.event.reqDrinks.push(data.reqDrink);
    });
    this.socket.on("REQDESSERT", data => {
      this.$store.state.event.reqDesserts.push(data.reqDessert);
    });
  },
  components: {
    AttendeeModal
  }
};
</script>


<style scoped>
.attendee-button:hover {
  cursor: pointer;
}
</style>