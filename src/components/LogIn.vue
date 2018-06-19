<template>
  <div id="contain">
    <el-input id="name"  v-model="name" placeholder="请输入帐号">  
        <template slot="prepend">帐号</template>
        <i slot="prefix" class="el-input__icon fa fa-user" aria-hidden="true"></i>
    </el-input>  
    <el-input id="password" v-model="password" type="password" placeholder="请输入密码">  
        <template slot="prepend">密码</template> 
        <i slot="prefix" class="el-input__icon fa fa-lock" aria-hidden="true"></i>
    </el-input>
    <el-button id="login" type="primary" v-on:click="check" style="width:100%">Log In</el-button>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-row {
        margin-bottom: 20px;
    }.el-row:last-child{
        margin-bottom: 0;
    }
    .el-main {
    margin: auto;
    color: #333;
    text-align: center;
    line-height: 100px;
    }
    .el-button {
        margin-top: 20px;
    }
    .el-input {
        margin-top: 20px;
        width: 60%;
    }
    #contain {
        height: 600px;
        width: 30%;
        margin: auto;
        background-color: #3B4B65;
    }
</style>
