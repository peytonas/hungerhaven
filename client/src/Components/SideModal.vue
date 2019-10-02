<template>
  <div id="sideModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add a side</h5>
          <button class="logout-button" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Sides:</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="add a side..."
                v-model="newSide"
                required
              />
            </div>
            <button class="register-button text-dark" @click="addSide()" data-dismiss="modal">submit</button>
          </form>
        </div>
        <div class="modal-footer text-left">
          <p>
            The host has requested these sides:
            <br />
            <span v-for="side in event.reqSides" :key="side" @click="addSideFromReq(side)">
              • {{side}}
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sideModal",
  props: [],
  data() {
    return {
      newSide: ""
    };
  },
  methods: {
    addSide() {
      this.event.sides.push(this.newSide);
      this.attendee.sides.push(this.newSide);
      this.$store.dispatch("editEvent", {
        sides: this.event.sides,
        eventId: this.event._id,
        pin: this.event.pin
      });
      this.$store.dispatch("bringingThings", {
        sides: this.attendee.sides,
        drinks: this.attendee.drinks,
        desserts: this.attendee.desserts,
        eventId: this.event._id
      });
      this.newSide = "";
    },
    addSideFromReq(req) {
      this.event.sides.push(req);
      let index = this.event.reqSides.indexOf(req);
      this.event.reqSides.splice(index, 1);
      this.attendee.sides.push(req);
      this.$store.dispatch("editEvent", {
        sides: this.event.sides,
        reqSides: this.event.reqSides,
        eventId: this.event._id,
        pin: this.event.pin
      });
      this.$store.dispatch("bringingThings", {
        sides: this.event.sides,
        drinks: this.attendee.drinks,
        desserts: this.attendee.desserts,
        eventId: this.event._id
      });
    }
  },
  computed: {
    event() {
      return this.$store.state.event;
    },
    attendee() {
      for (let user in this.event.attendees) {
        if (this.event.attendees[user].userId == this.$store.state.user._id) {
          return this.event.attendees[user];
        }
      }
    }
  },
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