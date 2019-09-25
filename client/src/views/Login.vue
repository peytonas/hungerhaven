<template>
  <div class="login row">
    <img class="col-12" alt="Hunger Haven Logo" src="../assets/HH-Logo-Transparent-Color-Wings.png" />
    <h2>Welcome to Hunger Haven, please log in</h2>
    <form v-if="loginForm" class="col-10 offset-1" @submit.prevent="login(creds)">
      <input
        class="form-control mb-2"
        type="text"
        name="email"
        id="email"
        placeholder="email"
        v-model="creds.email"
      />
      <input
        class="form-control mb-2"
        type="password"
        name="password"
        id="password"
        placeholder="password"
        v-model="creds.password"
      />
      <button class="login-button mb-2" type="submit">Login</button>
    </form>
    <form v-else class="col-10 offset-1" @submit.prevent="register(newUser)">
      <input
        class="form-control mb-2"
        type="text"
        name="name"
        id="name"
        placeholder="name"
        v-model="newUser.name"
      />
      <input
        class="form-control mb-2"
        type="text"
        name="email"
        id="registerEmail"
        placeholder="email"
        v-model="newUser.email"
      />
      <input
        class="form-control mb-2"
        type="password"
        name="password"
        id="registerPassword"
        placeholder="password"
        v-model="newUser.password"
      />
      <button class="register-button text-dark mb-2" type="submit">Register</button>
    </form>
    <div class="col-12 text-center">
      <div class="action" @click="loginForm = !loginForm">
        <p v-if="loginForm">No account? Register here!</p>
        <p v-else>Already have an account? Log in here!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        name: "",
        password: "",
        email: ""
      }
    };
  },
  methods: {
    login(creds) {
      this.$store.dispatch("login", creds);
    },
    register(newUser) {
      this.$store.dispatch("register", newUser);
    }
  }
};
</script>

<style>
.action {
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
.login-button {
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
}
.login-button:hover {
  background-color: #ff7256;
}
.login-button:active {
  background-color: #ff6242;
}
.login-button:focus {
  outline: 0;
}
</style>