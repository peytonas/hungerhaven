<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.card-bg {
  background-color: #ffe8a0;
}

.register-button {
  background-color: #ffe8a0;
  border: none;
  border-radius: 25px;
  color: black;
  padding: 8px 16px;
  text-align: center;
  font-size: 12px;
  transition: 0.1s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  margin-top: 2px;
  margin-bottom: 2px;
}
.register-button:hover {
  background-color: #fcd254;
}
.register-button:active {
  background-color: #fcd254;
}
.register-button:focus {
  outline: 0;
}
.home-button {
  background-color: #fcd254;
  border: none;
  border-radius: 25px;
  color: black;
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
.home-button:hover {
  background-color: #ffe8a0;
}
.home-button:active {
  background-color: #ffe8a0;
}
.home-button:focus {
  outline: 0;
}
.logout-button-color {
  color: black;
}
.logout-button {
  background-color: #fcd254;
  border: #fcd254;
  border-radius: 25px;
  color: black;
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
  background-color: #ffe8a0;
}
.logout-button:active {
  background-color: #ffe8a0;
}
.logout-button:focus {
  outline: 0;
}
</style>
