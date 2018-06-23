<template>
    <div>
        <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        <h2>{{account}}</h2>
    </div>
</template>

<script>
  export default {
      computed: {
          account() {
              console.log(this.$route.params);
              console.log(this.$route.params.account);
              return this.$route.params.account;
          }
      },
    data() {
      return {
        active: 0
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