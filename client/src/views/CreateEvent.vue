<template>
  <!-- SECTION -->
  <div class="createEvent">
    <form @submit.prevent="createEvent()">
      <div class="row justify-content-center">
        <div class="col-7 mb-2">
          <label for="mainCourse">Main Course</label>
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
            v-model="newDate"
            required
          />
        </div>
        <!-- !SECTION -->

        <!-- SECTION Change Month -->
        <!-- Month:
        <button
          class="btn home-button dropdown-toggle"
          id="menu2"
          type="button"
          data-toggle="dropdown"
          required
        >
          {{newEvent.month}}
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('01')">01</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('02')">02</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('03')">03</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('04')">04</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('05')">05</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('06')">06</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('07')">07</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('08')">08</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('09')">09</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('10')">10</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('11')">11</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" @click="changeMonth('12')">12</a>
          </li>
        </ul>-->

        <!-- !SECTION -->
        <!-- SECTION Change Day -->
        <!-- <div class="form-group">
          <label for="title">Day:</label>
          <input
            class="border-left text-center"
            type="number"
            min="1"
            max="31"
            id="days"
            placeholder="day"
            v-model="newEvent.day"
            required
          />
        </div>-->
      </div>
      <!-- !SECTION -->

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
            v-model="newTime"
            required
          />
        </div>
        <!-- <div class="form-group">
          <label for="title">Minutes:</label>
          <input
            class="border-left text-center"
            type="number"
            min="0"
            max="59"
            id="minutes"
            placeholder="59"
            v-model="newEvent.minutes"
            required
          />
        </div>
        <div>
          <button
            class="btn home-button dropdown-toggle ml-2"
            id="menu1"
            type="button"
            data-toggle="dropdown"
          >
            {{newEvent.ampm}}
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li role="presentation">
              <a role="menuitem" tabindex="-1" @click="changeAMPM('AM')">AM</a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" @click="changeAMPM('PM')">PM</a>
            </li>
          </ul>
        </div>-->
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
            v-model="newPlace"
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
      newEvent: {},
      newPlace: "",
      newDate: "",
      newTime: "",
      eventId: "",
      pin: "",
      hours: "",
      minutes: "",
      ampm: "",
      year: "",
      month: "",
      day: ""
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
      let newStr = "";
      let str = this.newTime;
      let str1 = parseInt(str.slice(0, 2));
      let str2 = parseInt(str.slice(3, 5));
      if (str2 < 10) {
        str2 = "0" + str2.toString();
      }
      if (str1 > 12) {
        str1 -= 12;

        newStr = str1.toString() + ":" + str2 + " PM";
        this.newTime = newStr;
      } else {
        this.newTime = str1.toString() + ":" + str2 + " AM";
      }
      let thisDate = this.newDate.split("-");
      this.newEvent = {
        eventId: this.$store.state.event._id,
        pin: this.$store.state.event.pin,
        hours: this.newTime,
        minutes: this.newMinutes,
        ampm: this.newAMPM,
        year: thisDate[0],
        month: thisDate[1],
        day: thisDate[2],
        place: this.newPlace
      };
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