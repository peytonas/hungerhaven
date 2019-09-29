<template>
  <div class="eventInfo">
    <div class="card-body row">
      <p class="card-text col-6">
        Main Course: {{this.event.maincourse}}
        <br />Sides:
        <br />Drinks:
      </p>
      <p class="card-text col-6">
        Time:
        {{this.event.time}}
        <br />
        Place:
        {{this.event.place}}
      </p>

      <p class="card-text col-6">
        <span v-for="attendee in this.event.attendees" :key="attendee.user">
          {{attendee.name}}: {{attendee.status}}
          <br />
        </span>
      </p>
      <div class="col-6">
        <div class="dropdown">
          <button
            class="btn blue-grade dropdown-toggle"
            id="menu1"
            type="button"
            data-toggle="dropdown"
          >
            Allergies
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu blue-grade" role="menu" aria-labelledby="menu1">
            <li
              class="d-flex justify-content-center text-center"
              role="presentation"
              v-for="allergy in this.allergies"
              :key="allergy"
            >• {{allergy}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "eventInfo",
  data() {
    return {};
  },
  computed: {
    event() {
      return this.$store.state.event;
    },
    attendees() {
      return this.$store.state.event.attendees;
    },
    allergies() {
      let output = [];
      for (let i = 0; i < this.attendees.length; i++) {
        for (let j = 0; j < this.attendees[i].allergies.length; j++) {
          output.push(this.attendees[i].allergies[j]);
        }
      }
      return output;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>