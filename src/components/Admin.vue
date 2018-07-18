<template>
    <div>
        <el-menu
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item class="right" index="LogOut"><i class="top_icon fa fa-sign-out" aria-hidden="true"></i>LogOut</el-menu-item>
            <i id="car_icon" class="fa fa-car" aria-hidden="true"></i>
            <span id="title">To Be Old Driver</span>
        </el-menu>
        <h2>管理员界面</h2>
        <h3>schoolId : {{schoolId}}</h3>
        <el-table id="ApplyTable" :data="applylist" stripe style="width: 990px">
            <el-table-column prop="account" label="申请ID" width="250px"></el-table-column>
            <el-table-column prop="role" label="申请身份" width="250px"></el-table-column>
            <el-table-column label="处理">
                <template slot-scope="scope">
                    <el-button v-on:click="agree(scope.row.account, scope.row.role)">同意申请</el-button>
                </template>
            </el-table-column>
        </el-table>   
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Admin',
    computed: {
        ...mapState({
            logged: state => state.user.logged,
            account: state => state.user.account,
            schoolId: state => state.user.schoolId,
            phone: state => state.user.phone,
            role: state => state.user.role,
            applylist: state => state.user.applylist
        })
    },
    methods:{
        handleSelect(key, keyPath) {
            if(key == "LogOut"){
                this.$store.commit('logout');
                this.$router.push('/login');
            }
            else{
                this.$emit('update:active', key);
            }
        },
        agree(account, role){
            if (role == "trainee"){
                var res = $.post('/api/school/accepttraninee',{account:account}, (data)=>{
                    this.$message({
                        message: data.msg,
                        center: true,
                        type: 'success'
                    });
                });
            }
            else {
                var res = $.post('/api/school/accepttraniner',{account:account}, (data)=>{
                    this.$message({
                        message: data.msg,
                        center: true,
                        type: 'success'
                    });
                });
            }
        }
    }
}
</script>

<style scoped>
    .el-button {
        margin-top: 30px;
        width: 60%;
    }
    .el-input {
        width: 60%;
        margin-bottom: 30px;
        
    }

    #account{
        margin-top: 80px;
    }
    .contain {
        height: 500px;
        width: 380px;
        margin: auto;
        z-index: 1;
        position: relative;
        top: 120px;
        border-radius: 10px;
        background-position: center top;
        background-size: cover;
        overflow: hidden;
        box-shadow: 8px 8px 20px rgba(46, 49, 49, 0.4);
    }
    .contain::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        
        /*background-image: url(../assets/city.jpg) ;*/
        background-color: rgba(255,255,255,0.3);
    }
    #login {
        margin-top: 40px;
    }
    #top_pic {
        font-size: 30px;
        color: white;
        position: relative;
        top: 35px;
    }
    #back {
        background: url(../assets/city.jpg) no-repeat;
        height: 100%;
        position: relative;
    }
    .el-menu-demo {
        border: 0px;
    }
    .right{
        float: right;
        position: relative;
        right: 50px;
    }
    #title {
        float: left;
        color: white;
        font-size: 30px;
        position: relative;
        left: 100px;
        top: 15px;
    } 
    #car_icon {
        float: left;
        color: white;
        font-size: 30px;
        position: relative;
        left: 80px;
        top: 15px;
    }
    .top_icon {
        color: white;
        margin-right: 8px;
    }
    #ApplyTable {
        text-align: left;
        margin-left: auto;
        margin-right: auto;
    }
</style>