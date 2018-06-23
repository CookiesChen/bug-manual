<template>
    <div id="contain">
        <div id="user">
            <div id="headImg">
                <img class="img" src="../../assets/head.jpg"/>
            </div>
            <h1>{{account}}</h1>
            <p class="message">{{user.phone}} | {{user.phone}}</p>
        </div>
        <div id="ApplyTable">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="id" label="驾校ID" width="200px"></el-table-column>
                <el-table-column prop="phone" label="电话" width="200px"></el-table-column>
                <el-table-column prop="phone" label="邮箱" width="200px"></el-table-column>
                <el-table-column prop="phone" label="申请时间" width="200px"></el-table-column>
                <el-table-column label="审核状态">
                    <template slot-scope="scope">
                        <el-tag :type="scope.row.state | statusFilter">{{scope.row.state | formatState}}</el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
  export default {
      filters: {
          statusFilter(status){
              const statusMap = {
                  true: 'success',
                  false: 'info'
              }
              return statusMap[status];
          },
          formatState(status){
              const statusMap = {
                  true: '已通过',
                  false: '审核中'
              }
              return statusMap[status];
          },
      },
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
          tableData: [
              {
                  id: "山东蓝翔",
                  phone: "12345",
                  state: true
              },
              {
                  id: "东莞足浴城",
                  phone: "808088957456",
                  state: false
              },
              {
                  id: "澳门赌场",
                  phone: "77777777777",
                  state: true
              },
              {
                  id: "美女荷官在线发牌",
                  phone: "66666",
                  state: true
              }
          ]
      };
    },
    methods: {
        
    },
    watch: {
        
    }
  }
</script>

<style>
    #contain {
        position: relative;
    }

    .el-table {
        text-align: left;
    }
    
    #ApplyTable {
        margin-left: auto;
        margin-right: auto;
        width: 60%;
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