<template>
  <div id="contain">
    <el-row>
        <i id="top_pic" class="fa fa-user-plus"></i>
    </el-row>
    <el-row id="name_row">
        <el-input id="account" v-model="account" placeholder="请输入帐号" clearable>  
            <template slot="prepend">帐号</template>
            <i slot="prefix" class="el-input__icon fa fa-user" aria-hidden="true"></i>
        </el-input>
    </el-row>
    <el-row id="phone_row">
        <el-input id="phone" v-model="phone" placeholder="请输入手机号" clearable>  
            <template slot="prepend">手机</template>
            <i slot="prefix" class="el-input__icon fa fa-phone" aria-hidden="true"></i>
        </el-input>
    </el-row>
    <el-row id="password_row">  
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码" clearable>  
            <template slot="prepend">密码</template> 
            <i slot="prefix" class="el-input__icon fa fa-lock" aria-hidden="true"></i>
        </el-input>
    </el-row>
    <el-row id="ensure_password_row">  
        <el-input id="ensure_password" v-model="sure_password" type="password" placeholder="请确认密码" clearable>  
            <template slot="prepend">确认</template> 
            <i slot="prefix" class="el-input__icon fa fa-unlock-alt" aria-hidden="true"></i>
        </el-input>
    </el-row>
    <el-row>
        <el-button id="submit" type="primary" v-on:click="submit()" display="block">提交</el-button>
    </el-row>
    <el-row>
        <el-button id="reset" type="primary" v-on:click="reset()" display="block">重置</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data () {
    return {
        account:'',
        phone:'',
        password:'',
        sure_password:''
    }
  },
    methods:{
        submit:function(){
            var account = this.account;
            var password = this.password;
            var sure_password = this.sure_password;
            var phone = this.phone;
            var error_msg = "";

            //test
            if(account == "" || password == "" || sure_password == "" || phone == ""){
                error_msg = "Messages can\'t be empty";
            }
            else if(password != sure_password) {
                error_msg = "Two passwords are different";
            }
            else {
                var res = $.post('/api/regist',{account:account, password:password, phone:phone}, (data)=>{
                    console.log(data);
                    if(data.status == true){
                        this.$router.push('/MainPage');
                    }
                    else{
                        this.$message({
                            message: data.msg,
                            center: true,
                            type: 'error'
                        });
                    }
                });
            }

            if(error_msg != ""){
                this.$message({
                    message: error_msg,
                    center: true,
                    type: 'error'
                });
            }
                   
        },
        reset:function(){
            this.account = '';
            this.phone = '';
            this.password = '';
            this.sure_password = '';
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-button {
        margin-top: 20px;
        width: 60%;
    }
    .el-input {
        width: 60%;
        margin-bottom: 30px;
        position: relative;
        top: 50px;
    }
    #contain {
        height: 550px;
        width: 30%;
        margin: auto;
        background-color: #D3DCE6;
    }
    #submit {        
        margin-top: 60px;
    }
    #top_pic {
        font-size: 40px;
        color: white;
        position: relative;
        top: 20px;
    }
</style>
