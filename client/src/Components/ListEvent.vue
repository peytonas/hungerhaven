<template>
  <div class="listEvent" @click="findEventFromList(eventProp)">
    Pin: {{eventProp}}
    <br />
    <span v-if="event">
      Time:
      <br />
      {{this.event.month}}{{this.event.day}}{{this.event.year}}
      <br />
      {{event.hours}}{{event.minutes}} {{event.ampm}}
    </span>
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
    // this.fixTime();
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
    // fixTime() {
    //   let newStr = "";
    //   if (this.event.ampm == "pm") {
    //     let str = this.event.hours;
    //     let num1 = parseInt(str[1], 10) - 1;
    //     let num2 = parseInt(str[2], 10) - 2;
    //     let num4 = parseInt(str[4], 10);
    //     let num5 = parseInt(str[5], 10);
    //     newStr =
    //       num1.toString() +
    //       num2.toString() +
    //       ":" +
    //       num4.toString() +
    //       num5.toString();
    //   }
    //   // this.$store.dispatch(editTime, newStr);
    // }
  },
  components: {},
  props: ["eventProp"]
};
</script>


<style scoped>
</style>