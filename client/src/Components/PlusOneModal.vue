<template>
  <div id="plusOneModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add plus ones</h5>
          <button class="logout-button" data-dismiss="modal" aria-label="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Plus Ones:</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="add a plus one..."
                v-model="newPlusOne"
                required
              />
            </div>
            <button class="register-button" @click="addPlusOne()" data-dismiss="modal">submit</button>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "plusOneModal",
  props: [],
  data() {
    return {
      newPlusOne: ""
    };
  },
  methods: {
    addPlusOne() {
      let index = this.event.attendees.findIndex(
        attendee => attendee.userId == this.$store.state.user._id
      );
      let plusOnes = this.event.attendees[index].plusOnes;
      plusOnes = this.newPlusOne;
      let payload = {
        plus: plusOnes,
        hostId: this.event.hostId
      };
      this.$store.dispatch("editEvent", {
        eventId: this.event._id,
        pin: this.event.pin
      });
      this.newPlusOnes = "";
      console.log(plusOnes);
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