<template>
  <div>
    this is Home of CDKX!
    <!-- slot获取数据 -->
    <news-data-base :param="param"  ref="newsSlotData">
      <slot slot-scope="data">
        <el-divider>slot获取数据</el-divider>
        <p v-for="i in data.list" :key="i.id" class="title">
          {{ i.title }}
        </p>
      </slot>
    </news-data-base>
    <!-- provider inject获取数据 -->
    <test-provider-base :param="param"  ref="pData">
        <test-inject-base />
    </test-provider-base>
    <!-- provider inject获取数据 -->
    <news-list-provider-base  :param="param"  ref="newsData">
      <news-list />
    </news-list-provider-base>
    <el-button @click="updataProviderData">provider更新数据</el-button>

    <el-divider>plugin test</el-divider>
    <cl-button>12312313</cl-button>
    <cl-switch v-model="cValue" active-color="#13ce66" inactive-color="#ff4949">
    </cl-switch>
  </div>
</template>


<script>
import bussiness from "./bussiness";
export default Object.assign({}, bussiness);
</script>
<style lang="less" scoped>
@import url("style.less");
</style>
