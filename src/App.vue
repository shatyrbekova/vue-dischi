<template>
  <div id="app">
    <Header />
   
     <div class="container">
        <Main :elements="elements" />
       
     </div>
  </div>
</template>

//? perchè non funziona Bootstrap

<script>
import axios from 'axios';
import Header from './components/Header.vue'; 
import Main from './components/Main.vue'; 
export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data(){
    return{
       elements:[]
    }
  },
  created(){
    axios.get ('https://flynn.boolean.careers/exercises/api/array/music').then((result)=>{

      this.elements = result.data.response
    })
  }
};
</script>

<style lang="scss">
    @import "./style/app.scss";
</style>
