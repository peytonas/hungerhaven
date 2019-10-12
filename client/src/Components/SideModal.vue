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
            <button class="register-button" @click="addSide()" data-dismiss="modal">submit</button>
          </form>
        </div>
        <div class="modal-footer text-left">
          <p>
            The host has requested these sides:
            <br />
            <span v-for="side in event.reqSides" :key="side" @click="addSideFromReq(side)">
              <span v-if="takenSides.indexOf(side) == -1">
                • {{side}}
                <br />
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import io from "socket.io-client";
export default {
  name: "sideModal",
  props: ["takenSides"],
  data() {
    return {
      newSide: "",
      socket: io("localhost:3001")
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
      this.socket.emit("SEND_BRINGSIDE", {
        side: this.newSide,
        eventId: this.event._id,
        pin: this.event.pin,
        attendeeId: this.attendee._id
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
  mounted() {},
  components: {}
};
</script>
  <style>
</style>