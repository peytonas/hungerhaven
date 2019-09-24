<template>
  <div class="editProfile">
    <h1>Your Profile</h1>
    <h2>{{user.name}}</h2>
    <p>{{user.address}}</p>
    <p>{{user.allergies}}</p>
    <p>{{user.phoneNumber}}</p>
    <form class="col-10 offset-1">
      <input
        class="form-control mb-2"
        type="text"
        name="name"
        id="name"
        placeholder="name"
        v-model="user.name"
      />
      <input
        class="form-control mb-2"
        type="text"
        name="address"
        id="registeraddress"
        placeholder="Address"
        v-model="user.address"
      />
      <input
        class="form-control mb-2"
        type="text"
        name="phoneNumber"
        id="registerphoneNumber"
        placeholder="Phone Number"
        v-model="user.phoneNumber"
      />
      <input
        class="form-control mb-2"
        type="text"
        name="allergies"
        id="registerallergies"
        placeholder="Allergies"
        v-model="user.allergies"
      />
      <button class="btn btn-warning mb-2" type="submit">Submit</button>
    </form>
    <button class="btn btn-primary" @click="goHome()">Go Home</button>
  </div>
</template>


<script>
export default {
  name: "editProfile",
  data() {
    return {
      user: this.$store.state.user
    };
  },
  mounted() {
    this.$store.dispatch("authenticate");
  },
  computed: {},
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  },
  components: {}
};
</script>


<style scoped>
</style>