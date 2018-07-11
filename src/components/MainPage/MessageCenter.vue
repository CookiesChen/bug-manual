<template>
    <div id="contain">
        <div id="user">
            <div id="headImg">
                <img class="img" src="../../assets/head.jpg"/>
            </div>
            <h1>{{account}}</h1>
            <p class="message">{{MyRole}} | {{phone}}</p>
        </div>
        <div>
            <el-table id="MessageTable" :data="messages_" stripe style="width: 920px">
                <el-table-column prop="from" label="发送人" width="150px"></el-table-column>
                <el-table-column prop="timeString" label="时间" width="250px"></el-table-column>
                <el-table-column prop="content" label="内容" width="400px"></el-table-column>
                <el-table-column label="" width="120px">
                    <template slot-scope="scope">
                        <el-button v-on:click="finish()">OK</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { formatDate } from '@/tool/formatDate.js'
  export default {
    computed: {
        ...mapState({
            logged: state => state.user.logged,
            account: state => state.user.account,
            schoolId: state => state.user.schoolId,
            phone: state => state.user.phone,
            role: state => state.user.role,
            messages: state => state.user.messages
        }),
        messages_(){
            var messages_ = this.messages;
            for(var i in messages_){
                var date = new Date(messages_[i].time);
                messages_[i].timeString = formatDate(date, 'yyyy-MM-dd hh:mm');
            }
            if(messages_.length == 0) return [];
            return messages_;
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
    methods: {
        finish: function(){

        }
    }
  }
</script>

<style>
    #contain {
        position: relative;
    }
    #MessageTable {
        text-align: left;
        margin-left: auto;
        margin-right: auto;
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