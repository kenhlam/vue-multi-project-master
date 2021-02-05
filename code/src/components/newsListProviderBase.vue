<template>
  <section>
    <slot :list="list"></slot>
  </section>
</template>



<script>
import { _newsList } from "@api/service";
export default {
  provide() {
    return {
      getResData: () => {
        return this.list;
      },
    };
  },
  data() {
    return {
      list: [],
    };
  },
  computed: {},
  props: {
    param: {
      type: Object,
      required: true,
    },
    initData: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    if (this.initData) {
      this.getData();
    }
  },
  methods: {
    async getData() {
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
      } else {
        console.warn("数据获取错误，请检查服务器接口！");
      }
    },
  },
};
</script>

