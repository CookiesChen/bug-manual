<template>
    <div>
        <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="选择日期时间">
        </el-date-picker>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
        getParams (){
            let routerParams = this.$route.params.account;
            this.account = routerParams;
            console.log("aaa");
            console.log(account);
        },
        next() {
            if (this.active++ > 2) this.active = 0;
        }
    },
    watch: {
        
    }
  }
</script>