<template>
  <div id="placeModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add a place</h5>
          <button class="logout-button" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Location:</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="add a place..."
                v-model="newPlace.place"
                required
              />
            </div>
            <button class="register-button" data-dismiss="modal" @click="addPlace()">submit</button>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "placeModal",
  props: [],
  data() {
    return {
      newPlace: {}
    };
  },
  methods: {
    addPlace() {
      this.newPlace.eventId = this.$store.state.event._id;
      this.newPlace.pin = this.$store.state.event.pin;
      this.$store.dispatch("editEvent", this.newPlace);
      this.newPlace = "";
    }
  },
  computed: {},
  components: {}
};
</script>
  <style>
</style>