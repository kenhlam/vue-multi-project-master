<template>
  <img :src="'/'+src" alt @click="click"/>
</template>



<script>
export default {
  data() {
    return {};
  },
  props:['src'],
  methods:{
    click(){
      this.$emit('click')
    }
  }

};
</script>

