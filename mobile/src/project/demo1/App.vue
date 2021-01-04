<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      document.querySelector("#app").scrollTop = 0;
    }
  },
  mounted() {
  
  },
  created() {},
  beforeDestroy() {},
  methods: {},
  destroyed() {}
};
</script>
