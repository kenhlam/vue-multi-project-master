import newsList from '@project/demo1/components/newsList'
export default {
    name: "",
   
    data() {
        return {
            cValue:true,
            param:{ typename: 'yw' ,pageSize:3}
        };
    },
    components: {
        // slider3d
        newsList
    },
    watch: {
        cValue() {
          console.log(this.cValue);
        },
      },
    beforeCreated() { },
    created() { },
    mounted() {
    
    },
    methods: {
        updataProviderData(){
            this.param.pageSize = 1;
            this.$refs.newsSlotData.getData()
            this.$refs.newsData.getData()
            this.$refs.pData.getData()
            this.$refs.newsData.getData()
        }
    },

};
