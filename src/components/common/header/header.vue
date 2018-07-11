<template>
    <div>
        <el-menu
          default-active="active"
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item class="right" index="LogOut"><i class="top_icon fa fa-sign-out" aria-hidden="true"></i>LogOut</el-menu-item>
            <el-menu-item index="UserInfo">用户中心</el-menu-item>
            <el-menu-item index="ApplySchool">我的申请</el-menu-item>
            <el-menu-item index="AllSchool">驾校信息</el-menu-item>
            <el-badge class="left" :value="num">
                <el-menu-item id="MessageCenter" index="MessageCenter">消息中心</el-menu-item>
            </el-badge>
            <span id="hello">Hello, {{account}}</span>
        </el-menu>
    </div>
</template>

<script>
//import {mapGetters, mapMutations} from 'vuex'
import { mapState } from 'vuex'
export default {
    name: 'header',
    computed: {
        ...mapState({
            logged: state => state.user.logged,
            account: state => state.user.account,
            messages: state => state.user.messages
        }),
        num(){
            return this.messages.length;
        }
    },
    props: {
        active: {
            type: String,
            required: true
        }
    },
    data () {
        return {
        }
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
        top: 0;
        right: 0;
        left: 0;
    }
    .right{
        float: right;
        position: relative;
        right: 50px;
    }

    .left{
        float: left;
        position: relative;
        height: 100%;
        top: 20px;
    }

    #MessageCenter {
        position: relative;
        top: -18px;
    }

    #hello {
        float: right;
        color: white;
        font-size: 18px;
        position: relative;
        top: 20px;
        right: 100px;
    }
    
    .top_icon {
        color: white;
        margin-right: 8px;
    }
</style>