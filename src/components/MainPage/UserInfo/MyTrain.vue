<template>
    <div>
        <el-table :data="tableData" stripe style="width: 80%">
            <el-table-column prop="name" label="训练" width="150px"></el-table-column>
            <el-table-column prop="trainer" label="教练" width="200px"></el-table-column>
            <el-table-column prop="schoolId" label="驾校" ></el-table-column>
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
                    name:"王境泽",
                    trainer:"真香",
                    schoolId:"东莞足浴城"
                },
                {
                    name:"卢本伟牛逼",
                    trainer:"卢本伟",
                    schoolId:"山东蓝翔"
                },
                {
                    name:"食我大屌",
                    trainer:"干得漂亮啊马飞",
                    schoolId:"澳门赌场"
                }
            ]
        };
    }
  }
</script>

<style>
  .el-table {
      text-align: left;
  }
</style>