<template>
    <div>
        <el-table :data="tableData" stripe style="width: 80%">
            <el-table-column prop="id" label="ID" width="150px"></el-table-column>
            <el-table-column prop="phone" label="电话" width="200px"></el-table-column>
            <el-table-column prop="phone" label="电话" ></el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    computed: {
        account() {
            return this.$route.params.account;
        },
        user(){
            return this.$route.params.user;
        }
    },
    data() {
        return {
            tableData: [
                {
                    id:"卢本伟",
                    phone:"6666677777"
                },
                {
                    id:"干得漂亮啊马飞",
                    phone:"110"
                },
                {
                    id:"芜湖大司马",
                    phone:"2333333333"
                }
            ]
        };
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

  .el-table {
      text-align: left;
  }
</style>