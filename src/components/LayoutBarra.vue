<template>
    <header class="barra">

<side-bar></side-bar>
    <div>
   <!-- <img class="icono" :src="icono" id="icono" alt="grafico"> -->
   
   </div>

   <div class="input-">
                            
         <input class="input" placeholder="Buscador de notas" type="name">

    </div>



   <div>

    <router-link to="/landing">
   <img class="logo" :src="logo" id="icono" alt="grafico">
   
   </router-link>

   

   
   </div>

   <div>
    <img class="boton"  :src="boton" id="boton" alt="grafico" @click.prevent="submit()">
     
    </div>

    <modal width ="80%" height = "600px" name ="confirmacion">
                   
                    
                          
                  
                    
    </modal>

    

  


    </header>
</template>

<script>
import icono from "@/assets/hamburguesa.png"
import logo from "@/assets/logo-01.png"
import boton from "@/assets/boton-01.png"
import SideBar from "@/components/SideBar.vue"

export default {
    name: 'layout-barra',
    data(){
        return {
            icono, logo, boton
        }
    },

    components: {
        SideBar,
    }
    


}

</script>

<style scoped>
.barra {
    height: 100px;
    width: 100%;
    background: #3F15F6;
    display: flex;

    /* background: transparent; */
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15); */
}

.input-group{
    
   margin: 0%;

}

.icono{
    height: 30px;
    margin-left: 50px;
    margin-top: 37px;
}

.logo{
    height: 65px;
    margin-left: 145px;
    margin-top: 15px;
    justify-content: center;
   
}

.boton{
    height: 65px;
    margin-left: 470px;
    margin-top: 20px;
}
input{
     
      background-color: white;
      border-color:white;
      color: grey;


      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      


      width: 300px;
      margin-top: 35px;
      margin-left: 130px;
      
  

}








</style>




