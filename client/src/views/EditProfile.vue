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
    <!--SECTION accordion -->
    <div id="headingOne">
      <div id="accordion">
        <div>
          <b>Name:</b>
          <br />
          {{user.name}}
        </div>
        <div>
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne">edit</button>
          </h5>
        </div>
        <div id="collapseOne" class="collapse" data-parent="#accordion">
          <div>
            <form @submit.prevent="editName">
              <div class="input-group">
                <input v-model="name" type="string" class="form-control" placeholder="type name..." />
                <div>
                  <button class="home-button" type="submit">➕</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div>
          <b>Address:</b>
          <br />
          {{user.address}}
        </div>
        <div>
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo">edit</button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" data-parent="#accordion">
          <div>
            <form @submit.prevent="editAddress">
              <div class="input-group">
                <input
                  v-model="address"
                  type="string"
                  class="form-control"
                  placeholder="type address..."
                />
                <div>
                  <button class="home-button" type="submit">➕</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div>
          <b>Allergies:</b>
          <br />
          <span v-for="allergy in user.allergies" :key="allergy">
            {{allergy}}
            <span
              class="logout-button-color cursor"
              @click.prevent="removeAllergy(allergy)"
            >x</span>
          </span>
        </div>
        <div>
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree">edit</button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" data-parent="#accordion">
          <div>
            <form @submit.prevent="editAllergies">
              <div class="input-group">
                <input
                  v-model="allergies"
                  type="string"
                  class="form-control"
                  placeholder="type allergies..."
                />
                <div>
                  <button class="home-button" type="submit">➕</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div>
          <b>Phone Number:</b>
          <br />
          {{user.phoneNumber}}
        </div>
        <div>
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour">edit</button>
          </h5>
        </div>
        <div id="collapseFour" class="collapse" data-parent="#accordion">
          <div>
            <form @submit.prevent="editPhoneNumber">
              <div class="input-group">
                <input
                  v-model="phoneNumber"
                  type="string"
                  class="form-control"
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
    <!-- !SECTION -->
    <button class="logout-button cursor" @click="goHome()">Go Home</button>
  </div>
</template>


<script>
export default {
  name: "editProfile",
  data() {
    return {
      name: "",
      address: "",
      allergies: [],
      phoneNumber: ""
    };
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
        //for each event in user.events
        //events.attendees find where attendee == this attendee
        //make ^that  attendee == the edited attendee
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
      this.name = "";
    },
    editAddress() {
      let name = this.newUser.address;
      let output = this.address;
      this.newUser.address = output;
      this.$store.dispatch("editProfile", this.newUser);
      this.$store.dispatch("authenticate");
      this.address = "";
    },
    editAllergies() {
      this.newUser.allergies.push(this.allergies);
      let output = this.newUser.allergies;
      this.newUser.allergies = output;
      this.$store.dispatch("editProfile", this.newUser);
      this.$store.dispatch("authenticate");
      this.allergies = "";
    },
    editPhoneNumber() {
      let name = this.newUser.phoneNumber;
      let output = this.phoneNumber;
      this.newUser.phoneNumber = output;
      this.$store.dispatch("editProfile", this.newUser);
      this.$store.dispatch("authenticate");
      this.phoneNumber = "";
    },
    removeAllergy(allergy) {
      this.$store.dispatch("removeAllergy", { allergy, user: this.user });
    }
  },
  components: {}
};
</script>


<style scoped>
.cursor:hover {
  cursor: pointer;
}

.image {
  max-height: 100px;
  max-width: 185px;
}
</style>