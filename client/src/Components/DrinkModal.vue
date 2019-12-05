<template>
  <div id="drinkModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add a drink</h5>
          <button class="logout-button" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Drinks:</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="add a drink..."
                v-model="newDrink"
                required
              />
            </div>
            <button class="register-button" @click="addDrink()" data-dismiss="modal">submit</button>
          </form>
        </div>
        <div class="modal-footer text-left">
          <p>
            The host has requested these drinks:
            <br />
            <span v-for="drink in event.reqDrinks" :key="drink" @click="addDrinkFromReq(drink)">
              <span v-if="takenDrinks.indexOf(drink) == -1">
                • {{drink}}
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
// import io from "socket.io-client";
export default {
  name: "drinkModal",
  props: ["takenDrinks"],
  data() {
    return {
      newDrink: ""
      // socket: io("localhost:3001")
    };
  },
  methods: {
    addDrink() {
      this.event.drinks.push(this.newDrink);
      this.attendee.drinks.push(this.newDrink);
      this.$store.dispatch("editEvent", {
        sides: this.event.sides,
        drinks: this.event.drinks,
        desserts: this.event.desserts,
        eventId: this.event._id,
        pin: this.event.pin
      });
      this.$store.dispatch("bringingThings", {
        sides: this.event.sides,
        drinks: this.attendee.drinks,
        desserts: this.attendee.desserts,
        eventId: this.event._id
      });
      // this.socket.emit("SEND_BRINGDRINK", {
      //   drink: this.newDrink,
      //   eventId: this.event._id,
      //   pin: this.event.pin,
      //   attendeeId: this.attendee._id
      // });
      this.newDrink = "";
    },
    addDrinkFromReq(req) {
      this.event.drinks.push(req);
      let index = this.event.reqDrinks.indexOf(req);
      this.event.reqDrinks.splice(index, 1);
      this.attendee.drinks.push(req);
      this.$store.dispatch("editEvent", {
        drinks: this.event.drinks,
        reqDrinks: this.event.reqDrinks,
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
  <style>
</style>