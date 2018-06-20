<template>
  <div id="contain">
    <el-row>
        <el-button 
            id="signin" 
            type="primary" 
            v-on:click="signin()" 
            display="block"
        >
            Fuck
        </el-button>
    </el-row>
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
    
</style>