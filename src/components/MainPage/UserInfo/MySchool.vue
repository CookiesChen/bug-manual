<template>
    <div>
        <el-row>
            <el-col>
                <h3 class="title">驾校信息</h3>
                <p class="school">驾校ID : {{schoolId}}</p>
            </el-col>
            <el-col>
                <h3 class="title" v-show="onlyTraineeCanSee">教练列表</h3>
                <el-table :data="tableData" stripe v-show="onlyTraineeCanSee">
                    <el-table-column prop="id" label="教练ID" width="150px"></el-table-column>
                    <el-table-column prop="phone" label="电话" width="200px"></el-table-column>
                    <el-table-column prop="class" label="训练">
                        <template slot-scope="scope">
                            <el-button v-on:click="showclass(scope.row.id)">课程</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-dialog title="教练课程" :visible.sync="dialogFormVisible">
            <el-table :data="classtable">
                <el-table-column prop="name" label="课程名称" width="180px"></el-table-column>
                <el-table-column label="报名">
                        <template slot-scope="scope">
                            <el-button v-on:click="sign(scope.row.name)">报名</el-button>
                        </template>
                    </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>
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
        }),
        onlyTraineeCanSee() {
            if(this.role != "none") return true;
            console.log(this.role);
            return false;
        },
    },
    data() {
        return {
            tableData: [
                {
                    id:"trainer1",
                    phone:"456445735425"
                },
                {
                    id:"trainer2",
                    phone:"6666677777"
                },
                {
                    id:"trainer3",
                    phone:"110"
                }
            ],
            classtable : [],
            dialogFormVisible: false
        };
    },
    methods: {
        sign: function(className){
            console.log(className);
            var res = $.post('/api/trainee/jointrain',{name:className}, (data)=>{
                this.$message({
                    message: data.msg,
                    center: true,
                    type: 'success'
                });
            });
        },
        showclass: function(id){
            console.log(id);
            var res = $.post('/api/trainee/gettrainsbyid',{trainerId:id}, (data)=>{
                this.classtable = data.data;
            });
            this.dialogFormVisible = true;
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
    .school {
        text-align: left;
        font-size: 18px;
        font-weight: bold;
        color: rgb(150, 150, 150);
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