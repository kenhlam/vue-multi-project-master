
 <template>
  <div>
    <section>
      <el-divider>provider/inject 新闻列表组件</el-divider>
      <p v-for="i in list" :key="i.id" class="title">
        {{ i.title }}
      </p>
    </section>
  </div>
</template>



<script>
import { _newsList } from "@api/service";
export default {
  inject: [ "getResData"],
  data() {
    return {};
  },
  computed: {
    list() {
      return this.getResData();
    }
    
  },
  mounted() {},
  methods: {},
};
</script>

