<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{account}}
            </div>
        </el-card>
    </div>
</template>

<script>
  export default {
      computed: {
          account() {
              return this.$route.params.account;
          }
      },
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

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>