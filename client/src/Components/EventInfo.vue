<template>
  <div class="eventInfo">
    <div class="card-body row">
      <p class="card-text col-6">
        <b>Main Course:</b>
        {{this.event.maincourse}}
        <br />
        <br />
        <b>Sides:</b>
        <br />
        <span v-for="side in this.event.sides">
          • {{side}}
          <br />
        </span>
        <br />
        <b>Drinks:</b>
        <br />
        <span v-for="drink in this.event.drinks">
          • {{drink}}
          <br />
        </span>
        <br />
        <b>Desserts:</b>
        <br />
        <span v-for="dessert in this.event.desserts">
          • {{dessert}}
          <br />
        </span>
      </p>
      <p class="card-text col-6">
        <b>Time:</b>
        {{this.event.time}}
        <br />
        <br />
        <b>Place:</b>
        <br />
        {{this.event.place}}
        <br />
        <b>Requested Sides:</b>
        <br />
        <span v-for="side in this.event.reqSides">
          • {{side}}
          <br />
        </span>
        <br />
        <b>Requested Drinks:</b>
        <br />
        <span v-for="drink in this.event.reqDrinks">
          • {{drink}}
          <br />
        </span>
        <br />
        <b>Requested Desserts:</b>
        <br />
        <span v-for="dessert in this.event.reqDesserts">
          • {{dessert}}
          <br />
        </span>
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