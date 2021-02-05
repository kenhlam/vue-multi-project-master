
 <template>
  <div>
    <section>
      <el-divider>计算属性获取"方法"数据</el-divider>
      <p v-for="i in list" :key="i.id" class="title">
        {{ i.title }}
      </p>
    </section>
    <section>
      <el-divider>指针类型获取"引用"数据</el-divider>
      <p v-for="i in dataList" :key="i.id" class="title">
        {{ i.title }}
      </p>
    </section>
  </div>
</template>



<script>
import { _newsList } from "@api/service";
export default {
  inject: ["res", "getResData"],
  data() {
    return {};
  },
  computed: {
    list() {
      return this.getResData();
    },
    dataList() {
      return this.res.list;
    },
  },
  mounted() {},
  methods: {},
};
</script>

