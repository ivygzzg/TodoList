<template>

<div class="bienvenido-container">

    <div class="bienvenido">
    <h1 class="texto" >
        !Hola!
    </h1>
    <p class="texto-1">Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit. 
     Inventore  <br> autem laborum aliquid nam  laudantium <br> ratione modi, voluptatibus 
      excepturi veniam officia.</p>

      <div class="main-button">
                <button class="button" @click.prevent="submit()">Empieza Hoy</button>
      </div>

        <div>
      <p class="aprende">Aprende más</p>
      </div>
      </div>

      <div class="info3">
          
          <img  class="imagen3" :src="info3" id="info3" alt="info3">
      </div>

       <!-- <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
        <img src="info3" alt="info3" class="info3">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel> -->


            
  

</div>
</template>

<script scoped>

import info3 from "@/assets/info3.png"

export default {

     data() { 

    return {
            info3
    }
},

  methods:{
        submit() {
            console.log("si presione")
            this.$router.push("/") 
           
        },

    }

}
</script>

<style>

  *{
    margin: 0%;
    padding: 50%;
    box-sizing: 0%;


    
    
}

.bienvenido {
    background-color: white;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: column;
    height: 100vh;
    margin-left: 150px;
}

.bienvenido-container{
    display: flex;
    align-content: space-around;

}

.button {

        color: white;
        background-color: rgb(232, 45, 100);
        font-family: 'montserrat-light';
        border-radius: 5px;
        border: solid rgb(232, 45, 100);
        padding: 5px 100px;
        font-size: 2em;
        box-shadow: 4px 5px 20px rgb(46, 50, 56);
        margin-top: 60px; 
        }

.texto{
    font-family: montserrat-light;
    font-size: 7em;
    color: blue;
    margin-top: 50px;
}

.imagen3{
    height: 500px;
    margin-top: 75px;
}


.texto-1{
    text-align: left;
    color: grey;
    margin-top: 40px;
    font-size: 1.3em;
    font-family: montserrat-light;
}


.aprende {
    margin-top: 40px;
}

.el-carousel {
    overflow: none;
}

.el-carousel__container {
    width: 1000px;
    margin-left: 100px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

   .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>


