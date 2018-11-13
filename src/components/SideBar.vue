<template>
    <Slide>
        
        <Slide :burgerIcon="false" :crossIcon="false"/>
      <a id="home" href="#">
          <img :src="calendar" id="calendar" alt="grafico">
        <span>Calendario</span>
        
      </a>
      <a id="etiqueta" href="#">
        <img :src="label" id="label" alt="grafico">
        <span>Etiquetas</span>
         <ol>
            <ul>dos</ul>
            <ul>dos</ul>
            <ul>dos</ul>
            <ul>dos</ul>
        </ol>
      </a>
      <a id="home" href="#">
        <span>Cuenta</span>
      </a>
      <a id="home" href="#">
        <span>Cerrar Sesión</span>
      </a>
    </Slide>
</template>

<script>
import calendar from "@/assets/calendar.png"
import label from "@/assets/label.png"
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
 
export default {
    name: 'side-bar',
    data(){
        return{
            calendar, label
        }
    },
    components: {
        Slide // Register your component
    }
}
</script>

<style>
.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: white;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: white;
      height: 50px;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: #3F15F6; /* Black*/
      background-color: #3F15F6;opacity:0.95;
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }
 
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      /* font-weight:; */
      color: white;
      font-family: montserrat-light;
      font-size: 1em;
      font-family: Montserrat-Light;

    }

    #calendar{
        height: 30px;
    }

    #etiqueta{
      display: inline;
      color:white;
       
    }

    #label{
        height: 45px;
    }
</style>
