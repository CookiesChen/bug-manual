<template>
    <div>
        <el-table :data="trains_" stripe style="width: 80%">
            <el-table-column prop="name" label="训练" width="150px"></el-table-column>
            <el-table-column prop="trainer" label="教练" width="150px"></el-table-column>
            <el-table-column prop="starttimeString" label="开始时间" width="200px"></el-table-column>
            <el-table-column prop="endtimeString" label="结束时间" width="200px"></el-table-column>
            <el-table-column label="学员" >
                <template slot-scope="scope">
                        <el-popover placement="top-start" width="360" trigger="click">
                            <el-table :data="scope.row.trainees">
                                <el-table-column prop="_id" label="ID" width="100px"></el-table-column>
                                <el-table-column prop="phone" label="电话" width="140px"></el-table-column>
                                <el-table-column label="" width="120px">
                                    <template slot-scope="scope">
                                        <el-button v-on:click="sentMessage(scope.row._id)">发送消息</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-button slot="reference">查看学员</el-button>
                        </el-popover>
                    </template>
            </el-table-column>
        </el-table>
        <el-row id="createTrain" v-show="onlyTrainerCanSee">
            <el-button 
                id="create" 
                type="primary" 
                @click="dialogFormVisible = true" 
                display="block"
            >
                创建训练
            </el-button>
        </el-row>
        <el-dialog title="创建训练" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="训练名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="训练时间" :label-width="formLabelWidth">
                    <div>
                        <el-date-picker
                            v-model="form.trainTime"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            value-format="yyyy-MM-dd hh:mm:ss">
                        </el-date-picker>
                    </div>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" v-on:click="createTrain()">创 建</el-button>
            </div>
        </el-dialog>
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
    import { formatDate } from '@/tool/formatDate.js'
    export default {
    computed: {
        ...mapState({
            logged: state => state.user.logged,
            account: state => state.user.account,
            schoolId: state => state.user.schoolId,
            phone: state => state.user.phone,
            role: state => state.user.role,
            myTrains: state => state.user.myTrains
        }),
        onlyTrainerCanSee() {
            if(this.role == "trainer") return true;
            console.log(this.role);
            return false;
        },
        trains_() {
            var trains_ = this.myTrains;
            for(var i in trains_){
                var date1 = new Date(trains_[i].starttime);
                var date2 = new Date(trains_[i].endtime);
                trains_[i].starttimeString = formatDate(date1, 'yyyy-MM-dd hh:mm');
                trains_[i].endtimeString = formatDate(date2, 'yyyy-MM-dd hh:mm');
            }
            if(trains_.length == 0) return [];
            return trains_;
        }
    },
    data() {
        return {
            dialogFormVisible: false,
            dialogMessageVisible: false,
            formLabelWidth: '120px',
            message: {
                to: '',
                content: ''
            },
            form: {
                name: '',
                trainTime: '',
                registtime: ''
            }
        };
    },
    methods:{
        createTrain:function() {
            console.log(this.form);
            var name = this.form.name;
            var starttime = this.form.trainTime[0];
            var endtime = this.form.trainTime[1];
            var registtime = new Date();
            var res = $.post('/api/trainer/registtrain',{name:name, starttime:starttime, endtime:endtime, registtime:registtime}, (data)=>{
                console.log(data);
                if(data.status == true) {
                    this.$message({
                        message: data.msg,
                        center: true,
                        type: 'success'
                    });
                    this.dialogFormVisible = false;
                    var res = $.get('/api/trainer/getmytrains',(data)=>{
                        this.$store.commit('setMyTrains', data.data);
                    });
                }
                else {
                    this.$message({
                        message: data.msg,
                        center: true,
                        type: 'error'
                    });
                }
            });
        },
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
  #createTrain {
      text-align: left;
      margin-top: 20px;
      margin-left: 20px;
  }
  .studentName {
      font-size: 15px;
      margin-left: 30px;
      transform: translateY(-5px);
  }

</style>