<template>
  <div>
    this is Home of CDKX!
    <news-data-base :param="{ typename: 'yw' }">
      <slot slot-scope="data">
        <p v-for="i in data.list" :key="i.id" class="title">
          {{ i.title }}
        </p>
      </slot>
    </news-data-base>
  </div>
</template>


<script>
import bussiness from "./bussiness";
export default Object.assign({}, bussiness);
</script>
<style lang="less" scoped>
@import url("style.less");
</style>
