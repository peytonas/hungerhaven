<template>
  <div id="dessertModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add a dessert</h5>
          <button class="logout-button" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Desserts:</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="add a main..."
                v-model="newDessert"
                required
              />
            </div>
            <button
              class="register-button text-dark"
              data-dismiss="modal"
              @click="addDessert()"
            >submit</button>
          </form>
        </div>
        <div class="modal-footer text-left">
          <p>
            The host has requested these desserts:
            <br />
            <span
              v-for="dessert in event.reqDesserts"
              :key="dessert"
              @click="addDessertFromReq(dessert)"
            >
              <span v-if="takenDesserts.indexOf(dessert) == -1">
                • {{dessert}}
                <br />
              </span>
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
  name: "dessertModal",
  props: [],
  data() {
    return {
      newDessert: ""
    };
  },
  methods: {
    addDessert() {
      this.event.desserts.push(this.newDessert);
      this.attendee.desserts.push(this.newDessert);
      this.$store.dispatch("editEvent", {
        desserts: this.event.desserts,
        eventId: this.event._id,
        pin: this.event.pin
      });
      this.$store.dispatch("bringingThings", {
        sides: this.attendee.sides,
        drinks: this.attendee.drinks,
        desserts: this.attendee.desserts,
        eventId: this.event._id
      });
      this.newDessert = "";
    },
    addDessertFromReq(req) {
      this.event.desserts.push(req);
      let index = this.event.reqDesserts.indexOf(req);
      this.event.reqDesserts.splice(index, 1);
      this.attendee.desserts.push(req);
      this.$store.dispatch("editEvent", {
        desserts: this.event.desserts,
        reqDesserts: this.event.reqDesserts,
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