<template>
    <div>
        <el-table :data="schoolMembers" stripe style="width: 80%">
            <el-table-column prop="_id" label="ID" width="150px"></el-table-column>
            <el-table-column prop="phone" label="电话" width="200px"></el-table-column>
            <el-table-column label="">
                <template slot-scope="scope">
                    <el-button v-on:click="sentMessage(scope.row._id)">发送消息</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="发送消息" :visible.sync="dialogMessageVisible">
            <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="message.content">
            </el-input>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogMessageVisible = false">取 消</el-button>
                <el-button type="primary" v-on:click="sent()">发 送</el-button>
            </div>
        </el-dialog>
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
            role: state => state.user.role,
            schoolMembers: state => state.user.schoolMembers
        })
    },
    data() {
        return {
            dialogMessageVisible: false,
            message: {
                to: '',
                content: ''
            }
        };
    },
    methods: {
        sentMessage: function(toId){
            console.log(toId);
            this.message.to = toId;
            this.dialogMessageVisible = true;
        },
        sent: function() {
            var to = this.message.to;
            var content = this.message.content;
            var res = $.post('/api/user/sentmessage',{to:to, content:content}, (data)=>{
                if(data.status == true) {
                    this.$message({
                        message: data.msg,
                        center: true,
                        type: 'success'
                    });
                    this.dialogMessageVisible = false;
                }
                else {
                    this.$message({
                        message: data.msg,
                        center: true,
                        type: 'error'
                    });
                }
            });
        }
    }
  }
</script>

<style>
  .el-table {
      text-align: left;
  }
</style>