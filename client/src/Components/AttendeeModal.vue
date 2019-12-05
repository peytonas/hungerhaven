<template>
  <div :id="'AttendeeModal' +attendeeprop._id" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Personal Info</h4>
          <button class="logout-button" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <h5>Name:</h5>
          <h5>{{attendeeprop.name}}</h5>
          <br />
          <h5>Phone Number:</h5>
          <h5>{{attendeeprop.phoneNumber}}</h5>
          <br />
          <h5>Allergies:</h5>
          <h5 v-for="allergy in attendeeprop.allergies" :key="allergy">{{allergy}}</h5>
          <br />
          <h5>Attending:</h5>
          <h5>{{attendeeprop.status}}</h5>
          <br />
          <h5># of Plus Ones:</h5>
          <h5>{{attendeeprop.plusOnes}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "component",
  props: ["attendeeprop"],
  data() {
    return {};
  },
  computed: {
    event() {
      return this.$store.state.event;
    },
    attendees() {
      return this.$store.state.event.attendees;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>