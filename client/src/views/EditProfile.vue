<template>
  <div class="editProfile">
    <h1>Your Profile</h1>
    <h2>{{user.name}}</h2>
    <p>{{user.address}}</p>
    <p>{{user.allergies.toString()}}</p>
    <p>{{user.phoneNumber}}</p>
    <form class="col-10 offset-1" @submit.prevent="edit">
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
      <!-- <input
        class="form-control mb-2"
        type="text"
        name="allergies"
        id="registerallergies"
        placeholder="Allergies"
        v-model="user.allergies"
      />-->
      <div class="text-left">
        <h1>Allergies:</h1>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Lactose</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Eggs</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Nuts</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Seafood</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Gluten</label>
        </div>
        <input type="text" placeholder="other" />
      </div>
      <div>
        <button class="btn btn-warning mb-2 mt-2" type="submit">Submit</button>
      </div>
    </form>
    <button class="btn btn-primary" @click="goHome()">Go Home</button>
  </div>
</template>


<script>
export default {
  name: "editProfile",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("authenticate");
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    edit() {
      this.$store.dispatch("editProfile", this.user);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>