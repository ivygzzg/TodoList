<template>
    <header class="navbar">

    
       

        
       <div class="space">
       <router-link to="/">
            <img class="logo" :src="logo" id="logo" alt="simbolo">
        </router-link>
        

                        <div>
                            <button class="button-registrarme" @click.prevent="submit()">Log in</button>
                        </div>

        
           
        <modal width ="30%" height = "400px" name ="confirmacion">
        
        
            <div class="confirmacion-modal">
                  <form class="form">

                      <h2 class="text-log-in">Log In</h2>

                        <div class="input-group">
                            
                            <input class="input" placeholder="Usuario" type="name">

                        </div>

                        <div class="input-group">
                            
                            <input class="input" placeholder="Contraseña" type="Password">

                        </div>
                        
                        <a href="#" class="forget" >Forgot your password?</a>

                       
                        
                        



                    </form>  
            <button class="button-main" @click="aceptar" type= "primary" round>aceptar</button>
            </div>
        

        

            </modal>
        

        </div>

        

    

    </header>
</template>

<script>

import logo from "@/assets/logo-01.png"
export default {
       data() {    
        return {
            logo
        }
    },

   methods:{
        submit() {
            console.log("si presione")
            this.$modal.show("confirmacion") 
           
        },

        aceptar(){
             this.$router.push("/")
        }

    }

    }
    


</script>

<style scoped>
.navbar {
    height: 80px;
    width: 100%;
    background: transparent;
   

    /* background: transparent; */
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15); */
}

.space{
     display: flex;
        align-items: center;
        justify-content: space-between;
}



.button-registrarme{
    /* margin-top: 35px; */
    color: white;
    background-color:transparent;
    font-family: 'montserrat-light';
    border-radius: 5px;
    border: transparent;
    font-size: 1.5em;
    text-align: right;
    margin-left: 950px;
    /* margin-bottom: 50px; */
    

}

.confirmacion-modal {
          background: white;
          height: inherit;
          width: inherit;
          display: flex;
          justify-content: center;
          flex-direction: column;


          
      }

      .text-log-in{
          font-size: 3em;
          text-align: center;
          margin-bottom: 45px;
          color: #E82D64;
      }

    .input {
        margin-left: 32px;
    
      border-color: blue;
      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      width: 300px;
    margin-bottom: 30px;
      
  }


    .input::placeholder {
        color: #686868;
        text-align: center;
    }


   .forget {
       margin-left: 105px;
       text-align: center;
   }

.logo{
    height: 50px;
    margin-left: 30px;
    margin-top: 30px;
}

/* .log-in {
    font-size: 1.5em;
    font-family: montserrat-light;
    color: white;
    margin-left: 960px;
} */






</style>


