<template>
    <div>
        <el-table :data="tableData" stripe style="width: 80%">
            <el-table-column prop="id" label="ID" width="150px"></el-table-column>
            <el-table-column prop="phone" label="电话" width="200px"></el-table-column>
            <el-table-column prop="schoolId" label="所属驾校" width="200px" ></el-table-column>
            <el-table-column prop="class" label="训练" >
                <template slot-scope="scope">
                    <el-popover placement="top-start" width="420" trigger="click">
                        <el-table :data="scope.row.class">
                            <el-table-column prop="name" label="课程名称" width="180px"></el-table-column>
                            <el-table-column prop="cost" label="学费" width="120px"></el-table-column>
                            <el-table-column label="" width="120px">
                                <template slot-scope="scope">
                                    <el-button v-on:click="sign(scope.row.name)">报名</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-button slot="reference">课程</el-button>
                    </el-popover>
                </template>
            </el-table-column>
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
                    id:"王境泽",
                    phone:"hhhh",
                    schoolId:"东莞足浴城",
                    class:[
                        {name:"我王境泽就算饿死", cost:100}, 
                        {name:"死外边", cost:166}, 
                        {name:"从这跳下去", cost:244}, 
                        {name:"也不会吃你们一点东西！", cost:177}, 
                        {name:"真香~", cost:9988}]
                },
                {
                    id:"卢本伟",
                    phone:"6666677777",
                    schoolId:"山东蓝翔",
                    class:[
                        {name:"乌鸦坐飞机", cost:100}, 
                        {name:"龙卷风摧毁停车场", cost:101}, 
                        {name:"卢本伟牛逼", cost:9999}]
                },
                {
                    id:"干得漂亮啊马飞",
                    phone:"110",
                    schoolId:"澳门赌场",
                    class:[
                        {name:"火球术", cost:100}, 
                        {name:"灵车漂移", cost:998}, 
                        {name:"食我大屌", cost:100}]
                },
                {
                    id:"芜湖大司马",
                    phone:"2333333333",
                    schoolId:"东莞足浴城",
                    class:[
                        {name:"落地机瞄98K", cost:100}, 
                        {name:"吔屎啦", cost:233}, 
                        {name:"真香", cost:199}]
                }
            ]
        };
    },
    methods: {
        sign: function(className){
            console.log(className);
        }
    }
  }
</script>

<style>
  .el-table {
      text-align: left;
  }
</style>