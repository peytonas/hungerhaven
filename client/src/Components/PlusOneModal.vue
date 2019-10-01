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
            <button
              class="register-button text-dark"
              @click="addPlusOne()"
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
  name: "plusOneModal",
  props: [],
  data() {
    return {
      newPlusOne: ""
    };
  },
  methods: {
    addPlusOne() {
      debugger;
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
        plusOnes: this.event.plusOnes,
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