<template>
  <div class="editProfile">
    <h1>Your Profile</h1>
    <h2>{{user.name}}</h2>
    <p>{{user.address}}</p>
    <p>
      <span v-for="allergy in user.allergies">{{allergy+', '}}</span>
    </p>
    <p>{{user.phoneNumber}}</p>
    <form class="col-10 offset-1" @submit.prevent="edit">
      <input
        class="form-control mb-2"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        v-model="newUser.name"
      />
      <input
        class="form-control mb-2"
        type="text"
        name="address"
        id="registeraddress"
        placeholder="Address"
        v-model="newUser.address"
      />
      <input
        class="form-control mb-2"
        type="text"
        name="phoneNumber"
        id="registerphoneNumber"
        placeholder="Phone Number"
        v-model="newUser.phoneNumber"
      />
      <textarea
        class="form-control mb-2"
        type="text"
        name="allergies"
        id="registerallergies"
        placeholder="Allergies"
        v-model="newUser.allergies"
      ></textarea>
      <!-- <div class="text-left">
        <h5>Allergies:</h5>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="defaultCheck1">Lactose</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
          <label class="form-check-label" for="defaultCheck2">Eggs</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck3" />
          <label class="form-check-label" for="defaultCheck3">Nuts</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck4" />
          <label class="form-check-label" for="defaultCheck4">Seafood</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck5" />
          <label class="form-check-label" for="defaultCheck5">Gluten</label>
        </div>
        <input type="text" placeholder="other" />
      </div>-->
      <div>
        <button class="register-button text-dark mb-2 mt-2" type="submit">Submit</button>
      </div>
    </form>
    <button class="home-button" @click="goHome()">Go Home</button>
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
    },
    newUser() {
      return {
        _id: this.user._id,
        name: this.user.name,
        address: this.user.address,
        phoneNumber: this.user.phoneNumber,
        allergies: this.user.allergies
      };
    }
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    edit() {
      let allergies = this.newUser.allergies;
      let splitAllergies = allergies.split(",");
      let output = [];
      for (let i = 0; i < splitAllergies.length; i++) {
        output.push(splitAllergies[i].trim());
      }

      this.newUser.allergies = output;
      this.$store.dispatch("editProfile", this.newUser);
      this.$store.dispatch("authenticate");
    }
  },
  components: {}
};
</script>


<style scoped>
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
.home-button {
  background-color: #016fff;
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
}
.home-button:hover {
  background-color: #4595fe;
}
.home-button:active {
  background-color: #016fff;
}
.home-button:focus {
  outline: 0;
}
</style>