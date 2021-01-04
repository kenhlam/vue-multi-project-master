<template>
  <section>
    <slot :list="list"></slot>
  </section>
</template>



<script>
import { _newsList } from "@api/service";
export default {
  data() {
    return {
        list:[]
    };
  },
  props: {
    param: {
      default: Object,
      required: true,
    },
  },
  mounted() {
      this.getList()
  },
  methods: {
    async getList() {
      let param = Object.assign(
        {
          pindex: 1,
          pageSize: 6,
        },
        this.param
      );
      let res = await _newsList(param);
      if (res.success && res.result) {
        this.list = JSON.parse(res.result);
      console.log(this.list);
      } else {
        this.$message.error(res.msg);
      }
    },
  },
};
</script>

