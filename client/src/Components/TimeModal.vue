<template>
  <div id="timeModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add a time</h5>
          <button class="logout-button" data-dismiss="modal">&times;</button>
        </div>
        <form>
          <!-- SECTION Change year -->
          <div class="form-group">
            <label for="title">Year:</label>
            <input
              class="border-left text-center"
              type="number"
              min="2019"
              max="3030"
              id="hours"
              placeholder="2019"
              v-model="newYear"
              required
            />
          </div>
          <!-- !SECTION -->

          <!-- SECTION Change Month -->

          <div class="modal-body">
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
          </div>
          <!-- !SECTION -->
          <!-- SECTION Change Day -->
          <div class="form-group">
            <label for="title">Day:</label>
            <input
              class="border-left text-center"
              type="number"
              min="1"
              max="31"
              id="days"
              placeholder="day"
              v-model="newDay"
              required
            />
          </div>
          <!-- !SECTION -->

          <!-- SECTION Change Time -->
          <div class="form-group">
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
          </div>
          <div>
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
          </div>
          <button class="register-button text-dark" data-dismiss="modal" @click="addTime()">submit</button>
          <!-- !SECTION -->
        </form>
      </div>
      <div class="modal-footer"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "timeModal",
  props: [],
  data() {
    return {
      newHours: 12,
      newMinutes: 0,
      newAMPM: "AM/PM",
      newMonth: "01",
      newDay: "01",
      newYear: "2019"
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
      let newerTime = {
        eventId: this.$store.state.event._id,
        pin: this.$store.state.event.pin,
        hours: this.newHours,
        minutes: this.newMinutes,
        ampm: this.newAMPM,
        year: this.newYear,
        month: this.newMonth,
        day: this.newDay
      };
      if (newerTime.minutes.toString().length < 2) {
        newerTime.minutes = "0" + newerTime.minutes;
      }
      this.$store.dispatch("editEvent", newerTime);
    }
  },
  computed: {},
  components: {}
};
</script>
  <<style>
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
  margin-top: 2px;
  margin-bottom: 2px;
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
  </style>