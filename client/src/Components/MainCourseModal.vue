<template>
  <div :id="'mainCourseModal' + eventId" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Main Course</h5>
          <button type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- <form @submit.prevent="addMainCourse(event)">
            <div class="form-group">
              <label for="body">Body</label>
              <input
                type="text"
                class="form-control"
                id="body"
                placeholder="add main course"
                v-model="addMainCourse.body"
                required
              />
            </div>
            <button class="btn btn-primary">Add Main Course</button>
          </form>-->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mainCourseModal",
  props: ["eventId"],
  data() {
    return {
      // newModal: {
      //   body: "",
      //   eventId: this.eventId
      // }
    };
  },
  computed: {},
  methods: {
    // addMainCourse(e) {
    //   this.$store.dispatch("addMainCourse", this.newModal);
    //   e.target.reset();
    // }
  },
  components: {}
};
</script>
<style>
</style>