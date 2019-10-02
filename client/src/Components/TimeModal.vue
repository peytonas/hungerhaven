<template>
  <div id="timeModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add a time</h5>
          <button class="logout-button" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Time:</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="add a time..."
                v-model="newTime.time"
                required
              />
            </div>
            <button class="register-button text-dark" data-dismiss="modal" @click="addTime()">submit</button>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "timeModal",
  props: [],
  data() {
    return {
      newTime: {}
    };
  },
  methods: {
    addTime() {
      this.newTime.eventId = this.$store.state.event._id;
      this.newTime.pin = this.$store.state.event.pin;
      this.$store.dispatch("editEvent", this.newTime);
      this.newTime = "";
    }
  },
  computed: {},
  components: {}
};
</script>
  <style>
</style>