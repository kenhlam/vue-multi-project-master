<template>
  <div id="app">
    <mhead/>
    <router-view />
    <mfoot/>
  </div>
</template>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
<script>
import mfoot from "./components/footer";
import mhead from "./components/header";
export default {
  data() {
    return {};
  },

  computed: {
    // noneHeadPage() {
    //   let list = ["login"];
    //   return list.indexOf(this.$route.name) != -1;
    // },
  
  },
  components: {
    mhead,
    mfoot,
  },
  mounted() {},
  methods: {

  },
};
</script>>