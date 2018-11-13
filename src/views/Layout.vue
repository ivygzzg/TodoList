<template>
    <div>
        
        <layout-barra></layout-barra>
        
       
    <div class="fondo-2">

        <div class="fondo">
        <todo-list></todo-list>
       

       
        </div>

        <div class="fondo-1">
         <calendario-list></calendario-list>
         </div>

    </div>
         

    </div>
</template>

<script>

import TodoList from '@/components/TodoList.vue'
import LayoutBarra from '@/components/LayoutBarra.vue'
import CalendarioList from '@/components/CalendarioList.vue'



export default {
    name: 'Layout',
    components: {
        TodoList, LayoutBarra, CalendarioList
    }

    
}
</script>

<style>
    .main-content {
        background: red;
        width: 100%;
        height: calc(100vh - 80px);
        
    }

    .fondo-2{
        display: flex;
        justify-content: space-around;
    }

    .fondo{
        width: 550px;
        height: 500px;
        background-color: white;
        box-shadow: 4px 5px 20px rgb(87, 94, 105);
        /* margin-left: 50px; */
        margin-top: 40px;
        padding: 30px;
        margin-left: 20px;
    
    }

     .fondo-1{
        width: 550px;
        height: 500px;
        background-color: white;
        box-shadow: 4px 5px 20px rgb(87, 94, 105);
        margin-top: 40px;
        padding: 30px;
        margin-right: 20px;
    
    }
</style>


