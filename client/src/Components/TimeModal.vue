<template>
  <div id="timeModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add a time</h5>
          <button class="logout-button" data-dismiss="modal">&times;</button>
        </div>
        <form>
          <div class="form-group">
            <label for="title">Date:</label>
            <input
              class="border-left text-center ml-2 mt-2"
              type="date"
              min="2019"
              max="3030"
              id="hours"
              placeholder="2019"
              v-model="newDate"
              required
            />
          </div>
          <!-- <div class="modal-body">
            Month:
            <button
              class="btn btn-primary dropdown-toggle"
              id="menu2"
              type="button"
              data-toggle="dropdown"
              required
            >
              {{this.newMonth}}
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
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
            </ul>
          </div>-->
          <div class="form-group">
            <label for="title">Time:</label>
            <input
              class="border-left text-center"
              type="time"
              id="time"
              placeholder="time"
              v-model="newTime"
              required
            />
          </div>

          <!-- <div class="form-group">
            <label for="title">Hour:</label>
            <input
              class="border-left text-center"
              type="number"
              min="1"
              max="12"
              id="hours"
              placeholder="12"
              v-model="newHours"
              required
            />
          </div>
          <div class="form-group">
            <label for="title">Minutes:</label>
            <input
              class="border-left text-center"
              type="number"
              min="0"
              max="59"
              id="minutes"
              placeholder="59"
              v-model="newMinutes"
              required
            />
          </div>-->
          <!-- <div>
            <button
              class="btn btn-primary dropdown-toggle"
              id="menu1"
              type="button"
              data-toggle="dropdown"
            >
              {{newAMPM}}
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
              <li role="presentation">
                <a role="menuitem" tabindex="-1" @click="changeAMPM('AM')">AM</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" @click="changeAMPM('PM')">PM</a>
              </li>
            </ul>
          </div>-->
          <button class="register-button" data-dismiss="modal" @click="addTime()">submit</button>
        </form>
      </div>
      <div class="modal-footer"></div>
    </div>
  </div>
</template>
<script>
// import io from "socket.io-client";
export default {
  name: "timeModal",
  props: [],
  data() {
    return {
      newDate: "",
      newTime: "",
      newMinutes: "",
      newAMPM: "",
      newMonth: "",
      newDay: "",
      newYear: "2019"
      // socket: io("localhost:3001")
    };
  },
  methods: {
    changeAMPM(AMPM) {
      this.newAMPM = AMPM;
    },
    changeMonth(month) {
      this.newMonth = month;
    },
    addTime() {
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

      let newerTime = {
        eventId: this.$store.state.event._id,
        pin: this.$store.state.event.pin,
        hours: this.newTime,
        minutes: this.newMinutes,
        ampm: this.newAMPM,
        year: thisDate[0],
        month: thisDate[1],
        day: thisDate[2]
      };
      this.$store.dispatch("editEvent", newerTime);
      // this.socket.emit("SEND_CHANGETIME", newerTime);
    }
  },
  computed: {},
  components: {}
};
</script>
  <style>
</style>