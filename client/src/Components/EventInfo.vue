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
        <span v-for="user in this.attendees">
          <span v-if="user.status == 'accepted'" v-for="side in user.sides">
            • {{side}}
            <br />
          </span>
        </span>
        <br />
        <b>Drinks:</b>
        <br />
        <span v-for="user in this.attendees">
          <span v-if="user.status == 'accepted'" v-for="drink in user.drinks">
            • {{drink}}
            <br />
          </span>
        </span>
        <br />
        <b>Desserts:</b>
        <br />
        <span v-for="user in this.attendees">
          <span v-if="user.status == 'accepted'" v-for="dessert in user.desserts">
            • {{dessert}}
            <br />
          </span>
        </span>
      </p>
      <p class="card-text col-6">
        <b>Time:</b>
        <br />
        {{this.event.date}}
        <br />
        {{this.event.hours}}:{{this.event.minutes}} {{this.event.ampm}}
        <br />
        <b>Place:</b>
        <br />
        {{this.event.place}}
        <br />
        <b>Requested Sides:</b>
        <br />
        <span v-for="side in this.event.reqSides">
          • {{side}}
          <br />
        </span>
        <br />
        <b>Requested Drinks:</b>
        <br />
        <span v-for="drink in this.event.reqDrinks">
          • {{drink}}
          <br />
        </span>
        <br />
        <b>Requested Desserts:</b>
        <br />
        <span v-for="dessert in this.event.reqDesserts">
          • {{dessert}}
          <br />
        </span>
      </p>

      <p class="card-text col-6">
        <span v-for="attendee in this.event.attendees" :key="attendee.userId">
          <div class="attendee-button" data-toggle="modal" data-target="#attendeeModal">
            <b>{{attendee.name}}:</b>
            <AttendeeModal :attendeeprop="attendee" />
          </div>
          {{attendee.status}}
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
          <button>Hi</button>
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
  methods: {
    clickButton(e) {
      e.preventDefault();
    }
  },
  mounted() {},
  components: {
    AttendeeModal
  }
};
</script>


<style scoped>
</style>