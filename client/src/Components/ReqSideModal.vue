<template>
  <div id="reqSideModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Request a side</h5>
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
            <button class="register-button" @click="reqSide()" data-dismiss="modal">submit</button>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
import io from "socket.io-client";
export default {
  name: "reqSideModal",
  props: [],
  data() {
    return {
      newSide: "",
      socket: io("localhost:3001")
    };
  },
  methods: {
    reqSide() {
      this.event.reqSides.push(this.newSide);
      this.$store.dispatch("editEvent", {
        reqSides: this.event.reqSides,
        eventId: this.event._id,
        pin: this.event.pin
      });
      this.socket.emit("SEND_REQSIDE", {
        reqSide: this.newSide,
        eventId: this.event._id,
        pin: this.event.pin
      });
      this.newSide = "";
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