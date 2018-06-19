<template>
  <div>
    <el-main>
        <el-row>  
            <el-col>  
                <el-input id="name"  v-model="name" placeholder="请输入帐号">  
                    <template slot="prepend">帐号</template>
                </el-input>   
            </el-col>  
        </el-row>  
        <el-row>  
            <el-col>  
                <el-input id="password" v-model="password" type="password" placeholder="请输入密码">  
                    <template slot="prepend">密码</template>  
                </el-input>  
            </el-col>  
        </el-row>  
        <el-row>  
            <el-col :span="8">  
                <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>  
            </el-col>  
        </el-row>
    </el-main>
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
    height: 30%;
    width: 30%;
    margin: auto;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    }
</style>
