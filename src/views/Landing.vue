<template>
  <div class="landing">

  <navbar> </navbar> 

    <section class="main">

        <div class="container-main">

            

            <div class="text">
                <h1 class="text-style">Lorem ipsum dolor sit amet <br> consectetur adipiscing </h1>
                
                <!-- <img :src="fondo" id="fondo" alt="simbolo"> -->
                
            </div>
            <div class="text-1">
                <p class="style-p">Lorem ipsum dolor sit amet</p>
            </div>



            <div class="main-button">
                <button class="button-main" @click.prevent="submit()">Suscribete</button>
            </div>

            <div class="main-link">
                <p>Aprende Más</p>
            </div>

            <div class="main-flecha">
                  <img :src="flecha" id="flecha" alt="simbolo">
            </div>

            
            

        </div>

    </section>


    <section class="container">

        <div class="organiza-cantainer">
            <div class="imagen-container">
                <h2 class="lorem1">Lorem Ipsum Dolor</h2>
                <p class="text-organiza">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit fdksfj <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus </p>
            </div>
        </div>

        <div class="organiza-1">
            
            <div class="imagen-container-1">
                <h2 class="lorem2">Lorem ipsum dolor.</h2>
                <p class="text-organiza-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit fdksfj <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus</p>
            </div>
        </div>

        <div class="organiza-2">
            
            <div class="imagen-container-2">
                <h2 class="lorem3">Lorem ipsum dolor.</h2>
                <p class="text-organiza-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit fdksfj <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus</p>
            </div>
        </div>

      

    </section>

      <div class="todolist5">
          <img :src="arrow05" id="arrow05" alt="simbolo">
      </div>

    
    

    <ivonne-footer></ivonne-footer>

     
  </div>

  


</template>

<script>
import fondo from "@/assets/fondo.png"
import navbar from "@/components/NavBar.vue"
import flecha from "@/assets/flecha.png"
import arrow05 from "@/assets/arrow05.png"
// import indo2 from "@/assets/indo2.png"
// import info3 from "@/assets/info3.png"
import footer from "@/components/Footer.vue"



export default {
    data() {    
        // return {
        //     fondo
        // }

        return {
            flecha, arrow05
        }

    },



     methods:{
        submit() {
            console.log("si presione")
            this.$router.push("/registro") 
           
        },


    },

    components: {

        navbar, 'ivonne-footer': footer
    }
    
}
</script>


<style scoped>

  *{
    margin: 0%;
    padding: 0%;
    box-sizing: 0%;

        
    
}

    .landing {
        background-image: url("../assets/fondo.png");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: contain;
        
    }


   




.main{

    height: 100vh;
    
}

.container-main{
    position: relative;

}


#simbolo{

    position: absolute;
    display: flex;
    margin-top: -55px;
}
.text{

    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 100px;
    color: white;
    
}

.text-style{

    font-size: 4em;
    font-family: value;
    line-height: 1em;
    letter-spacing: 0.02em;
    z-index: 1;
    transition: 0.5s;
}

.text-1{
    display: flex;
    justify-content: center;
    color: white;
    padding-top: 7px;
    




}


.style-p{

    font-family: montserrat-light;
    font-size: 1.8em;
    z-index: 1;

}

.main-link{
    display: flex;
    justify-content: center;
    padding-top: 70px;
    color: white;
    font-family: montserrat-light;
}

.main-button{
    display: flex;
    justify-content: center;
    padding-top: 50px;
}

.button-main{
    color: white;
    background-color: rgb(232, 45, 100);
    font-family: 'montserrat-light';
    border-radius: 5px;
    border: solid rgb(232, 45, 100);
    padding: 10px 70px;
    font-size: 1.5em;
    box-shadow: 4px 5px 20px rgb(16, 64, 151);
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;

}

.button-main:hover,.form button:active,.form button:focus {
           background: rgb(243, 61, 115);
           border: solid rgb(243, 61, 115);
        }










.imagen-container{
    text-align: right;
    margin-left: 450px;
    
}


 .organiza-cantainer{
    display: flex;
    align-items: center;
    background: white;
    box-shadow: 10px 10px 80px  rgb(15, 45, 100);
    border-radius: 5px;
    margin-bottom: 100px;
    height: 300px;


    background-image: url("../assets/info1.png");
    background-repeat: no-repeat;
    background-position: -5.5%;
    background-size: auto;
    
    
    

}




 h2{
    
    font-family: value;
    color: blue;
    
} 

.lorem1{
    font-size: 3em;
    line-height: 1.5em;
} 

 .text-organiza{
    font-size: 1.1em;
    font-family: montserrat-light;
    line-height: 2em;
    

    
} 
   
.main-flecha{
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

#flecha{
    height: 20px;
}


/*segunda imagen*/

 .organiza-1{
   
   
   
    background: white;
    box-shadow: 10px 10px 80px;
    border-radius: 5px;
    margin-bottom: 100px;
    height: 300px;

    background-image: url("../assets/indo2.png");
    background-repeat: no-repeat;
    background-position: 105%;
    background-size: auto;
    
}

#no-1{
    height: 278px;
    margin-right: -25px;
    margin-bottom: -17px;
}




    


 .lorem2{
    font-size: 3em;
    line-height: 1.5em;
} 

.text-organiza-1{
     font-size: 1.1em;
    font-family: montserrat-light;
    line-height: 2em;
    
   
   
}

.imagen-container-1{
    padding: 70px;
    text-align: left;
}


.imagen-container-2{    
    padding: 70px;
    text-align: right;
    margin-left: 450px;
}

 .organiza-2{
    /* display: flex;
    align-items: center; */
    background: white;
    box-shadow: 10px 10px 80px;
    border-radius: 5px;
    margin-bottom: 0px;
    height: 300px;

     background-image: url("../assets/info3.png");
    background-repeat: no-repeat;
    background-position: -5.5%;
    background-size: auto;
    
    

}

.imagen-container-2{
    margin-left: 50px;
} 


#no-2{
    height: 278px;
    margin-left: -25px;
    margin-bottom: -17px;

}

 h2{
    font-size: 2em;
    font-family: value;
    
}

.text-organiza-2{
    font-size: 1.1em;
    font-family: montserrat-light;
    line-height: 2em;
    
   
   
} */


.button-footer{
   width: 100%;
   color: white;
   background-color: rgb(232, 45, 100);
   font-family: 'value';
   border-radius: 5px;
   border: solid rgb(232, 45, 100);
   padding: 10px 70px;
   font-size: 1.5em;
   box-shadow: 4px 5px 20px rgb(16, 64, 151);
}


.todolist5{
    background-color: white;
    height: 100px;

    background-image: url("../assets/todolist05.png");
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 50px;
    background-size: 20%;
    margin-bottom: 30px;
    
}

#arrow05{
    height: 100px;
    float: right;
    margin-right: 50px;
    margin-bottom: 30px;
}

.lorem3{
    font-size: 3em;
    line-height: 1.5em;
}
</style>

