<template>
    <header class="barra">

        <div>
   <img class="icono" :src="icono" id="icono" alt="grafico">
   </div>

   <div class="input-group">
                            
         <input class="input" placeholder="Buscador de notas" type="name">

    </div>



   <div>

    <router-link to="/landing">
   <img class="logo" :src="logo" id="icono" alt="grafico">
   </router-link>

   
   </div>

   <div>
    <img class="boton" :src="boton" id="boton" alt="grafico">
    </div>

    

  


    </header>
</template>

<script>
import icono from "@/assets/hamburguesa.png"
import logo from "@/assets/logo-01.png"
import boton from "@/assets/boton-01.png"

export default {
    name: 'layout-barra',
    data(){
        return {
            icono, logo, boton
        }
    }
    


}

</script>

<style scoped>
.barra {
    height: 100px;
    width: 100%;
    background: blue;
    display: flex;

    /* background: transparent; */
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15); */
}

.icono{
    height: 30px;
    margin-left: 37px;
    margin-top: 37px;
}

.logo{
    height: 65px;
    margin-left: 130px;
    margin-top: 15px;
   
}

.boton{
    height: 65px;
    margin-left: 440px;
    margin-top: 20px;
}
input{
     
      background-color: transparent;
      border-color:white;
      color: white;


      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      


      width: 300px;
      margin-top: 35px;
      margin-left: 50px;
      
  

}








</style>




