<template>
  <div id="reqDrinkModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Request a drink</h5>
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
            <button
              class="register-button text-dark"
              @click="reqDrink()"
              data-dismiss="modal"
            >submit</button>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "reqDrinkModal",
  props: [],
  data() {
    return {
      newDrink: ""
    };
  },
  methods: {
    reqDrink() {
      this.event.reqDrinks.push(this.newDrink);
      this.$store.dispatch("editEvent", {
        reqDrinks: this.event.reqDrinks,
        eventId: this.event._id,
        pin: this.event.pin
      });
      this.newDrink = "";
    }
  },
  computed: {
    event() {
      return this.$store.state.event;
    }
  },
  components: {}
};
</script>
  <style>
</style>