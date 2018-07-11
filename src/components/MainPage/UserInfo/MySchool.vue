<template>
    <div>
        <el-row>
            <el-col>
                <h3 class="title">驾校信息</h3>
                <el-table :data="school" stripe >
                    <el-table-column prop="id" label="驾校ID" width="150px"></el-table-column>
                    <el-table-column prop="phone" label="电话" width="200px"></el-table-column>
                    <el-table-column prop="email" label="邮箱" ></el-table-column>
                </el-table>
            </el-col>
            <el-col>
                <h3 class="title">教练列表</h3>
                <el-table :data="tableData" stripe >
                    <el-table-column prop="id" label="教练ID" width="150px"></el-table-column>
                    <el-table-column prop="phone" label="电话" width="200px"></el-table-column>
                    <el-table-column prop="class" label="训练" >
                        <template slot-scope="scope">
                            <el-popover placement="top-start" width="420" trigger="click">
                                <el-table :data="scope.row.class">
                                    <el-table-column prop="name" label="课程名称" width="180px"></el-table-column>
                                    <el-table-column prop="cost" label="学费" width="120px"></el-table-column>
                                    <el-table-column label="" width="120px">
                                        <template slot-scope="scope">
                                            <el-button v-on:click="sentMessage(scope.row._id)">报名</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-button slot="reference">课程</el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
  export default {
    computed: {
        ...mapState({
            logged: state => state.user.logged,
            account: state => state.user.account,
            schoolId: state => state.user.schoolId,
            phone: state => state.user.phone,
            role: state => state.user.role
        })
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
            ],
            school : [
                {
                    id:"王境泽",
                    phone:"hhhh",
                    email:"东莞足浴城"
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
    .el-card {
        width: 420px;
        margin-right: 0;
        overflow-x: hidden;
    }
    .el-col{
        margin: 0;
    }
    .box-card {
        width: 300px;
    }
    .title {
        text-align: left;
        font-size: 20px;
    }
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
        margin: 0;
    }
</style>