<template>
  <div id="contain">
    <el-row>
        <i id="top_pic" class="fa fa-car"></i>
    </el-row>
    <el-row id="account">
        <el-input v-model="account" placeholder="请输入帐号" clearable>  
            <template slot="prepend">帐号</template>
            <i slot="prefix" class="el-input__icon fa fa-user" aria-hidden="true"></i>
        </el-input>
    </el-row>
    <el-row id="password">  
        <el-input v-model="password" type="password" placeholder="请输入密码" clearable>  
            <template slot="prepend">密码</template> 
            <i slot="prefix" class="el-input__icon fa fa-lock" aria-hidden="true"></i>
        </el-input>
    </el-row>
    <el-row>
        <el-button 
            id="login" 
            type="primary" 
            v-on:click="login()" 
            display="block"
        >
            登录
        </el-button>
    </el-row>
    <el-row>
        <el-button 
            id="signin" 
            type="primary" 
            v-on:click="signin()" 
            display="block"
        >
            注册
        </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data () {
    return {
      account : "",
      password : ""
    }
  },
    methods:{
        login:function(){
            var account = this.account;
            var password = this.password;

            //test
            if(account == "" || password == ""){
                this.$message({
                    message: 'The account or password can\'t be empty',
                    center: true,
                    type: 'error'
                });
                return;
            }

            var res = $.post('/api/login',{account:account, password:password}, (data)=>{
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
        },
        signin:function(){
            this.$router.push('/SignIn');
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
    #login {
        margin-top: 200px;
    }
    #top_pic {
        font-size: 40px;
        color: white;
        position: relative;
        top: 20px;
    }
</style>
