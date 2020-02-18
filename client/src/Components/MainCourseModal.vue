<template>
  <div id="mainCourseModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add a main course</h5>
          <button class="logout-button" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Main Course:</label>
              <input
                type="text"
                class="form-control"
                placeholder="add a main..."
                v-model="newMainCourse"
                required
              />
            </div>
            <button class="register-button" data-dismiss="modal" @click="addMainCourse()">submit</button>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import io from "socket.io-client";
export default {
  name: "mainCourseModal",
  props: [],
  data() {
    return {
      newMainCourse: ""
      // socket: io("localhost:3001")
    };
  },
  methods: {
    addMainCourse() {
      let payload = {
        eventId: this.$store.state.event._id,
        pin: this.$store.state.event.pin,
        maincourse: this.newMainCourse
      };

      this.$store.dispatch("editEvent", payload);
      // this.socket.emit("SEND_CHANGEMAINCOURSE", {
      //   maincourse: this.newMainCourse,
      //   eventId: this.$store.state.event._id,
      //   pin: this.$store.state.event.pin
      // });
      this.newMainCourse = "";
    }
  },
  computed: {},
  components: {}
};
</script>
  <style>
</style>