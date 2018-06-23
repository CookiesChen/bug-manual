<template>
    <div id="contain">
        <div id="user">
            <div id="headImg">
                <img class="img" src="../../assets/head.jpg"/>
            </div>
            <h1>{{account}}</h1>
            <p class="message">{{user.phone}} | {{user.phone}}</p>
        </div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{account}}
            </div>
        </el-card>
    </div>
</template>

<script>
  export default {
      computed: {
            account() {
                return this.$route.params.account;
            },
            user(){
                return this.$route.params.user;
            }
      },
    data() {
      return {
      };
    },
    methods: {
        next() {
            if (this.active++ > 2) this.active = 0;
        }
    },
    watch: {
        
    }
  }
</script>

<style>
    #contain {
        position: relative;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    } 

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
        position: relative;
        top: 50px;
    }

    #user {
        position: relative;
        top: 10px;
        left: 120px;
    }
    #headImg {
        width: 180px;
        height: 180px;
        position: relative;
        white-space: nowrap;
    }
    #headImg .img {
        border-radius: 50%;
        width: 100%;
        border: 5px solid white;
    }
    h1 {
        text-align: left;
        position: absolute;
        left: 250px;
        top: 50px;
    }
    .message {
        color: #aaaaaf;
        font-size: 20px;
        position: absolute;
        top: 60px;
        left: 380px;
    }
</style>