<template>
    <div id="contain">
        <el-menu
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item class="right" index="1"><i class="top_icon fa fa-sign-in" aria-hidden="true"></i>LogIn</el-menu-item>
            <el-menu-item class="right" index="2"><i class="top_icon fa fa-user-plus" aria-hidden="true"></i>Register</el-menu-item>
            <i id="car_icon" class="fa fa-car" aria-hidden="true"></i>
            <span id="title">To Be Old Driver</span>
        </el-menu>
        <el-carousel :interval="1800" arrow="always">
            <el-carousel-item>
                <img class="img" src="../assets/car.jpg"/>
            </el-carousel-item>
            <el-carousel-item>
                <img class="img" src="../assets/car2.jpg"/>
            </el-carousel-item>
            <el-carousel-item>
                <img class="img" src="../assets/car3.jpg"/>
            </el-carousel-item>
        </el-carousel>
        <p class="poem">秋名山上行人稀，常有车手较高低</p>
        <p class="poem">如今山路依旧在，不见当年老司机</p>
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
        
    }
    .el-menu-demo {
        border: 0px;
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
        height: 700px;
        position: relative;
    }

    .el-carousel__item{
        height: 700px;
    }
    .el-carousel__item img{
        position: relative;
        top: -200px;
    }
  
    .el-carousel__item .img {
        width: 100%;
    }

    #title {
        float: left;
        color: white;
        font-size: 30px;
        position: relative;
        left: 100px;
        top: 15px;
    }
    
    #car_icon {
        float: left;
        color: white;
        font-size: 30px;
        position: relative;
        left: 80px;
        top: 15px;
    }
    .poem {
        font-size: 22px;
    }
    
    .top_icon {
        color: white;
        margin-right: 8px;
    }
</style>