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
            <p class="message">{{MyRole}} | {{phone}}</p>
        </div>
        <el-menu
            id="guide"
            class="el-menu-vertical-demo"
            @select="handleSelect">
            <el-menu-item index="MyFriend">
                <i class="fa fa-handshake-o" aria-hidden="true"></i>
                <span slot="title">{{MyFriendString}}</span>
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
    import {mapState} from 'vuex'
  export default {
    computed: {
        ...mapState({
            logged: state => state.user.logged,
            account: state => state.user.account,
            schoolId: state => state.user.schoolId,
            phone: state => state.user.phone,
            role: state => state.user.role
        }),
        MyUserString(){
            if(this.role == "trainer"){
                return "我的学员";
            }
            else{
                return "我的教练";
            }
        },
        MyFriendString(){
            if(this.role == "trainer"){
                return "我的同事";
            }
            else{
                return "我的同学";
            }
        },
        MyRole(){
            if(this.role == "trainer"){
                return "教练";
            }
            if(this.role == "trainee"){
                return "学员";
            }
            else{
                return "未确定身份";
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
            if(key == "MySchool"){

            }
            else if(key == "MyFriend"){
                if(this.role == "trainer"){

                }
                else if(this.role == "trainee"){    
                    var res = $.get('/api/trainee/getclassmate',(data)=>{
                        this.$store.commit('setMembers', data.data);
                        this.$router.push({
                            name: "MyFriend"
                        });
                    });
                }
            }
            else if(key == "MyUser") {
                if(this.role == "trainer"){

                }
                else if(this.role == "trainee"){    
                    var res = $.get('/api/trainee/gettrainer',(data)=>{
                        this.$store.commit('setMembers', data.data.trainers);
                        this.$router.push({
                            name: "MyUser"
                        });
                    });
                }
            }
            else if(key == "MyTrain"){
                if(this.role == "trainer"){
                    var res = $.get('/api/trainer/getmytrains',(data)=>{
                        this.$store.commit('setMyTrains', data.data);
                        this.$router.push({
                            name: "MyTrain"
                        });
                    });
                }
                else if(this.role == "trainee"){
                    var res = $.get('/api/trainee/getmytrains',(data)=>{
                        this.$store.commit('setMyTrains', data.data);
                        this.$router.push({
                            name: "MyTrain"
                        });
                    });
                }   
            }
            this.$router.push({
                path: `${key}`,
                name: key
            });
        }
    },
    watch: {
        
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
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
        /*white-space: nowrap;*/
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