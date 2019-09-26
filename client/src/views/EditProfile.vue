<template>
  <div class="editProfile">
    <div class="row justify-content-center">
      <img
        class="col-12 image"
        alt="Hunger Haven Logo"
        src="../assets/HH-Logo-Transparent-Color-Wings.png"
      />
    </div>
    <h3>
      <u>Your Profile</u>
    </h3>
    <hr />
    <!-- accordion 1 -->
    <div id="headingOne">
      <div id="accordion">
        <div>
          <b>Name:</b>
          <br />
          {{user.name}}
        </div>
        <div>
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >edit</button>
          </h5>
        </div>
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div>
            <form @submit.prevent="editName">
              <div class="input-group">
                <input
                  v-model="name"
                  type="string"
                  class="form-control"
                  id
                  placeholder="type name..."
                />
                <div>
                  <button class="home-button" type="submit">➕</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <!-- end accordion 1 -->
    <!-- accordion 2 -->
    <div id="headingTwo">
      <div id="accordion">
        <div>
          <b>Address:</b>
          <br />
          {{user.address}}
        </div>
        <div>
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >edit</button>
          </h5>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <div>
            <form @submit.prevent="editAddress">
              <div class="input-group">
                <input
                  v-model="address"
                  type="string"
                  class="form-control"
                  id
                  placeholder="type address..."
                />
                <div>
                  <button class="home-button" type="submit">➕</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <!-- end accordion 2 -->
    <!-- accordion 3 -->
    <div id="headingThree">
      <div id="accordion">
        <div>
          <b>Allergies:</b>
          <br />
          <span v-for="allergy in user.allergies" :key="allergy">
            {{allergy}}
            <span class="text-danger cursor" @submit="removeAllergy">x</span>
          </span>
        </div>
        <div>
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >edit</button>
          </h5>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div>
            <form @submit.prevent="editAllergies">
              <div class="input-group">
                <input
                  v-model="allergies"
                  type="string"
                  class="form-control"
                  id
                  placeholder="type allergies..."
                />
                <div>
                  <button class="home-button" type="submit">➕</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <!-- end accordion 3 -->
    <!-- accordion 4 -->
    <div id="headingFour">
      <div id="accordion">
        <div>
          <b>Phone Number:</b>
          <br />
          {{user.phoneNumber}}
        </div>
        <div>
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >edit</button>
          </h5>
        </div>
        <div
          id="collapseFour"
          class="collapse"
          aria-labelledby="headingFour"
          data-parent="#accordion"
        >
          <div>
            <form @submit.prevent="editPhoneNumber">
              <div class="input-group">
                <input
                  v-model="phoneNumber"
                  type="string"
                  class="form-control"
                  id
                  placeholder="type number..."
                />
                <div>
                  <button class="home-button" type="submit">➕</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <!-- end accordion 4 -->
    <button class="logout-button cursor" @click="goHome()">Go Home</button>
  </div>
</template>


<script>
export default {
  name: "editProfile",
  data() {
    return { name: "", address: "", allergies: [], phoneNumber: "" };
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
    editName() {
      let name = this.newUser.name;
      let output = this.name;
      this.newUser.name = output;
      this.$store.dispatch("editProfile", this.newUser);
      this.$store.dispatch("authenticate");
    },
    editAddress() {
      let name = this.newUser.address;
      let output = this.address;
      this.newUser.address = output;
      this.$store.dispatch("editProfile", this.newUser);
      this.$store.dispatch("authenticate");
    },
    editAllergies() {
      let allergies = this.newUser.allergies;
      let splitAllergies = allergies.split(",");
      let output = [];
      for (let i = 0; i < splitAllergies.length; i++) {
        output.push(splitAllergies[i].trim());
      }
      this.newUser.allergies = output;
      this.$store.dispatch("editProfile", this.newUser);
      this.$store.dispatch("authenticate");
    },
    editPhoneNumber() {
      let name = this.newUser.phoneNumber;
      let output = this.phoneNumber;
      this.newUser.phoneNumber = output;
      this.$store.dispatch("editProfile", this.newUser);
      this.$store.dispatch("authenticate");
    },
    removeAllergy() {
      console.log(this.newUser.allergies);
    }
  },
  components: {}
};
</script>


<style scoped>
.cursor:hover {
  cursor: pointer;
}
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
.image {
  max-height: 100px;
  max-width: 185px;
}
</style>