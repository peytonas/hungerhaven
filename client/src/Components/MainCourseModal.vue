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
                id="title"
                placeholder="add a main..."
                v-model="newMainCourse"
                required
              />
            </div>
            <button
              class="register-button text-dark"
              data-dismiss="modal"
              @click="addMainCourse()"
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
  name: "mainCourseModal",
  props: [],
  data() {
    return {
      newMainCourse: ""
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
      this.newMainCourse = "";
    }
  },
  computed: {},
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