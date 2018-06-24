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
            <el-menu-item class="right" index="2"><i class="top_icon fa fa-sign-in" aria-hidden="true"></i>LogIn</el-menu-item>
            <i id="car_icon" class="fa fa-car" aria-hidden="true"></i>
            <span id="title">To Be Old Driver</span>
    </el-menu>
  <div class="contain">
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
                        this.$router.push({
                            path: '/MainPage/UserInfo',
                            name: 'UserInfo',
                            params: {
                                account: this.account
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
        },
        handleSelect(key, keyPath) {
            console.log(key);
            switch(key){
                case '1':
                    this.$router.push('/');
                    break;
                case '2':
                    this.$router.push('/LogIn');
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
        margin-top: 20px;
        width: 60%;
    }
    .el-input {
        width: 60%;
        margin-bottom: 30px;
    }
    #name_row{
        margin-top: 60px;
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
    #top_pic {
        font-size: 30px;
        color: white;
        position: relative;
        top: 35px;
    }
    #submit {        
        margin-top: 0px;
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
