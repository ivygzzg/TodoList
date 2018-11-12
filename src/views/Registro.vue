<template>

    <div class ="container">

        <div class="header">
            <h1 class="text">Crear tu Cuenta</h1>
        </div>

                    <form class="form">

                        <div class="input-group">
                            
                            <input class="input" placeholder="Nombre" type="name">

                        </div>

                        <div class="input-group">
                            
                            <input class="input" placeholder="Email" type="name">

                        </div>

                         <div class="input-group">
                            
                            <input class="input" placeholder="Constraseña" type="Password">

                        </div>

                         <div class="input-group">
                            
                            <input class="input" placeholder="Confirmar Contraseña" type="Password">

                        </div>

                        <div class="forget" >
                        <a href="#">Forgot your password?</a>
                        </div>
                        
                        <div>
                            <button class="button-registrarme" @click.prevent="submit()">Registrarme</button>
                        </div>

                        <!-- <router-link to="/">
                        <img :src="info1" id="info1" alt="simbolo">
                    </router-link> -->

                    </form>   

                    <modal width ="80%" height = "600px" name ="confirmacion">
                    <!-- <modal name="confirmacion" class="modal-tamaño" wid> -->
                       
                       <div class="confirmacion-modal">

                            <h1 class="confirmar-texto">Confirma tu correo</h1>
                            <div> <p class="confirmar-parrafo">Lorem ipsum dolor sit amet, consectetur  <br> 
                            adipisicing elit, sed do eiusmod.</p> </div>
                             

                            <!-- <button class="button-aceptar"  @click="aceptar" type="primary" round >aceptar</button> -->
                            <button class="button-main" @click="aceptar" type= "primary" round>aceptar</button>
                            

                    </div>
                    
                          
                  
                    
                   
                    
                    

                

                    </modal>
    </div>

</template>


<script>



export default {

    data() {    
        return {
            info1
        }
    },
    methods:{
        submit() {
            console.log("si presione")
            this.$modal.show("confirmacion") 
           
        },

        aceptar(){
             this.$router.push("/bienvenido")
        }

    }
    
}
</script>

<style scoped>


    
    .container {

        display: flex;
        background: white;
        justify-content: left;
        align-items: center;
        width: 100%;
        flex-direction: column;
        /* transition: transform 0.5s ease;
        transform: translate3d(100%, 0, 0); */ 

  }

  /* .container.is-visible {
  transform: translate3d(0, 0, 0);
} */

.header {
    margin-top:40px; 
}

  .form {
      display: flex;
        justify-content: left;
        align-items: center;
        width: 100%;
        flex-direction: column;

  }

  .text{
      font-size: 4rem;
      font-family: montserrat-light;
      text-align: center;
  }

  .input {
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
        display: flex;
        justify-content: center;
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
    box-shadow: 4px 5px 20px rgb(87, 94, 105);
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;

}

.button-main:hover,.form button:active,.form button:focus {
           background: rgb(243, 61, 115);
           border: solid rgb(243, 61, 115);
        }




      .confirmacion-modal {
          background: white;
          height: inherit;
          width: inherit;
          display: flex;
          justify-content: center;
          flex-direction: column;

        background-image: url("../assets/confirmar-01.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 400px;
          
      }


    .button-aceptar{
        width: 200px;
        justify-content: center;
        margin-left: 300px;
        text-align: center;
        margin-top: 350px;
    }

        .confirmar-texto {
            font-size: 4rem;
            color: blue;
            text-align: center;
            margin-bottom: 200px;
            font-family: Montserrat-light;
        
       
    }

    .confirmar-parrafo{
        font-family: montserrat-light;
        text-align: center;
    }

    .button-registrarme{
    margin-top: 40px;
    color: white;
    background-color: rgb(232, 45, 100);
    font-family: 'montserrat-light';
    border-radius: 5px;
    border: solid rgb(232, 45, 100);
    padding: 10px 70px;
    font-size: 1.5em;
    box-shadow: 4px 5px 20px rgb(87, 94, 105);
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;

}

.button-registrarme-main:hover,.form button:active,.form button:focus {
           background: rgb(243, 61, 115);
           border: solid rgb(243, 61, 115);
        }
    

.button-main{
    margin-left: 250px;
    margin-right: 250px;
    margin-top: 150px;
}


    </style>



   