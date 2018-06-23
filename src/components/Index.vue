<template>
    <div id="contain">
        <el-menu
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item class="right" index="1">LogIn</el-menu-item>
            <el-menu-item class="right" index="2">Register</el-menu-item>
        </el-menu>
        <el-carousel :interval="4000" arrow="always">
            <el-carousel-item>
                <img class="img" src="../assets/b1.jpg"/>
            </el-carousel-item>
            <el-carousel-item>
                <img class="img" src="../assets/b2.jpg"/>
            </el-carousel-item>
            <el-carousel-item>
                <img class="img" src="../assets/b1.jpg"/>
            </el-carousel-item>
            <el-carousel-item>
                <img class="img" src="../assets/b2.jpg"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
  export default {
    data() {
      return {
       
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key);
            switch(key){
                case '1':
                    this.$router.push('/login');
                    break;
                case '2':
                    this.$router.push('/SignIn');
                    break;
                default: break;
            }
      }
    }
  }
</script>

<style scoped>
    #contain {
        background-color: #99a9bf;
    }
    .el-menu-demo {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
    }
    .right{
        float: right;
        position: relative;
        right: 50px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 30px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel{
        height: 600px;
    }

    .el-carousel__item{
        height: 600px;
        background-color: #99a9bf;
    }
    .el-carousel__item img{
        position: relative;
        top: -200px;
    }
  
    .el-carousel__item .img {
        width: 100%;
    }
    
</style>