<template>
  <div class="listEvent" @click="findEventFromList(eventProp)">
    Pin: {{eventProp}}
    <br />
    <span v-if="event">Time: {{event.time}}</span>
    <br />
    <span v-if="event">Place: {{event.place}}</span>
  </div>
</template>


<script>
export default {
  name: "listEvent",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getEventForList", { pin: this.eventProp });
  },
  computed: {
    event() {
      for (let i = 0; i < this.$store.state.events.length; i++) {
        if (this.$store.state.events[i].pin == this.eventProp) {
          return this.$store.state.events[i];
        }
      }
    }
  },
  methods: {
    findEventFromList(pin) {
      if (this.event.hostId == this.$store.state.user._id) {
        this.$router.push("/host/" + pin);
      } else {
        this.$router.push("/guest/" + pin);
      }
    }
  },
  components: {},
  props: ["eventProp"]
};
</script>


<style scoped>
</style>