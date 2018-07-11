<template>
    <div id="contain">
        <div>
            <el-table id="SchoolTable" :data="schools" stripe style="width: 990px">
                <el-table-column prop="_id" label="驾校ID" width="250px"></el-table-column>
                <el-table-column prop="phone" label="电话" width="250px"></el-table-column>
                <el-table-column prop="email" label="邮箱" width="250px"></el-table-column>
                <el-table-column label="" width="120px">
                    <template slot-scope="scope">
                        <el-button v-on:click="sign(scope.row._id)" v-show="traineeButton">学员报名</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="" width="120px">
                    <template slot-scope="scope">
                        <el-button v-on:click="sign(scope.row._id)" v-show="trainerButton">教练报名</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
  export default {
    computed: {
        ...mapState({
            logged: state => state.user.logged,
            account: state => state.user.account,
            schoolId: state => state.user.schoolId,
            phone: state => state.user.phone,
            role: state => state.user.role,
            schools: state => state.school.schools
        }),
        traineeButton() {
            return this.role == "none";
        },
        trainerButton() {
            return this.role == "none";
        }
    },
    methods: {
        sign: function(schoolId){
            console.log(schoolId);
            var res = $.post('/api/user/applytrainee', {schoolId : schoolId}, (data)=>{
                this.$message({
                        message: data.msg,
                        center: true
                    });
            });
        }
    }
  }
</script>

<style>
    #SchoolTable {
        text-align: left;
        margin-left: auto;
        margin-right: auto;
    }
</style>