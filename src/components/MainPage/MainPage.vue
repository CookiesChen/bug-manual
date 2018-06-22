<template>
    <div>
        <el-menu
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item class="right" index="1">LogOut</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      account : "",
      password : ""
    }
  },
    methods:{
        login:function(){
            console.log(1);
            var account = this.account;
            var password = this.password;
            $.post('/api/login',{account:account, password:password});
        },
        signin:function(){
            this.$router.push('/SignIn');
        },
        handleSelect(key, keyPath) {
            console.log(key);
            switch(key){
                case '1':
                    this.$router.push('/login');
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
    .el-menu-demo {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
    }
    .right{
        float: right;
        position: relative;
        right: 50px;
    }
    
</style>