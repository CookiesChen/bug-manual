<template>
    <div id="contain">
        <div id="bannerImg">
            <img class="img" src="../../../assets/banner2.jpg"/>
        </div>
        <div id="user">
            <div id="headImg">
                <img class="img" src="../../../assets/head.jpg"/>
            </div>
            <h1>{{account}}</h1>
            <p class="message">{{MyRole}} | {{user.phone}}</p>
        </div>
        <el-menu
            id="guide"
            class="el-menu-vertical-demo"
            @select="handleSelect">
            <el-menu-item index="MyFriend">
                <i class="fa fa-handshake-o" aria-hidden="true"></i>
                <span slot="title">我的好友</span>
            </el-menu-item>
            <el-menu-item index="MyUser">
                <i class="fa fa-address-card" aria-hidden="true"></i>
                <span slot="title">{{MyUserString}}</span>
            </el-menu-item>
            <el-menu-item index="MySchool">
                <i class="fa fa-car" aria-hidden="true"></i>
                <span slot="title">我的驾校</span>
            </el-menu-item>
            <el-menu-item index="MyTrain">
                <i class="fa fa-book" aria-hidden="true"></i>
                <span slot="title">我的训练</span>
            </el-menu-item>
        </el-menu>
        <router-view id="extand"></router-view>
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
        },
        MyUserString(){
            if(this.$route.params.user.role == "trainer"){
                return "我的学员";
            }
            else{
                return "我的教练";
            }
        },
        MyRole(){
            if(this.$route.params.user.role == "trainer"){
                return "教练";
            }
            else{
                return "学员";
            }
        }
    },
    data() {
      return {
        active: 0
      };
    },
    methods: {
        handleSelect(key, keyPath) {
            this.$router.push({
                path: `${key}`,
                name: key,
                params: {
                    account: this.account,
                    user: this.user
                }
            });
        }
    },
    watch: {
        
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #contain {
        position: relative;
    }
    #bannerImg {
        width: 100%;
        position: relative;
        top: -5px;
        white-space: nowrap;
    }
    #bannerImg .img {
        width: 100%
    }
    #user {
        position: relative;
        top: -100px;
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
        top: 80px;
    }
    .message {
        color: #aaaaaf;
        font-size: 20px;
        position: absolute;
        top: 125px;
        left: 250px;
    }
    #guide {
        position: relative;
        text-align: left;
        left: 50px;
        width: 200px;
    }
    #guide i {
        font-size: 20px;
        margin-right: 15px;
    }
    #extand {
        position: relative;
        left: 260px;
        top: -220px;
    }
</style>