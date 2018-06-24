<template>
  <div id="back">
      <el-menu
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item class="right" index="1"><i class="top_icon fa fa-home" aria-hidden="true"></i>HomePage</el-menu-item>
            <el-menu-item class="right" index="2"><i class="top_icon fa fa-user-plus" aria-hidden="true"></i>Register</el-menu-item>
            <i id="car_icon" class="fa fa-car" aria-hidden="true"></i>
            <span id="title">To Be Old Driver</span>
        </el-menu>
  <div class="contain">
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
                    this.$router.push({
                        path: '/MainPage/UserInfo',
                        name: 'UserInfo',
                        params: {
                            account: this.account,
                            user: data.user
                        }
                    });
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
        },
        handleSelect(key, keyPath) {
            console.log(key);
            switch(key){
                case '1':
                    this.$router.push('/');
                    break;
                case '2':
                    this.$router.push('/SignIn');
                    break;
                default: break;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
