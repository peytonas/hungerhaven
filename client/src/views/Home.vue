<template>
  <div class="home row">
    <img
      class="col-12"
      alt="Hunger Haven Logo"
      src="https://files.slack.com/files-pri/T1GGQN1RU-FNB7BRSRH/screen_shot_2019-09-23_at_8.39.29_pm.png"
    />
    <HelloWorld msg="Welcome to Your Worst Nightmare" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
